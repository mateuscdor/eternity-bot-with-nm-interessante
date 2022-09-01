const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
const {isUrl}=require('../../../lib/Function')
module.exports={
    name:"igdl",
    alias:["instagram"],
    usage:"=igdl <query>",
    desc:"Download Instagram videos directly...",
    category:"Media",
    start:async(client,m,{command,prefix,text,args})=>{
               
        if (!text) return m.reply(`Please provide Instagram link!`)
        const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return m.reply('*Invalid Instagram link* detected!')
        instagramdlv3(`${text}`).then(async (data) => {            
        var buf = await getBuffer(data[0].thumbnail) 
        console.log(data[0].url)       
       // client.sendMessage(m.from, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `ETERNITY`}, { quoted: m })
        }).catch((err) => {
            reply(mess.error)
        })
    }
}