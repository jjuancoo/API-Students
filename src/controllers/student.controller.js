import studentDao from "../daos/students.dao.js";

export const getAll = async (req, res) => {
  studentDao
    .getAll()
    .then((students) => {
      res.json(students);
    })
    .catch((error) => {
      res.json({ message: error });
    });
};
