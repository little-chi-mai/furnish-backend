const userController = require("../controllers/userController");
module.exports = (app) => {
	app.route("/users").get(userController.listUsers).post(userController.createUser);

	app.route("/users/:userId").get(userController.findUser).put(userController.updateUser).delete(userController.deleteUser);
};
