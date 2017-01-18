var expect = require('chai').expect;
describe('block',function(){
	var foo = false;
	it('test case3',function(){
		setTimeout(function(){
			console.log('====test case3 setTimeout====');
		},5000);
	});
	it('test case0',function(){
		console.log('====000====');
		setTimeout(function(){
			console.log('====test case0 setTimeout====');
		},5000);
	});
	it('test case1',function(){
		console.log('====111====');
		expect(foo).to.be.equal(false);
	});
});
