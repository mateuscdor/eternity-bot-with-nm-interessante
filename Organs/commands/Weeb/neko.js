const axios = require('axios')
const fs=require("fs")
module.exports={
    name:"neko",
    alias:["nya"],
    usage:"=neko",
    desc:"Gives you random neko images",
    category:"Weeb",
    start:async(client,m,{command,prefix,text,args})=>{
       let waifud = await axios.get('https://waifu.pics/api/sfw/neko')
       await client.sendMessage(m.from,{image:{url:waifud.data.url}},{quoted:m})

    }
}