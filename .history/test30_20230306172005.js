// write a js function to convert a string to snake case
// break the string into words and combine them adding "_" as a separator, using a regexp
const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
    toSnakeCase('camelCase'); // 'camel_case'
console.log(
    toSnakeCase('some text')
);
console.log(
    toSnakeCase('camelCase')
);
console.log(
    toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens')
);
console.log(
    toSnakeCase('AllThe-small Things')
);
console.log(
    toSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML')
);
toSnakeCase('some text'); // 'some_text'
toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens'); // 'some_mixed_string_with_spaces_underscores_and_hyphens'
toSnakeCase('AllThe-small Things'); // "all_the_smal_things"
toSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'); // "i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html"