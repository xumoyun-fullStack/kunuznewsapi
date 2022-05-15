const Rss = require("./Rss");


class Controller1{
    static async  Newsget(req, res){
        let data = await Rss();

        res.status(200).json({
            ok: true,
            data: data.items
        })
    }
    
}

module.exports = Controller1