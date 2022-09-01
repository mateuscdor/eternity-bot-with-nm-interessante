const { hentai } = require('../../../lib/scrapper2.js')

module.exports={
name:"hentaivideo",
alias:["hvid","hvideo"],
usage:"=hvid",
desc:"Gives you random hentai video",
category:"Nsfw",
start:async(client,m,{command,nsfw,prefix,text})=>{
    if(!nsfw.includes(`${m.from}`)) return m.reply('*❌ This not a hentai group pervert*')    
    anu = await hentai()
    henttaiout001 = anu[Math.floor(Math.random(), anu.length)]
await client.sendMessage(m.from, { video: { url: henttaiout001.video_1 }}, { quoted: m })
   }
}