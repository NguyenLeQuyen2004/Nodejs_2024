import Product from "../Models/product.js";
import Category from "../Models/category.js";
// [GET] /product
export function index(req, res) {
  Product.find()
    .populate("categoryId")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).json({ message: "Có lỗi khi lấy dữ liệu" });
    });
}
//[GET] /product/:id
export function getById(req, res) {
  let id = req.params.id;
  if (id) {
    Product.findById(id)
      .populate("categoryId")
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(() => {
        res.status(400).json({ message: "Không tìm thấy sản phẩm" });
      });
  } else {
    res.json({ message: "Không nhận được id" });
  }
}
//[POST] /product
export function insert(req, res) {
  const product = req.body;
  if (product != {}) {
    Product.create(product)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(() => {
        res.status(400).json({ message: "Có lỗi khi thêm sản phẩm" });
      });
  } else {
    res.status(500).json({ message: "Không nhận dược dữ liệu" });
  }
}
//[PUT] /product/:id
export function update(req, res) {
  const id = req.params.id;
  // console.log(id);
  if (id) {
    const productData = req.body;
    // console.log(productData);
    if (productData != {}) {
      Product.findByIdAndUpdate(id, productData, { new: true })
        .then((data) => {
          res.status(200).json(data);
        })
        .catch(() => {
          res.status(400).json({ message: "có lỗi khi sửa" });
        });
    } else {
      res.status(500).json({ message: "Không nhận được dữ liệu" });
    }
  } else {
    res.status(500).json({ message: "Không nhận được id" });
  }
}
//[DELETE] /product/:id
export function remove(req, res) {
  const id = req.params.id;
  // console.log(id);
  if (id) {
    Product.findByIdAndDelete(id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(() => {
        res.status(400).json({ message: "có lỗi khi xóa" });
      });
  } else {
    res.status(500).json({ message: "Không nhận được id" });
  }
}
