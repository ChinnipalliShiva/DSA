function reverseString(n) {
  if (!n) {
    console.log(n);
    return "";
  }
  return n.slice(-1) + reverseString(n.slice(0, n.length - 1));
}

function stringPalindrome(n) {
  let reverse = reverseString(n);

  return n === reverse;
}
console.log(stringPalindrome("saas"));
console.log(stringPalindrome("paas"));
console.log(stringPalindrome("dad"));
console.log(stringPalindrome("mom"));
console.log(stringPalindrome("good"));


