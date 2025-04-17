function repeatedChar(n, character, c = 0) {
  if (n.length === 0) {
    return c;
  }
  if (n.charAt(0) === character) {
    c++;
  }
  return repeatedChar(n.slice(1), character, c);
}

console.log(repeatedChar("hellol", "l"));
