import { Router } from "express";
import { createProfile } from "../controller/profilecontroller";
import { getProfile } from "../controller/profilecontroller";
import { upload } from "../middleware/upload.middleware";
import { updateProfile } from "../controller/profilecontroller";

const ProfileRouter = Router();

ProfileRouter.post("/create",  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]), createProfile );

ProfileRouter.get("/bio-details",getProfile);
ProfileRouter.put(
  "/update-bio-details",
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  updateProfile
);

export default ProfileRouter