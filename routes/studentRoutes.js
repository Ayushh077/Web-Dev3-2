const express = require("express");
const router = express.Router();
let students = require("../data/students");

let nextId = 4; 


router.get("/", function (req, res) {
  res.status(200).json(students);
});


router.get("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const student = students.find(function (s) {
    return s.id === id;
  });

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
});


router.post("/", function (req, res) {
  const name = req.body.name;
  const course = req.body.course;

  if (!name || !course) {
    return res.status(400).json({ message: "Please provide name and course" });
  }

  const newStudent = {
    id: nextId,
    name: name,
    course: course
  };

  nextId = nextId + 1;
  students.push(newStudent);

  res.status(201).json(newStudent);
});


router.put("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const student = students.find(function (s) {
    return s.id === id;
  });

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (req.body.name) {
    student.name = req.body.name;
  }
  if (req.body.course) {
    student.course = req.body.course;
  }

  res.status(200).json(student);
});

router.delete("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const index = students.findIndex(function (s) {
    return s.id === id;
  });

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);
  res.status(200).json({ message: "Student deleted successfully" });
});

module.exports = router;
