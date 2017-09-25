// var asciify = require('asciify'); // this is how we can import external modules
//
// asciify('Awesome', function(err, res){ console.log(res) });

var test = require("tape");
var tapSpec = require("tap-spec");

function sqr(x) {
  return x*x;
}

test("First test", function(t) {
 t.true(true, "Shoud word easily");
 t.equal(sqr(10), 100, "Sqr works");
 t.equal(sqr(10), 99, "Sqr works");
 t.end();
});
