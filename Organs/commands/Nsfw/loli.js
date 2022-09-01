const axios = require('axios')
const fs=require("fs")
module.exports={
    name:"loli",
    alias:["lolice"],
    usage:"=loli",
    desc:"Gives you random loli images",
    category:"Nsfw",
    start:async(client,m,{command,nsfw,prefix,text})=>{
        if(!nsfw.includes(`${m.from}`)) return m.reply('*❌ This not a hentai group pervert*')    
       let waifud = await axios.get('https://api.lolicon.app/setu/v2')
       await client.sendMessage(m.from,{image:{url:waifud.data.data[0].urls.original}, caption: "*🕵️ FBI is looking for you*"},{quoted:m})

    }
}