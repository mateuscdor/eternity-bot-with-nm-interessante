const axios=require('axios')
module.exports={
    name: "character",
    alias: ["chara"],
    desc: "details of anime character",
    cool:3,
    category: "Weeb",
    start: async(client, m,{text,pushName,sender}) => {
        if(!text) return reply("Please provite the charecter name")
			try {
			            const { data }= await axios.get(
           `https://api.safone.tech/anime/character?query=${text}`
            )
			const content =`*First Name*: ${data.name.first}
*Last Name*: ${data.name.last}
*Full Name*: ${data.name.full}
*In Japanese*: ${data.name.native}
*Age*: ${data.age}
*Gender*: ${data.gender}
*Height*: ${data.height}
*Description*: ${data.description}
🌐️ *URL*: ${data.siteUrl}
			`
				return client.sendMessage(m.from, { image: { url: data.image.large }, caption: content }, { quoted: m })	
			} catch (err) {

				//return client.sendMessage(m.from, { image: { url: error }, caption: "Unable to find any anime charecter with this name" }, { quoted: m })
			}
    }
}