require('../../../handler/MessageHandler')
const { Character } = require('@shineiichijo/marika')
const charaClient = new Character();
const axios= require('axios')
module.exports={
    name: "haigusha",
    alias: ["hai","hg"],
    desc: "shows haigusha",
    cool:3,
    category: "Weeb",
    start: async(client, m,{text,pushName}) => {
        let character = await charaClient.getRandomCharacter();
			try{
						            const { data }= await axios.get(
           `https://api.safone.tech/anime/character?query=${character.name}`
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
			await db.set(m.from, character.name)
				return client.sendMessage(m.from, { image: { url: data.image.large }, caption: content }, { quoted: m})	
			} catch (e) {
			m.reply("Something went wrong")	
            console.log(e)
			}
    }

}