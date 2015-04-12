var Compiler;

Compiler = (function() {
  function Compiler(grammar) {
    this.grammar = grammar;
  }

  Compiler.prototype.build = function(source) {
    var elem, i, len, objectCode, ref;
    objectCode = source;
    ref = this.grammar.lexicalElements;
    for (i = 0, len = ref.length; i < len; i++) {
      elem = ref[i];
      objectCode = objectCode.replace(elem.regexp, elem.translation);
    }
    return objectCode;
  };

  return Compiler;

})();

var Element;

Element = (function() {
  function Element(elementName, elementRegexp, elementTranslation) {
    this.name = elementName;
    this.regexp = elementRegexp;
    this.translation = elementTranslation;
  }

  return Element;

})();

var WikiGrammar;

WikiGrammar = (function() {
  function WikiGrammar() {
    this.lexicalElements = [new Element('Heading 6', /======\s([^=]+)\s======/g, '<h6>$1</h6>'), new Element('Heading 5', /=====\s([^=]+)\s=====/g, '<h5>$1</h5>'), new Element('Heading 4', /====\s([^=]+)\s====/g, '<h4>$1</5>'), new Element('Heading 3', /===\s([^=]+)\s===/g, '<h3>$1</h3>'), new Element('Heading 2', /==\s([^=]+)\s==/g, '<h2>$1</h2>'), new Element('Heading 1', /=\s([^=]+)\s=/g, '<h1>$1</h1>')];
  }

  return WikiGrammar;

})();
