import { Request, Response } from "express";
import CarrerData from "../model/careergoal.model";

export const createCareerGoal = async (req: Request, res: Response) => {
  try {
    console.log("Received body:", req.body);
    const newGoal = new CarrerData(req.body);
    await newGoal.save();
    res.status(201).json({ message: "Career goal added", goal: newGoal });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to create career goal", details: err });
  }
};

export const getCareerGoals = async (req: Request, res: Response) => {
  try {
    const goals = await CarrerData.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: goals.length,
      data: goals,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch career goals", details: err });
  }
};

// Update Career Goal by ID
export const updateCareerGoal = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedGoal = await CarrerData.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedGoal) return res.status(404).json({ error: "Goal not found" });
    res.status(200).json({ message: "Career goal updated", goal: updatedGoal });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to update career goal", details: err });
  }
};
