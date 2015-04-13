var grammar = new WikiGrammar();
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

QUnit.test( "Heading 3 Test", function( assert ) {

    var tests = [
    ["<h3>This is a Heading</h3>", "=== This is a Heading ==="],
    ["<h3></h3>", "===  ==="],
    ["=== ===", "=== ==="],
    ["<h3> </h3>", "===   ==="]
    ];

    for (var i in tests) {
        assert.equal( tests[i][0], compiler.build(tests[i][1]), "Passed!" );
    }

});

QUnit.test( "Heading 4 Test", function( assert ) {

    var tests = [
    ["<h4>This is a Heading</h4>", "==== This is a Heading ===="],
    ["<h4></h4>", "====  ===="],
    ["<h4> </h4>", "====   ===="],
    ["<h4> Oh my </h4>", "====  Oh my  ===="]
    ];

    for (var i in tests) {
        assert.equal( tests[i][0], compiler.build(tests[i][1]), "Passed!" );
    }

});

QUnit.test( "Mixed Headings", function( assert ) {

    var tests = [
    ["<h3>H3</h3>\r\n<h4>H4</h4>", "=== H3 ===\n==== H4 ===="],
    ["<h1>H1</h1>\r\n<h2>H2</h2>\r\n<h1></h1>", "= H1 =\n== H2 ==\n=  ="],
    ["=H1=\r\n<h4>H4</h4>", "=H1=\n==== H4 ===="]
    ];

    for (var i in tests) {
        assert.equal( tests[i][0], compiler.build(tests[i][1]), "Passed!" );
    }

});
