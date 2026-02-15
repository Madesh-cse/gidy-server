import { Router } from "express";
import ProfileRouter from "./profile";
import EducationRouter from "./education";
import ExprienceRouter from "./exprience";
import certificateRouter from "./certificate";
import SkillRouter from "./skill";
import CareerGoalRouter from "./carrer";

const appRouter = Router();

appRouter.use("/bio",  ProfileRouter);
appRouter.use("/edu", EducationRouter);
appRouter.use("/exp",ExprienceRouter);
appRouter.use("/certificate", certificateRouter);
appRouter.use("/skill", SkillRouter);
appRouter.use("/career-goals",CareerGoalRouter)
export default appRouter