import { Request, Response } from "express";
import CertificationData from "../model/certificate.model";

export const createCertificate = async (req: Request, res: Response) => {
  try {
    const {
      certificationName,
      provider,
      certificationUrl,
      certificationId,
      issuedDate,
      expiryDate,
      description,
    } = req.body;
    const certificate = await CertificationData.create({
      certificationName,
      provider,
      certificationUrl,
      certificationId,
      issuedDate,
      expiryDate,
      description,
    });
    res.status(201).json({
      success: true,
      message: "Certificate created successfully",
      certificate: certificate,
    });
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//fetch the data

export const getCertificates = async ( req: Request,res: Response) => {
  try {
    const certificates = await CertificationData.find().sort({ createdAt: -1,});
    res.status(200).json({
      success: true,
      certificates,
    });

  } catch (err: any) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// update the 
export const updateCertificate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const {
      certificationName,
      provider,
      certificationUrl,
      certificationId,
      issuedDate,
      expiryDate,
      description,
    } = req.body;

    const updatedCertificate = await CertificationData.findByIdAndUpdate(
      id,
      {
        certificationName,
        provider,
        certificationUrl,
        certificationId,
        issuedDate,
        expiryDate,
        description,
      },
      {
        new: true,        // return updated document
        runValidators: true,
      }
    );

    if (!updatedCertificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Certificate updated successfully",
      certificate: updatedCertificate,
    });

  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
