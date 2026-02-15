const moongose = require("mongoose");
const Schema = moongose.Schema();

const cerificateschema = moongose.Schema({
  certificationName: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  certificationUrl: {
    type: String,
  },
  certificationId: {
    type: String,
  },
  issuedDate: {
    type: String,
  },
  expiryDate: {
    type: String,
  },
  description: {
    type: String,
  },
},{
    timestamps: true
});

const CertificationData = moongose.model("Certification", cerificateschema);
export default CertificationData