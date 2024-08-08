import { Schema, model } from "mongoose";

//Definiendo el schema
const studentSchema = new Schema(
  {
    name: {
      student_id: {
        type: Number,
        required: true,
        unique: true,
      },
      name: String,
      lastname: String,
      grade: Number,
      group: String,
      career: String,
      average: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//Exportando el modelo
export default model('student', studentSchema)