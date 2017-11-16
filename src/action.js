exports = module.exports = function (req, cb) {
	const min = req.params.min || 0;
	const max = req.params.max || 100;
	if (min > max) {
		return cb.error(null, 'Min must be less than max.');
	}
	cb.next(null, min + Math.floor((Math.random() * (max + 1 - min))));
};
