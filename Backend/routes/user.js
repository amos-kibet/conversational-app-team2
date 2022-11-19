const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const uploader = require("../middlewares/uploader");

//Usercontroller functions

const {
    Usercontroller,
    Logincontroller,
    Authcontroller,
    listUser,
    CheckRole,
} = require("../controllers/user");
const { DOMAIN } = require("../config");



//Users Registration route
router
    .post("/register", async (req, res) => {
        await Usercontroller(req.body, "user", res)
    });

//Users Login route
router
    .post("/login", async (req, res) => {
        await Logincontroller(req.body, "user", res)
    });

//Get Profile route
router
    .get("/authenticate", Authcontroller, CheckRole(["user"]), async (req, res) => {
        return res
            .json(listUser(req.user))
    });

/**
 * @description To create profile of the authenticated user
 * @api /api/user/create-profile
 * @access Private
 * @type POST <multipart-form> request
 */

router
    .post("/create-profile", Authcontroller, uploader.single("avatar"),
        async (req, res) => {
            try {
                let { body, file, user } = req;
                let path = DOMAIN + file.path.split("uploads")[1];
                let profile = new Profile({
                    social: body,
                    account: user._id,
                    avatar: path,
                });
                //console.log('USER_PROFILE', profile)
                await profile.save();
                return res
                    .status(201)
                    .json({
                        mssg: "Your profile has been created.",
                        success: true,
                    })
            } catch {
                //console.log(err)
                return res
                    .status(400)
                    .json({
                        mssg: "We are not able to create your profile.",
                        success: false,
                    })
            }
        })



module.exports = router;