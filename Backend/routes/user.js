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

 /**
 * @description To get the authenticated user's profile
 * @api /api/user/my-profile
 * @access Private
 * @type GET <multipart-form> request
 */

 router.get("/my-profile", Authcontroller, async (req, res) => {
    try{
        let profile = await Profile.findOne({ account: user._id.req.user });
        if (!profile) {
            return res.status(404).json({
                success: false,
                mssg: "Your profile does not exist.",
            });
        }
        return res.status(200).json({
            success: true,
            profile,
        })
    } catch(err) {
        return res.status(400).json({
            success: false,
            mssg: "Unable to get your profile.",
        });
        
    }
 });
       



module.exports = router;