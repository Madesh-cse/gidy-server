import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      maxlength: 500,
    },
    profileImage: {
      type: String, 
    },
    resume: {
      type: String,
    },
  },
  { timestamps: true }
);

 const profileSchemaData = mongoose.model("Profile", profileSchema);
 export default profileSchemaData
