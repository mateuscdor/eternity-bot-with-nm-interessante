require('../../../handler/MessageHandler')
const { Character } = require('@shineiichijo/marika')
const charaClient = new Character();
const axios= require('axios')
module.exports={
    name: "marry",
    alias: ["claim"],
    desc: "Marry the haigusha",
    cool:3,
    category: "Weeb",
    start: async(client, m,{text,pushName,sender}) => {
        let hg = await db.get(m.from)
				if (!hg) return m.reply("Haigusha has not spawned here")
					  const marrid = await db.get("marrid")
				  let hh = await db.get(`${m.sender}.marr`)
				  if(hh) return m.reply(`You are already married with *${hh}*`)
				  const marr = marrid || []
				  if(marr.includes(hg)) return m.reply(`*${hg} is already married 💔`)
      
				await db.set(`${m.sender}.marr`, hg)
                                await db.push("marrid", hg)
			m.reply(`Congratulations 🎊!!! You are now married with *${hg}*`)
    }
}