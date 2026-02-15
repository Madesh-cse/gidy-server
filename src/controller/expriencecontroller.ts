import { Request, Response } from "express";
import ExprienceData from "../model/exprience.model";

// post the exprience
export const createExprience = async(req:Request,res:Response)=>{
    try{
        const {role,company,location,joinDate,leaveDate, currentlyWorking} = req.body
        const exprience = await ExprienceData.create({
            role,
            company,
            location,
            joinDate,
            leaveDate,
            currentlyWorking
        })
        return res.status(201).json({
            success:"true",
            message:"Exprience is added succesfully",
            exprience
        })
    }
    catch(err:any){
        res.status(500).json({ message: err.message });
    }
}

// fetch the exprience
export const getExprience = async (req: Request, res: Response) => {
  try {
    const exprience = await ExprienceData.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      exprience,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const updateExprience = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updated = await ExprienceData.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.status(200).json({
      success: true,
      message: "Experience updated successfully",
      updated,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};