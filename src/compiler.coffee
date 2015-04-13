class Compiler
    constructor: (grammar) ->
        @grammar = grammar

    build: (wikiText) ->
        lines = wikiText.split(/\r?\n/);

        for line, i in lines
            for elem in @grammar.lexicalElements
                if line.match(elem.regexp) != null
                    if typeof elem.translation == 'string'
                        lines[i] = line.replace(elem.regexp, elem.translation)


        return lines.join("\r\n");
