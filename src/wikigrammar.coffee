class WikiGrammar
    constructor : () ->
        @lexicalElements = [
            new Element( 'Heading 6', /======\s([^=]+)\s======/g, '<h6>$1</h6>' ),
            new Element( 'Heading 5', /=====\s([^=]+)\s=====/g, '<h5>$1</h5>' ),
            new Element( 'Heading 4', /====\s([^=]+)\s====/g, '<h4>$1</5>' ),
            new Element( 'Heading 3', /===\s([^=]+)\s===/g, '<h3>$1</h3>' ),
            new Element( 'Heading 2', /==\s([^=]+)\s==/g, '<h2>$1</h2>' ),
            new Element( 'Heading 1', /=\s([^=]+)\s=/g, '<h1>$1</h1>' )
        ]
