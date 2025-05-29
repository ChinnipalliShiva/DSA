// function recurssivePalindrome(n) {
//   if (typeof n === "string") {
//     return checkPalindrome(n);
//   } else if (typeof n === "number") {
//     return checkPalindrome(n.toString());
//   }
// }

// function checkPalindrome(n) {
//   if (n.length <= 1) {
//     return true;
//   }
//   if (n.charAt(n.length - 1) !== n[0]) {
//     return false;
//   }
//   let updatedString = n.slice(1, -1);
//   return checkPalindrome(updatedString);
// }

// console.log(recurssivePalindrome("1221"));
// console.log(recurssivePalindrome(1221));
// console.log(recurssivePalindrome("gello"));

function recurssiveNumberPalindrome(n, org = n, rem = 0, rev = 0) {
  if (n <= 0) {
    return org === rev;
  }
  rem = n % 10;
  rev = rev * 10 + rem;
  n = Math.floor(n / 10);
  return recurssiveNumberPalindrome(n, org, rem, rev);
}
console.log(recurssiveNumberPalindrome(101));
console.log(recurssiveNumberPalindrome(102));
console.log(recurssiveNumberPalindrome(1221));
console.log(recurssiveNumberPalindrome(19391));

