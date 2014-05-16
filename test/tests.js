var chai = require('chai');
var expect = chai.expect;

var calculations = require('../calculations');

describe('add', function() {
	it('adds', function() {
		expect(calculations.add(3, 2)).to.eql(5);
	});
});

describe('subtract', function() {
	it('subtracts', function() {
		expect(calculations.sub(3, 2)).to.eql(1);
	});
});

describe('mult', function() {
	it('multiplies', function() {
		expect(calculations.mult(3, 2)).to.eql(6);
	});
});

describe('devide', function() {
	it('devides', function() {
		expect(calculations.dev(6, 2)).to.eql(3);
	});
});