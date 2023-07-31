module.exports = function reverse (n) {
  let string = String(Math.abs(n)).split('');
  let result = [];
  for (let i = string.length; i >= 0; i--) {
    result.push(string[i]);
  }
  return result.join('');
}
