import routerProduct from "./product.router.js";
import routerCategory from "./category.router.js";
import routerCommon from "./common.router.js";

function router(app) {
  app.use("/product", routerProduct);
  app.use("/category", routerCategory);
  app.use("/", routerCommon);
  app.use("/user", routerUser);
}

export default router;
