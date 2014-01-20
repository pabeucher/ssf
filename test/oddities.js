/* vim: set ts=2: */
/*jshint loopfunc:true */
var SSF = require('../');
var fs = require('fs'), assert = require('assert');
var data = JSON.parse(fs.readFileSync('./test/oddities.json','utf8'));
describe('oddities', function() {
  data.forEach(function(d) {
    it(d[0], function(){
      for(j=1;j<d.length;++j) {
        if(d[j].length == 2) {
          var expected = d[j][1], actual = SSF.format(d[0], d[j][0], {});
          assert.equal(actual, expected);
        } else assert.throws(function() { SSF.format(d[0], d[j][0]); });
      }
    });
  });
});