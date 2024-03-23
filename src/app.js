import express from "express";
import { engine } from "express-handlebars";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

//connect MongoDB
mongoose
  .connect(process.env.CONNECTION_STRING_MONGODB)
  .then(() => console.log("Connected!"));

// nhận dữ liệu khi post
app.use(express.json());

//View - đường dẫn tuyệt đối
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//

// view
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));
//

//router

// trung gian
// import router from './routers/index.js';
// router(app);

import routerProduct from "./routers/product.router.js";
import routerCategory from "./routers/category.router.js";
import routerCommon from "./routers/common.router.js";
import routerUser from "./routers/user.router.js";

app.use("/product", routerProduct);
app.use("/category", routerCategory);
app.use("/user", routerUser);
app.use("/", routerCommon);
//

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
