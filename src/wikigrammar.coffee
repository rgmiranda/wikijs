class WikiGrammar
    constructor : () ->
        @lexicalElements = [
            # Heading elements.
            { name: 'Heading 6', regexp: /^======\s(.*)\s======$/g, translation: '<h6>$1</h6>' },
            { name: 'Heading 5', regexp: /^=====\s(.*)\s=====$/g, translation: '<h5>$1</h5>' },
            { name: 'Heading 4', regexp: /^====\s(.*)\s====$/g, translation: '<h4>$1</h4>' },
            { name: 'Heading 3', regexp: /^===\s(.*)\s===$/g, translation: '<h3>$1</h3>' },
            { name: 'Heading 2', regexp: /^==\s(.*)\s==$/g, translation: '<h2>$1</h2>' },
            { name: 'Heading 1', regexp: /^=\s(.*)\s=$/g, translation: '<h1>$1</h1>' }

            
        ]
