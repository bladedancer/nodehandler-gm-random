const specs = require('../src');
const action = require('../src/action');
const expect = require('chai').expect;
const { mocknode } = require('axway-flow-sdk');

describe('nodehandler-gm-random', () => {
	describe('#constructor', () => {
		it('[TEST-1] should define node specs', () => {
			expect(specs).to.exist;
			expect(typeof action).to.equal('function');
			expect(mocknode('gm-random')).to.exist;
		});
	});

	describe('#todo', () => {
		it('[TEST-2] should fail to with invalid argument', () => {
			// invoke gm-random#todo and check that the default callback is
			// called: cb('invalid argument')
			return mocknode(specs).node('gm-random').invoke('randInt', { min: 5, max: 4 })
			.then((data) => {
				expect(data).to.deep.equal({
					error: [null, 'Min must be less than max.']
				});
			});
		});

		it('[TEST-3] should succeed', () => {
			// invoke gm-random#todo and check that the 'next' output callback is
			// called: cb.next(null, 'todo')
			return mocknode(specs).node('gm-random').invoke('randInt', { min: 4, max: 9 })
				.then((data) => {
					expect(data).to.have.property('next');
					expect(data.next).to.have.length(2);
					expect(data.next[0]).to.be.null;
					expect(data.next[1]).to.be.at.least(4);
					expect(data.next[1]).to.be.at.most(9);
				});
		});
	});
});
