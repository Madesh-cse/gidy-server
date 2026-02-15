import { Router } from "express";
import { createCertificate } from "../controller/certificationcontroller";
import { getCertificates } from "../controller/certificationcontroller";
import { updateCertificate } from "../controller/certificationcontroller";

const certificateRouter = Router();

certificateRouter.post("/create", createCertificate);
certificateRouter.get("/fetch", getCertificates);
certificateRouter.put("/update-certificate/:id",updateCertificate)

export default certificateRouter