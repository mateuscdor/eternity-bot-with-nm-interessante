const axios = require('axios')
const fs=require("fs")
module.exports={
    name:"define",
    alias:["dictionary"],
    usage:"=define [Your word]",
    desc:"Gives you the meaning of your word ",
    category:"Utils",
    start:async(client,m,{command,prefix,args})=>{

if (!q) return m.reply(`Please give me text.`)
try {
rayyy = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!rayyy) return m.reply(`❌ Error`)
let lol = ['https://wallpapercave.com/wp/wp7452243.jpg',
           'https://w0.peakpx.com/wallpaper/303/613/HD-wallpaper-2d-anime-anime-girls-in-meaningjun-azur-lane-langley-azur-lane-sea-world-war-i-world-war-ii-world-of-warships-aircraft-carrier-glasses-whips-green-hair-miniskirt-teachers.jpg',
           'https://w0.peakpx.com/wallpaper/887/676/HD-wallpaper-teacher-miku-vocaloid-hatsune-girl-anime-miku-long-hair-blue-teacher.jpg',
           'https://pbs.twimg.com/media/EES1iLiXYAIZMp-?format=jpg&name=large',
           'https://w0.peakpx.com/wallpaper/582/610/HD-wallpaper-neko-miku-pretty-teacher-nice-anime-aqua-beauty-anime-girl-vocaloids-blsuh-twintail-skirt-ears-miku-singer-sexy-cat-ears-cat-cute-hatsune-paws-cool-awesome-white-idol-hatsune.jpg'
                                                       ]
let simp = lol[Math.floor(Math.random() * lol.length)]
const reply = `
*🔠 Word:* ${q}
*📖 Definition:* ${rayyy.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*💭 Example:* ${rayyy.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
               `
   client.sendMessage(m.from,{image:{url:simp}, caption:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return m.reply (`*${q}* isn't a valid text`)
    }
  }
}
