const express= require("express")
const router = express.Router({mergeParams : true});
const User = require("../models/user.js")
const wrapAsync = require("../utils/wrapAsync.js")
const passport = require("passport")
const LocalStrategy = require("passport-local")
const {saveRedirectUrl} = require("../middleware.js")

const UsersController = require("../controllers/users.js")


router.route("/signup")
.get( UsersController.renderSignUpForm)
.post( wrapAsync (UsersController.signUp))

router.route("/login")
.get( UsersController.renderLoginForm )
.post( saveRedirectUrl, passport.authenticate("local", {failureRedirect : "/login", failureFlash : true}), UsersController.login
);


router.get("/logout", UsersController.logout )


module.exports = router;