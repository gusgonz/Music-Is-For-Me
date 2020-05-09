const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/music_is_for_me";
const PORT = process.env.PORT || 3001;
const app = express();

// const startSpotifyServer = require("./spotify-auth/spotify-server");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  console.log("hit");
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(console.log(`MongoDB connected ${MONGODB_URI}`))
  .catch(err => console.log(err));


// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Add routes, including Auth, API, view
app.use(routes);

// express session
app.use(
  session({
    secret: "We like music",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);



// startSpotifyServer(app);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

