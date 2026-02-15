import { Router } from "express";
import { saveSkills } from "../controller/skillcontroller";
import { getSkills } from "../controller/skillcontroller";
import { updateSkills } from "../controller/skillcontroller";

const SkillRouter = Router();

SkillRouter.post("/create",saveSkills );
SkillRouter.get("/fetch",getSkills);
SkillRouter.put("/update/:id", updateSkills)

export default SkillRouter