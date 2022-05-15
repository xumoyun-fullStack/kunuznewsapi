const Parser = require("rss-parser");
const parser = new Parser();

module.exports = async function() {
    let feed = await parser.parseURL("https://kun.uz/news/rss");

    return{
        items: feed.items,
        count: feed.items.length,
    }
}