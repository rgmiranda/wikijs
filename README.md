# Wiki.js

This is an attempt of creating a simple MediaWiki markup to JS compiler.
This should be improved over time... hopefully.

## Installation
Download the wiki-x.x.x.js (or the minimified) file in build and put it in
your page. That's it.

### Require JS
Soon...

### Node JS
Not soon. Sorry.

## Compiling
I'm still new in Grunt, so the Gruntfile is evolving as my experience does.
Everthing you need is in the ```src ``` directory. You could use Grunt or just
the CoffeeScript compiler.
If you think this should be better explained, just let me know.

## Executing
This should do the trick.
```javascript
var grammar = new WikiGrammar();
var compiler = new Compiler(grammar);
compiler.build(myWikiString);
```
I thought it would be a good idea to separate the grammar from the compiler.
You know, just in case you needed to work with other "dialects", like Creole.

## API
None for the moment.
