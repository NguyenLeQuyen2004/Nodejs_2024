import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { name: "quyennlph37238" });
});

router.get("/tintuc", (req, res) => {
  res.send("tin tức");
});

export default router;
