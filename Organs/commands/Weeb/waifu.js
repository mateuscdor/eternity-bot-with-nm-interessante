const axios = require('axios')
const fs=require("fs")
module.exports={
    name:"waifu",
    alias:["wife"],
    usage:"=waifu",
    desc:"Gives you random waifu images",
    category:"Weeb",
    start:async(client,m,{command,prefix,text,args})=>{
       let waifud = await axios.get('https://api.waifu.im/random/?selected_tags=waifu')
       await client.sendMessage(m.from,{image:{url:waifud.data.images[0].url}},{quoted:m})

    }
}