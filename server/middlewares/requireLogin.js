// call next to pass to the next middleware
module.exports = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({ errpr: 'You must log in !' });
	}

	next();
};
