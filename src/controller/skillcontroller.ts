import { Request, Response } from "express";
import SkillData from "../model/skill.model";

// create and save the skill
export const saveSkills = async (req: Request, res: Response) => {
  try {
    const { skills } = req.body;

    let existing = await SkillData.findOne();

    if (existing) {
      existing.skills = skills;
      await existing.save();
      return res.status(200).json(existing);
    }

    const newSkill = await SkillData.create({ skills });
    res.status(201).json(newSkill);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get Skills
export const getSkills = async (req: Request, res: Response) => {
  try {
    const skills = await SkillData.findOne();
    res.status(200).json(skills);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// update the skill
export const updateSkills = async (req: Request, res: Response) => {
  try {
    const { skills } = req.body;

    const updated = await SkillData.findOneAndUpdate(
      {},
      { skills },
      { new: true }
    );

    res.status(200).json({
      success: true,
      skills: updated?.skills || []
    });

  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

