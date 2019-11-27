const expect = chai.expect;
console.log("=====tests=========");

before(function() {
	console.log("======before========");
});

after(function() {
	console.log("======after========");
});

describe('test add',function(){
	it('1+1=2',function(){
			console.log("======it========");
			expect(add(1,1)).to.be.equal(2);
	});
});
