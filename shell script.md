# AWS MFA Authentication Script Documentation

## Prerequisites
1. AWS credentials file (`~/.aws/credentials`) must be configured with:
   - Your AWS profile credentials
   - MFA ARN configuration

Example credentials file structure:
```ini
[your_profile]
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_KEY

[your_profile_mfa_arn]
mfa = arn:aws:iam::ACCOUNT_ID:mfa/USER

# For multiple profiles:
[another_profile]
aws_access_key_id = ANOTHER_ACCESS_KEY
aws_secret_access_key = ANOTHER_SECRET_KEY

[another_profile_mfa_arn]
mfa = arn:aws:iam::ANOTHER_ACCOUNT_ID:mfa/ANOTHER_USER
```

## Inputs and Error Handling
The script requires the following inputs:
1. **Profile Name**: Your AWS profile name as configured in credentials file
2. **MFA Code**: 6-digit MFA token from your authenticator device

Error checks include:
- Verification of AWS credentials file existence
- Validation of MFA ARN configuration
- MFA code format validation (must be 6 digits)
- AWS session token generation validation
- JSON response parsing verification

## How to Run
1. Double-click the script file `file_name.sh`, or
2. Run from terminal:
```bash
./file_name.sh
```

## Important Notes
- **Default Credentials Path**: The script looks for credentials at `$HOME/.aws/credentials`
- If your credentials file is in a different location, modify this line in the script:
```bash
aws_credentials_file="$HOME/.aws/credentials"
```
- The script will create/update the `[default]` profile with temporary credentials
- A new shell session will start automatically after successful execution
- Temporary files are automatically cleaned up on script exit

## Script Code
```bash
read -p "Enter Profile Name : " profile_name
export AWS_PROFILE=$profile_name
aws_credentials_file="$HOME/.aws/credentials"
temp_file="temp.json"
 
# Cleanup temp file on exit
trap "rm -f $temp_file" EXIT
 
# Check if AWS credentials file exists
if [ ! -f "$aws_credentials_file" ]; then
    echo "Error: AWS credentials file not found."
    exec bash
fi
echo "Found credentials file."
sed -i '/\[default\]/,/^$/d' "$aws_credentials_file"
 
# Extract MFA ARN
mfa_arn=$(awk -v profile="$profile_name" '/\[.+_mfa_arn\]/{if ($0 ~ "\\["profile"_mfa_arn\\]") {getline; print}}' "$aws_credentials_file" | cut -d'=' -f2 | xargs)
if [ -z "$mfa_arn" ]; then
    echo "Error: MFA ARN not found in credentials file."
    exec bash
fi
echo "MFA ARN: found in credentials file."
 
# Prompt for user input and validate
while true; do
    read -p "Enter 6-digit MFA Code: " mfa_code
    if [[ "$mfa_code" =~ ^[0-9]{6}$ ]]; then
        break
    else
        echo "Error: MFA Code must be exactly 6 digits."
    fi
done
 
# Validate input
if [ -z "$mfa_code" ]; then
    echo "Error: MFA Code are required."
    exec bash
fi
 
# Get session token
aws sts get-session-token --serial-number "$mfa_arn" --token-code "$mfa_code" >"$temp_file"
 
if [ $? -ne 0 ]; then
    echo "Error: Failed to get session token."
    exec bash
fi
 
# Extract credentials
aws_access_key_id=$(awk -F'"' '/AccessKeyId/{print $4}' "$temp_file")
aws_secret_access_key=$(awk -F'"' '/SecretAccessKey/{print $4}' "$temp_file")
aws_session_token=$(awk -F'"' '/SessionToken/{print $4}' "$temp_file")
 
if [ -z "$aws_access_key_id" ] || [ -z "$aws_secret_access_key" ] || [ -z "$aws_session_token" ]; then
    echo "Error: Failed to parse JSON response."
    exec bash
fi
 
# Update AWS credentials file
sed -i '/\[default\]/q' "$aws_credentials_file"
{
    echo -e "\n\n[default]"
    echo "aws_access_key_id = $aws_access_key_id"
    echo "aws_secret_access_key = $aws_secret_access_key"
    echo "aws_session_token = $aws_session_token"
} >>"$aws_credentials_file"
echo "Temporary credentials added under [default] profile."

# Replace the read command with this
echo "Script completed. Starting new shell..."
exec bash
```