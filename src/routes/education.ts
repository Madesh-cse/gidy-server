import { Router } from "express";
import { EducationPostData } from "../controller/educationcontroller";
import { getEducation } from "../controller/educationcontroller";
import { updateEducation } from "../controller/educationcontroller";

const EducationRouter = Router();

EducationRouter.post("/create", EducationPostData);
EducationRouter.get("/edu-details", getEducation);
EducationRouter.put("/update/:id", updateEducation)

export default EducationRouter;