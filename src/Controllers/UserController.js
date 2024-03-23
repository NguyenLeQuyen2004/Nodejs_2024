import User from "../Models/user.js";
import bcryptjs from "bcryptjs";

export function index(req, res) {
  User.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(400).json({ message: "Không tìm thấy sản phẩm" });
    });
}

//[GET] /user/:id
export function getById(req, res) {
  let id = req.params.id;
  if (id) {
    User.findById(id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(() => {
        res.status(400).json({ message: "Không tìm thấy sản phẩm" });
      });
  } else {
    res.status(500).json({ message: "Không nhan dc id" });
  }
}

//[POST] /user
export function insert(req, res) {
  const user = req.body;
  if (user != {}) {
    User.create(user)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err });
      });
  } else {
    res.status(500).json({ message: "Không nhận dược dữ liệu" });
  }
}

//[PUT] /user/:id
export function update(req, res) {
  const id = req.params.id;
  if (id) {
    const userData = req.body;
    if (userData != {}) {
      User.findByIdAndUpdate(id, userData, { new: true })
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
    res.status(500)({ message: "Không nhận được id" });
  }
}

//[DELETE] /user/:id
export function remove(req, res) {
  const id = req.params.id;
  if (id) {
    User.findByIdAndDelete(id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(() => {
        res.json({ message: "có lỗi khi xóa" });
      });
  } else {
    res.json({ message: "Không nhận được id" });
  }
}

//[post] user/singup
export async function signup(req, res) {
  try {
    //lấy data
    const data = req.body;
    //kiểm tra user theo username
    const userExits = await User.findOne({ email: data.email });

    if (userExits)
      return res
        .status(400)
        .json({ message: `Tai khoan da ton tai: ${data.email}` });

    //mã hóa mật khẩu
    if (data.password) {
      if (data.password.Length < 6)
        return res.json({ message: "Password can toi thieu 6 ky tu" });
      const passwordHashes = await bcryptjs.hash(data.password, 10);
      // gắn lại mật khẩu sau khi mã hóa
      data.password = passwordHashes;
    }

    // thêm vào cơ sở dữ liệu
    const userSuccess = await User.create(data);

    if (userSuccess) {
      // ẩn mật khẩu đã mã hóa
      userSuccess.password = undefined;
      res.status(201).json({
        message: "them tai khoan thanh cong",
        data: userSuccess,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
