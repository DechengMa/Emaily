const express = require('express');
// withou assign, just execute
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(
	keys.mongoURI,
	{ useNewUrlParser: true }
);

const app = express();

app.use(
	cookieSession({
		// want cookie last 30 days
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// environment variables
const PORT = process.env.PORT || 5000;

app.listen(PORT);
