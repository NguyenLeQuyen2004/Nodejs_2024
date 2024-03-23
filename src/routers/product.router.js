import express from "express";
import {
  getById,
  index,
  insert,
  remove,
  update,
} from "../Controllers/ProductController.js";
const router = express.Router();

//Lấy danh sách
router.get("/", index);
//lấy sản phẩm theo id
router.get("/:id", getById);
//thêm mới sản phẩm
router.post("/", insert);
// sửa sản phẩm
router.put("/:id", update);
//xóa sản phẩm
router.delete("/:id", remove);

export default router;
