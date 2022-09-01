require('../../../handler/MessageHandler')
let {  TelegraPh, } = require('../../../lib/Function')
const util=require('util')
const fs=require('fs')
module.exports={
    name:"set-icon",
    alias:["setp"],
    usage:"=set-icon <tag image/gif>",
    desc:"Set the profile picture for profile commands",
    category:"General",
    start:async(client,m,{command,prefix,text,args,quoted,mime})=>{
        if (!quoted) return m.reply(`❌ Could not find any Image/gif in context`)
        m.reply("*[chotto matte]*")
        try {
        let media = await client.downloadAndSaveMediaMessage(quoted)
        if (/image/.test(mime)) {
            let anu = await TelegraPh(media)
            await db.set(`${m.sender}.icon`, util.format(anu))
            console.log(util.format(anu))
            await db.set(`${m.sender}ooicon-y`, 'img')
                await db.pull(`${m.sender}-icons`, "icons")
m.reply("You profile picture has changed")
        } else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 20) return m.reply('🕐 Cannot fetch videos longer than *15 Seconds*')
            let anu = await TelegraPh(media)
            await db.set(`${m.sender}.icon`, util.format(anu))
            await db.set(`${m.sender}ooicon-y`, 'gif')
                await db.pull(`${m.sender}-icons`, "icons")
m.reply("You profile picture has changed")
        }
        await fs.unlinkSync(media)
} catch (err){
m.reply("Something went wrong")
}
    }
}