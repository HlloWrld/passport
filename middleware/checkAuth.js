module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/auth/login");
  },

  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/dashboard");
  },

  // admin function not working properly 
  isAdmin: function (req, res, next) {
    if (req.admin()) {
      return next();
    }
    res.redirect("/dashboard");
  }

};
