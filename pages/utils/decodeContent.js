export function decodeContent(str) {
  if (!str) return '';
  return str
    .replace(/\\n/g, '\n') // unescape \n
    .replace(/\\u003c/g, '<')
    .replace(/\\u003e/g, '>')
    .replace(/\\u0026/g, '&')
    .replace(/\\\\/g, ''); // remove double slashes
}
