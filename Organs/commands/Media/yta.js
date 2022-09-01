const YT = require('../../../lib/ytdl')
const { isUrl, fetchBuffer } = require('../../../lib/Function')
const fs=require("fs")
module.exports={
    name:"yta",
    alias:["ytmp3"],
    usage:"=yta yotube_link",
    desc:"Downloads the audio from youtube links",
    category:"Media",
    start:async(client,m,{command,prefix,text,args})=>{
if (args.length < 1 || !isUrl(text) || !YT.isYTUrl(text)) return client.sendMessage(m.from,{text:"Where is the yt like?...."},{quoted:m})
const audio=await YT.mp3(text)
await client.sendMessage(m.from,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4',
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: "Played by ETERNITY",
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
    }
}