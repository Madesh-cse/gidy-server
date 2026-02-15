import { Router } from "express";
import {
  createCareerGoal,
  getCareerGoals,
  updateCareerGoal,
} from "../controller/carrergoalcontroller";

const CareerGoalRouter = Router();

CareerGoalRouter.post("/create", createCareerGoal);
CareerGoalRouter.get("/fetch", getCareerGoals);
CareerGoalRouter.put("/update/:id", updateCareerGoal);

export default CareerGoalRouter;
