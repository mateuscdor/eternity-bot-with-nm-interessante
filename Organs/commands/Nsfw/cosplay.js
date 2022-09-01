const axios = require('axios')
const fs=require("fs")
module.exports={
name:"cosplay",
alias:["cosplay"],
usage:"=cosplay",
desc:"Gives you random hentai cosplay images",
category:"Nsfw",
start:async(client,m,{command,nsfw,prefix,text})=>{
   if(!nsfw.includes(`${m.from}`)) return m.reply('*❌ This not a hentai group pervert*')    
   let ss = ["nsfwcosplay","cosplaybabes","CosPlayPorn","RealAhegao","hinatacosplay","Cosplaytiddies", "cosplaygirls"]
let rae = ss[Math.floor(Math.random() * ss.length)]
   const response1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + `${rae}` + '/');
   const {
      url,
      } = response1.data
await client.sendMessage(m.from,{image:{url:url}},{quoted:m})
   }
}