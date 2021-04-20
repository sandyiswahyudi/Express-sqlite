const { createUser, readUser, deleteUsers, editUser } = require("../models/userModel")
const express = require("express")
const user = express.Router()

user.post("/", (req, res) => {
    createUser(req.body)
    .then((result) => {
        if(result.length > 0) {
            res.status(201).json({
                msg: "success register",
                result: result,
            })
        } else {
            res.status(401).json({
                msg: "email sudah terpakai",
                result: result,
            });
        }
    })
    .catch((err) => {
        res.status(500).json({
            error: err,
        })
    })
})

user.get("/", (req, res) => {
    readUser()
    .then((result) => {
        res.status(200).json(result)
    })
    .catch((err) => {
        res.status(500).json({
            msg: "error",
            error: err,
        })
    })
})

user.delete("/", (req, res) => {
    let data = req.body

    deleteUsers(data)
    .then((result) => {
        if (result > 0) {
            //jika hasil lebih dari 0 berarti sukses
            res.status(200).json({
                msg: "berhasil menghapus data",
            })
        } else {
            //jika hasil 0 maka data tidak di temukan
            res.status(404).json({
                msg: "Data yang akan dihapus tidak ditemukan"
            })
        }
    })
    .catch((err) => {
        // error menghapus data
        res.status(401).json({
            msg: "gagal menghapus data",
        })
    })
})

// update data absen
user.patch("/edit/:id", (req, res) => {
    let id = req.params.id; // capture params id
    let data = req.body; // capture body data
    editUser(id, data)
    .then((result) => {
        if (result > 0) {
            res.status(200).json({
                hasil: result,
                pesan: "berhasil ubah data",
            })
        } else {
            res.status(404).json({
                hasil: result,
                pesan: "data yang akan diubah data",
            })
          }
    })
    .catch((err) => console.log(err))
})

module.exports = user










