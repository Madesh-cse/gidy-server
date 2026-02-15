import { NextFunction, Request, Response } from "express";
import EducationSchemaData from "../model/education.model";

export const EducationPostData = async (req: Request, res: Response) => {
  try {
    const {college,degree,fieldOfStudy,location,startDate,endDate,currentlyStudying} = req.body;

    const eduPost = await EducationSchemaData.create({
      college,
      degree,
      fieldOfStudy,
      location,
      startDate,
      endDate,
      currentlyStudying,
    });

    return res.status(201).json({
      success: true,
      message: "Education added",
      eduPost,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Failed to add education",
    });
  }
};

//  get the education detail
export const getEducation = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const education = await EducationSchemaData.find().sort({startDate: -1 })
        res.status(200).json({
            success:"true",
            message:"Detail is sucessfully fetched",
            education
        })
    }
    catch(err:any){
        res.status(500).json({ message: "Failed to fetch education", err });
    }
}

// update the education field
export const updateEducation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const {
      college,
      degree,
      fieldOfStudy,
      location,
      startDate,
      endDate,
      currentlyStudying,
    } = req.body;

    const updatedEducation = await EducationSchemaData.findByIdAndUpdate(
      id,
      {
        college,
        degree,
        fieldOfStudy,
        location,
        startDate,
        endDate,
        currentlyStudying,
      },
      { new: true, runValidators: true }
    );

    if (!updatedEducation) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Education updated successfully",
      education: updatedEducation,
    });

  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
