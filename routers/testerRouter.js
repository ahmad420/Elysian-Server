const express = require("express");
const router = express.Router();

//tester handlers imports
const signup = require("../handlers/tester/signup");
const signIn = require("../handlers/tester/signin");
const addExercise = require("../handlers/tester/addExercise");
const addQuestions = require("../handlers/tester/addQuestions");
const getAllExercises = require("../handlers/tester/getAllExercises");
const addTest = require("../handlers/tester/addTest");
const getAllExaminees = require("../handlers/tester/getAllExaminees");
const getTestMiddleware = require("../middlewares/getTestMiddleware");
// Verification
const verifyUser = require("../middlewares/auth");

/*******ROUTES*******/
// Sign-up
router.post("/tester/signup", signup);

// Sign-in
router.post("/tester/signin", signIn);

// Make Exercise
router.post("/tester/addExercise", addQuestions, addExercise);
// View Exercises
router.post("/tester/exercises", getAllExercises);
// Make Test
router.post("/tester/maketest", addTest);
// Get all examinees
router.post("/tester/examinees", getAllExaminees);
// View Tests
router.post("/tester/tests", verifyUser("tester"), getTestMiddleware);

module.exports = router;
