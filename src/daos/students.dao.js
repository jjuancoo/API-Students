import Student from "../models/Student.js";

const studentDao = {};

//Devuelve todos los estudiantes que esten en la collecion
studentDao.getAll = async () => {
  return await Student.find();
};

studentDao.insertOne = async student => {
    return await Student.create(student)
}

export default studentDao;