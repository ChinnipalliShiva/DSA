/**
 * Determines if two strings are one edit distance apart
 * Valid operations: insert, delete, or replace a character
 * @param {string} a - First string to compare
 * @param {string} b - Second string to compare
 * @returns {boolean} - True if strings are one edit distance apart, false otherwise
 */
function main(a, b) {
  // Validate both strings contain only lowercase letters
  if (!validation(a) || !validation(b)) {
    return false;
  }

  // If length difference is more than 1, more than one operation would be needed
  if (Math.abs(a.length - b.length) > 1) {
    return false;
  }

  let i = 0, // pointer for string a
    j = 0, // pointer for string b
    diff = 0; // count of differences found

  // Compare characters until we reach the end of either string
  while (i < a.length && j < b.length) {
    if (a[i] !== b[j]) {
      diff++;
      // If more than one difference found, strings are not one edit apart
      if (diff > 1) return false;

      // Handle the three possible cases:
      if (a.length > b.length) {
        i++; // Case 1: Delete character from string a
      } else if (a.length < b.length) {
        j++; // Case 2: Insert character into string a (skip character in b)
      } else {
        i++; // Case 3: Replace character
        j++;
      }
    } else {
      // Characters match, move both pointers
      i++;
      j++;
    }
  }

  // Handle case where one string has an extra character at the end
  if (i < a.length || j < b.length) {
    diff++;
  }

  return diff <= 1;
}

/**
 * Validates if a string contains only lowercase letters (a-z)
 * @param {string} str - String to validate
 * @returns {boolean} - True if string contains only lowercase letters, false otherwise
 */
function validation(str) {
  if (typeof str !== "string") return false; // Added type check

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code < 97 || code > 122) {
      return false;
    }
  }
  return true;
}

// Test cases
console.log(main("abc", "abdd")); // false
console.log(main("abc", "ab")); // true (deletion)
console.log(main("abc", "abcd")); // true (insertion)
console.log(main("abc", "abd")); // true (replacement)
console.log(main("abc", "def")); // false (multiple changes)
console.log(main("ABC", "abc")); // false (invalid input - uppercase)
