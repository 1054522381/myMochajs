/*
define(function(require, exports, module) {
	var expect = require('node_modules/chai/chai.js').expect;
	return describe('test add',function(){
			it('1+1=2',function(){
					console.log("==============");
					expect(add(1,1)).to.be.equal(2);
			});
	});
});*/

require(['config/require.config'], function() {
	require(['node_modules/chai/chai.js'], function(chai) {
        var expect = chai.expect;
		describe('test add',function(){
			it('1+1=2',function(){
					console.log("==============");
					expect(add(1,1)).to.be.equal(2);
			});
		});
    });
	
});
