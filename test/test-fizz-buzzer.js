//import chai, declare expect variable
const expect = require('chai').expect;

//import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

//unit tests for fizzBuzzer function

describe('fizzBuzzer', function() {
	//test normal cases
	it('should change numbers divisible by 3 to "fizz," by 5 to "buzz" and by both to "fizz-buzz"', function() {
		const normalCases = [
			{num: 3, expected: "fizz"},
			{num: 5, expected: "buzz"},
			{num: 4, expected: 4},
			{num: 15, expected: "fizz-buzz"},
			{num: 33, expected: "fizz"},
			{num: 35, expected: "buzz"}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});
	});

	it('should raise an error if arg is not a number', function() {
		//test range of bad cases
		const badInputs = [
			'hello',
			true
		];
		//prove that an error is raised with bad input
		badInputs.forEach(function(input) {
			expect(function() {
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});