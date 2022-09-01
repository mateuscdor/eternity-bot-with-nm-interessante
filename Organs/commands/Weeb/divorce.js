require('../../../handler/MessageHandler')
const { Character } = require('@shineiichijo/marika')
const charaClient = new Character();
const axios= require('axios')
module.exports={
    name: "divorce",
    alias: ["div"],
    desc: "divorce the haigusha",
    cool:3,
    category: "Weeb",
    start: async(client, m,{text,pushName,sender}) => {
        let hh = await db.get(`${m.sender}.marr`)
				  if(!hh) return m.reply("You are not married")
                                          await db.pull("marrid", hh)
					  await db.delete(`${m.sender}.marr`,hh)
				  m.reply(`You divorced with *${hh}*, now you are free`)

    }

}