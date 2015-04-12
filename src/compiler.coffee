class Compiler
    constructor: (grammar) ->
        @grammar = grammar

    build: (source) ->
        objectCode = source
        objectCode = objectCode.replace(elem.regexp, elem.translation) for elem in @grammar.lexicalElements
        return objectCode
