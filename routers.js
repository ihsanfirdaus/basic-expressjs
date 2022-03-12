const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const connection = require("./connection");

require("./mongoose");

const User = require("./User");

// mongoose
router.get("/users", async(req, res) => {
  const users = await User.find();
  res.send({ data: users });
});

router.get("/user/:id", async(req, res) => {
  const user = await User.findOne({_id: req.params.id});
  if (user) {
    res.send({ data: user});
  } else {
    res.send({ message: "user not found"});
  }
})

// router.get("/users", async (req, res) => {
//   try {
//     if (connection) {
//       const db = connection.db("db_latihan");
//       const users = await db.collection("users").find().toArray();
//       res.send({ data: users });
//     } else {
//       res.send({ message: "koneksi database gagal" });
//     }
//   } catch (error) {
//     res.send({ message: error.message || "internal server error" });
//   }
// });

// router.post("/user", async (req, res) => {
//   try {
//     if (connection) {
//       const { name, age, status } = req.body;
//       const db = connection.db("db_latihan");
//       const users = await db.collection("users").insertOne({
//         name,
//         age,
//         status,
//       });
//       console.log("users >>>")
//       console.log(users);
//       res.send({ message: "data berhasil disimpan" });
//     } else {
//       res.send({ message: "koneksi database gagal" });
//     }
//   } catch (error) {
//     res.send({ message: error.message || "internal server error" });
//   }
// });

// router.put("/user/:id", async (req, res) => {
//   try {
//     if (connection) {
//       const { id } = req.params;
//       const { name, age, status } = req.body;
//       const db = connection.db("db_latihan");
//       const users = await db.collection("users").updateOne(
//         { _id: ObjectId(id) },
//         {
//           $set: {
//             name,
//             age,
//             status,
//           }
//         }
//       );
//       console.log("users >>>");
//       console.log(users);
//       res.send({ message: "data berhasil diubah" });
//     } else {
//       res.send({ message: "koneksi database gagal" });
//     }
//   } catch (error) {
//     res.send({ message: error.message || "internal server error" });
//   }
// });

// router.delete("/user/:id", async (req, res) => {
//   try {
//     if (connection) {
//       const { id } = req.params;
//       const db = connection.db("db_latihan");
//       const users = await db.collection("users").deleteOne({ _id: ObjectId(id) });
//       console.log("users >>>");
//       console.log(users);
//       res.send({ message: "data berhasil dihapus" });
//     } else {
//       res.send({ message: "koneksi database gagal" });
//     }
//   } catch (error) {
//     res.send({ message: error.message || "internal server error" });
//   }
// });

module.exports = router;
