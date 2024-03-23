import express from "express";
import {
  getById,
  index,
  insert,
  remove,
  signup,
  update,
} from "../Controllers/UserController.js";
const router = express.Router();

router.get("/", index); // danh sach user

router.get("/:id", getById); //them moi

router.post("/", signup); //them moi user

router.put("/:id", update); // sua

router.delete("/:id", remove); // xoa

export default router;
