// write a js function to convert a string to snake case
// break the string into words and combine them adding "_" as a separator, using a regexp
const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

console.log(
    toSnakeCase('some text'));
