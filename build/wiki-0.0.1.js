var Compiler;

Compiler = (function() {
  function Compiler(grammar) {
    this.grammar = grammar;
  }

  Compiler.prototype.build = function(wikiText) {
    var elem, i, j, k, len, len1, line, lines, ref;
    lines = wikiText.split(/\r?\n/);
    for (i = j = 0, len = lines.length; j < len; i = ++j) {
      line = lines[i];
      ref = this.grammar.lexicalElements;
      for (k = 0, len1 = ref.length; k < len1; k++) {
        elem = ref[k];
        if (line.match(elem.regexp) !== null) {
          if (typeof elem.translation === 'string') {
            lines[i] = line.replace(elem.regexp, elem.translation);
          }
        }
      }
    }
    return lines.join("\r\n");
  };

  return Compiler;

})();

var WikiGrammar;

WikiGrammar = (function() {
  function WikiGrammar() {
    this.lexicalElements = [
      {
        name: 'Heading 6',
        regexp: /^======\s(.*)\s======$/g,
        translation: '<h6>$1</h6>'
      }, {
        name: 'Heading 5',
        regexp: /^=====\s(.*)\s=====$/g,
        translation: '<h5>$1</h5>'
      }, {
        name: 'Heading 4',
        regexp: /^====\s(.*)\s====$/g,
        translation: '<h4>$1</h4>'
      }, {
        name: 'Heading 3',
        regexp: /^===\s(.*)\s===$/g,
        translation: '<h3>$1</h3>'
      }, {
        name: 'Heading 2',
        regexp: /^==\s(.*)\s==$/g,
        translation: '<h2>$1</h2>'
      }, {
        name: 'Heading 1',
        regexp: /^=\s(.*)\s=$/g,
        translation: '<h1>$1</h1>'
      }
    ];
  }

  return WikiGrammar;

})();
