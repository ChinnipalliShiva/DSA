// function Palindrome(n) {
//   let temp = n;
//   let reverse = 0;
//   let rem;
//   while (n > 0) {
//     rem = n % 10;
//     reverse = reverse * 10 + rem;
//     n = Math.floor(n / 10);
//   }
//   console.log("reverse", reverse);
//   return temp === reverse;
// }
// console.log(Palindrome(121));
// console.log(Palindrome(10));

function recurssionPalindrome(n) {
  if (n <= 0) {
    return 1;
  }
  let org = n;
  let reverse = 0;
  let rem = n % 10;
  reverse = reverse * 10 + rem;
  n = Math.floor(n / 10);
  return org === recurssionPalindrome(n);
}
console.log(recurssionPalindrome(121));
console.log(recurssionPalindrome(10));
