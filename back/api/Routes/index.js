const router = require("express").Router();
const passport = require("passport");
const { User, Registry } = require("../Models/index");
const S = require("sequelize");

router.post("/register", (req, res) => {
  User.create(req.body).then((users) => {
    console.log("You have created an account!");
    res.send(users);
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("You are logged");
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("Logout");
    req.logOut();
  }
  res.sendStatus(200);
});

router.post("/createnewregistry", (req, res) => {
  Registry.create(req.body).then((registry) => {
    console.log("You have created a registry!");
    res.send(registry);
  });
});

router.get("/allregistries", (req, res) => {
  Registry.findAll().then((registries) => {
    res.send(registries);
  });
});

router.get("/registries", (req, res) => {
  Registry.findAll({
    limit: 10,
    order: [["id", "DESC"]],
  }).then((registries) => {
    res.send(registries);
  });
});

router.put("/registry/delete", (req, res) => {
  Registry.destroy({
    where: {
      id: req.body.registry.id,
    },
  }).then(() => res.sendStatus(200));
});

router.get("/me", (req, res) => {
  Registry.findAll(res.send(registries));
});

module.exports = router;
