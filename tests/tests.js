var grammar = new WikiGrammar('Hola');
console.log(grammar.lexicalElements);
console.log(grammar);
var compiler = new Compiler(new WikiGrammar());

QUnit.test( "Heading 1 Test", function( assert ) {

    var tests = [
        ["<h1>Hello World!!</h1>", "= Hello World!! ="],
        ["<h1></h1>", "=  ="],
        ["= This should stay like this... ==", "= This should stay like this... =="],
        ["<h1> Oh my </h1>", "=  Oh my  ="]
    ];

    for (var i in tests) {
        assert.equal( tests[i][0], compiler.build(tests[i][1]), "Passed!" );
    }

});

QUnit.test( "Heading 2 Test", function( assert ) {

    var tests = [
    ["<h2>This is a Heading</h2>", "== This is a Heading =="],
    ["<h2></h2>", "==  =="],
    ["<h2> </h2>", "==   =="],
    ["<h2> Oh my </h2>", "==  Oh my  =="]
    ];

    for (var i in tests) {
        assert.equal( tests[i][0], compiler.build(tests[i][1]), "Passed!" );
    }

});
