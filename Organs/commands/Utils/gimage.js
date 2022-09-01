module.exports={
    name:"image",
    alias:["gimage", "gig"],
    usage:"=image Mizuhara #3",
    desc:"Converts a sticker to image/gif",
    category:"Utils",
    cool:5,
    start:async(client,m,{text,args,quoted,mime,})=>{
        if(!text) return m.reply("No query found...")
        const im= args.join('').split('#')
        const noi=Number(im[1])
        if(!im) return m.reply("No query found...")
        if(!im[1]){
           
            let gis = require('g-i-s')
            gis(im[0], async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)]
            console.log(images.url)
            client.sendMessage(m.from, { image: { url: images.url }, caption: "Here you go" }, { quoted: m })
            })
            
        }
        else{
            if(noi>30) return m.reply("Too many request...")
            if (!q) m.reply(`❌ No query provided!`)
            let gis = require('g-i-s')
            gis(im[0], async (error, result) => {
            n = result
            for(let i=1;i<=noi;i++){
            console.log(n[i].url)
            client.sendMessage(m.from, { image: { url: n[i].url }}, { quoted: m })
            }
            })
            }
        }
    }
