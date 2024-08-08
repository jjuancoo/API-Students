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

export const insertOne = (req, res) => {
  studentDao
    .insertOne(req.body)
    .then((student) => {
      res.json(student);
    })
    .catch((error) => res.json({ message: error }));
};
