const { Newsget } = require("../controllers/AllController")

const router = require("express").Router()


router.get("/", Newsget)

module.exports = {
    path: "/",
    router 
}