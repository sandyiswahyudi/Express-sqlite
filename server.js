/* Import Dependencies didalam server.js */

const express = require("express")
const cors = require("cors")
const user = require("./controllers/userControllers")
const app = express()

/* Setup middleware di dalam server.js */

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/* Setup Controller di dalam server.js */
app.use("/api/user", user)

/* Setup listener di server.js*/
app.listen(8000, () => console.log("server berjalan di port 8000"))
