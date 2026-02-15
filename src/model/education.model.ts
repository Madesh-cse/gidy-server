import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
  college:
{ 
    type: String, 
    required: true 
},
  degree: 
  { 
    type: String,
    required: true
},
  fieldOfStudy: 
{
    type: String,
    required: true

},
  location:
{
    type: String,
    required: true
},

  startDate: 
{  
    type: Date,
    required: true
},
  endDate: 
{ 
    type: Date,
    required: false
},
  currentlyStudying:
{ 
    type: Boolean, 
    default: false 
},
},{
    timestamps: true
});

const EducationSchemaData = mongoose.model("EducationSchema", EducationSchema);
export default EducationSchemaData;
