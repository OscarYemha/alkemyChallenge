const express = require("express");
const parser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./api/db/db");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./api/Routes");
const { User, Registry } = require("./api/Models/index");

const app = express();
app.use(helmet());
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    origin: true,
  })
);
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: "alkemy",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("You are in serializeUser", user.id);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/api", routes);
app.use("/*", (req, res) => {
  res.redirect("/api");
});

db.sync({ force: false }).then(() => {
  app.listen(4000, () => console.log("Listening on port 4000"));
});

module.exports = app;
