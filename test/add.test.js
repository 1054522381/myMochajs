//add.test.js
var add = require('../src/add.js');
var expect = require('chai').expect;

describe('test add',function(){
	it('1+1=2',function(){
		expect(add(1,1)).to.be.equal(2);
	});	
});
