const HMtai = require("hmtai");
const hmtai = new HMtai();
const fs=require("fs")
module.exports={
    name:"foxgirl",
    alias:["awoo", "woof"],
    usage:"=foxgirl",
    desc:"Awoooooo girls :3",
    category:"Weeb",
    start:async(client,m,{command,prefix,text,args})=>{
       let waifud = await hmtai.sfw.wolf_arts();
       await client.sendMessage(m.from,{image:{url:waifud}, caption: "*awooo*"},{quoted:m})

    }
}