import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  readUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/users", readUser);
router.post("/users", createUser);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id", updateUser);

export default router;
