exports = module.exports = function (req, cb) {
	const min = req.params.min || 0;
	const max = req.params.min || 100;
	if (!min > max) {
		// invoking the callback with an error will terminate the flow.
		return cb('Min must be less than max.');
	}
	cb.next(null, min + (Math.random() * (max-min)));
};
