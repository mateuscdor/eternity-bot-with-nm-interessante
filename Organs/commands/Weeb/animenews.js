const { scrapNews } = require('@shineiichijo/mal-news-scraper')
const { getNewsNoDetails } = require('mal-scraper')
module.exports={
    name: "animenews",
    alias: ["aninews"],
    desc: "Anime related news",
    cool:3,
    category: "Weeb",
    start: async(client, m,{text,pushName,sender}) => {
        const news = await getNewsNoDetails()
				for (let i = 0; i < 5; i++) {
    const link = news[i].link 
    const data = await scrapNews(link)
	client.sendMessage(m.from, { image: { url: data.image }, caption: `*Title*: ${data.title}\n*Description*: ${data.description}\n*Link*: ${data.url}`} )	
	}

    }
}