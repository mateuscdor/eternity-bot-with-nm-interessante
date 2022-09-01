require('../../../handler/MessageHandler')
let {  TelegraPh, } = require('../../../lib/Function')
const util=require('util')
const fs=require('fs')
module.exports={
    name:"reset-icon",
    alias:["resetp"],
    usage:"=reset-icon <tag image/gif>",
    desc:"Set the profile picture for profile commands",
    category:"General",
    start:async(client,m,{command,prefix,text,args,quoted,mime})=>{
        let yui = await db.get(`${m.sender}.icon`)
        if (!yui) return m.reply ("You dont have any custom profile picture")
            await db.delete(`${m.sender}.icon`)
        await db.set(`${m.sender}ooicon-y`, 'img')
        m.reply("You custom profile picture has reset to it's original form")
    }
}