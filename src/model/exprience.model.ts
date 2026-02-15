const moongose = require("mongoose");
const Schema = moongose.Schema

const ExprienceSchema = new Schema({
    role: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
        type: String,
    },
    joinDate: {
       type: String,
    },
    leaveDate:{
        type: String
    } ,
    currentlyWorking:{
        type:Boolean
    }
},{
    timestamps: true 
})

const ExprienceData = moongose.model("Exprience", ExprienceSchema);
export default ExprienceData