const authController = require("../controllers/authController");

module.exports = (app) => {
	app.route("/login").post(authController.login);

	app.route("/logout").delete(authController.logout);

	app.route("/isloggedin").get(authController.isLoggedIn);
};
