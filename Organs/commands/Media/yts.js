const { isUrl, fetchBuffer } = require('../../../lib/Function')
const fs=require("fs")
const yts= require("yt-search")
module.exports={
    name:"yts",
    alias:["ytsearch"],
    usage:"=yts <query>",
    desc:"Searches Video links from youtube...",
    category:"Media",
    start:async(client,m,{command,prefix,text,args})=>{
               
if(!text) return client.sendMessage(m.from,{text:"What you want to search"},{quoted:m})
let yts = require("yt-search")
    let search = await yts(q)
    let yt = '*āāć š½ļø YouTube Search š½ļøćāā*\n\n *š® Results From*: '+text+'\n\n'
    let no = 1
    for (let i of search.all) {
        yt += `*š No :* ${no++}\n*š¬ Type :* ${i.type}\nš *Video ID :* ${i.videoId}\n*šÆ Title :* ${i.title}\n*šø Views :* ${i.views}\n*šļø Duration :* ${i.timestamp}\n*š Uploaded :* ${i.ago}\n*š Url :* ${i.url}\n\n *---------------------------------------* \n\n`
    }
client.sendMessage(m.from,{image:{url:search.all[0].thumbnail},caption:yt},{quoted:m})
    }
}
