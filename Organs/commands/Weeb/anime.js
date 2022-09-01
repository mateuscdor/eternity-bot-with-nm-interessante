const axios = require('axios')

module.exports = {
    name: "anime",
    alias: ["ani"],
    desc: "Searches an anime of the given query",
    cool: 5,
    category: "Weeb",

    start: async(client, m,{ text, pushName, sender }) => {
        const query = text.trim()
        if (!query) return m.reply('Provide a query for the search, Baka!')

   try {
        const response = await axios.get(`https://api.safone.tech/anime/search?query=${query}`)

   // Japanese Name 
       let ja = `${response.data.title.native}`
       let native = decodeURIComponent(JSON.parse('"' + ja.replace(/\"/g, '\\"') + '"'))

   // startDate && endDate
            let startDate = `${response.data.startDate.day}-${response.data.startDate.month}-${response.data.startDate.year}`
            let endDate = `${response.data.endDate.day}-${response.data.endDate.month}-${response.data.endDate.year}`

            let texted = ''
            texted += `*${response.data.title.english}* *|* *${response.data.title.romaji}*\n`
            texted += `◉ *Japanese:* *${native}*\n`
            texted += `◉ *Type:* ${response.data.format}\n`
            texted += `◉ *Is-Adult:* ${response.data.isAdult}\n`
            texted += `◉ *Status:* ${response.data.status}\n`
            texted += `◉ *Episodes:* ${response.data.episodes}\n`
            texted += `◉ *Duration:* ${response.data.duration} Per Ep.\n`
            texted += `◉ *First Aired:* ${startDate}\n`
            texted += `◉ *Last Aired:* ${endDate}\n`
            texted += `◉ *Genres:* ${response.data.genres.join(', ')}\n`
            texted += `◉ *Studios:* ${response.data.studios.join(', ')}\n`
            texted+=  `◉ *Trailer:* https://youtu.be/${response.data.trailer ? response.data.trailer.id : 'null'}\n\n`
            texted += `*──「 Description:* ${response.data.description}`
            const buffer = response.data.imageUrl
            
     const templateButtons = [
                {
                    index: 1,
                    urlButton: {
                        displayText: '⭐ YouTube Trailer',
                        url: `https://youtu.be/${response.data.trailer ? response.data.trailer.id : 'null'}` 
                    }
                }
            ]

  await client.sendMessage(
                m.from,
                {
                    image: { url: buffer },
                    caption: texted,
                    
                },
                {
                    quoted: m
                }
            )
        } catch (err) {
            console.log(err.message)
            return (await m.reply(`Couldn't find any anime | *"${query}"*`))
        }	
    }
}