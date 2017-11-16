const sdk = require('axway-flow-sdk');
const action = require('./action');

const flownodes = sdk.init(module);

// The unique name of your flow-node.  You can define multiple flow-nodes in this
// file, but one is typical.
flownodes.add('gm-random', {
	name: 'Random',
	// file support for: svg, png, gif, bmp, jpg, and tiff
	icon: 'dice.png',
	description: 'Return a random value'
})
	// Add a method to your flow-node.
	.method('randInt', {
		name: 'Random Integer',
		description: 'Return a random integer.'
	})
	// Add parameter(s) to your method.
	.parameter('min', {
		description: 'The minimum. Default 0',
		type: 'integer'
	})
	.parameter('max', {
		description: 'The maximum. Default 100',
		type: 'integer'
	})
	// Once all parameters for the method are defined, add output(s) to your method.
	.output('next', {
		name: 'Next',
		context: '$.value',
		schema: {
			type: 'integer'
		}
	})
	.output('error', {
		name: 'Error',
		context: '$.error',
		schema: {
			type: 'string'
		}
	})
	// Provide the actual javascript implementation.  ES6 supported through babel.
	.action(action);

exports = module.exports = flownodes;
