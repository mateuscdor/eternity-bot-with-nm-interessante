const HMtai = require("hmtai");
const hmtai = new HMtai();
const fs=require("fs")
module.exports={
    name:"coffee",
    alias:["coffee"],
    usage:"=coffee",
    desc:"Do you want some coffee? And girls :3",
    category:"Weeb",
    start:async(client,m,{command,prefix,text,args})=>{
       let waifud = await hmtai.sfw.coffee_arts();
       await client.sendMessage(m.from,{image:{url:waifud}},{quoted:m})

    }
}