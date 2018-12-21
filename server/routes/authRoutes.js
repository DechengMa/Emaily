const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google',
		// Tell passport to use google Strategy
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/', (req, res) => {
		res.send({ hi: 'there !' });
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
