import { Request, Response, NextFunction } from "express";
import profileSchemaData from "../model/profile.model";

export const createProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, bio } = req.body;

    const files = req.files as {
      [fieldname: string]: Express.Multer.File[];
    };

    const profileImage = files?.profileImage
      ? `/uploads/${files.profileImage[0].filename}`
      : null;

    const resume = files?.resume
      ? `/uploads/${files.resume[0].filename}`
      : null;

    const newProfile = await profileSchemaData.create({
      firstName,
      lastName,
      email,
      bio,
      profileImage,
      resume,
    });

    return res.status(201).json({
      success: true,
      message: "Profile created successfully",
      data: newProfile,
    });
  } catch (error) {
    next(error);
  }
};

// fetch the profile data from the DB

export const getProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const profile = await profileSchemaData.findOne().sort({ createdAt: -1 });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "No profile found",
      });
    }

    return res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

// update the profile
export const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, bio } = req.body;

    const files = req.files as {
      [fieldname: string]: Express.Multer.File[];
    };

    let updateData: any = {
      firstName,
      lastName,
      email,
      bio,
    };

    if (files?.profileImage) {
      updateData.profileImage = `/uploads/${files.profileImage[0].filename}`;
    }

    if (files?.resume) {
      updateData.resume = `/uploads/${files.resume[0].filename}`;
    }

    const updatedProfile = await profileSchemaData.findOneAndUpdate(
      {},
      updateData,
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedProfile,
    });
  } catch (error) {
    next(error);
  }
};


