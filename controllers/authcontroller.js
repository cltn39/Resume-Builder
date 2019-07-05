var exports = (module.exports = {});
exports.welcome = function(req, res) {
    res.render("welcome");
}
exports.signup = function(req, res) {
  res.render("signup");
};
exports.signin = function(req, res) {
  res.render("signin");
};

exports.dashboard = function(req, res) {
  res.render("dashboard");
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};

