const moongose = require("mongoose");
const Schema = moongose.Schema();

const SkillSchema = moongose.Schema({
    skills: {
      type: [String],
      required: true,
    },
},{
    timestamps: true 
})

const SkillData = moongose.model("Skill", SkillSchema);
export default SkillData