import { Router } from "express";
import { createExprience } from "../controller/expriencecontroller";
import { getExprience } from "../controller/expriencecontroller";
import { updateExprience } from "../controller/expriencecontroller";

const ExprienceRouter = Router();

ExprienceRouter.post("/create",createExprience);
ExprienceRouter.get("/fetch",getExprience);
ExprienceRouter.put("/update/:id", updateExprience);

export default ExprienceRouter;