const wiki = require('wikipedia');
module.exports={
    name:"wikipedia",
    alias:["wiki"],
    usage:"=wikipedia [anything]",
    desc:"Everyone knows wikipedia",
    category:"Utils",
    start:async(client,m,{command,prefix,args})=>{
try {
if (!q)  return m.reply(`provide me something to search.`)
const loll = await wiki.summary(q);
const textt = `                  
*🎀 Title:* ${loll.title}
                    
*📜 Description:* ${loll.description}
                    
*❄ Summary:* ${loll.extract}

*🌐 URL:* ${loll.content_urls.mobile.page}
        `
await client.sendMessage(m.from,{image:{url:'https://wallpapercave.com/wp/wp7358250.png'},caption:textt},{quoted:m})                
    } catch (err) {
        console.log(err)
        return m.reply (`*❌ Your text isn't valid.*`)}                           
    }  
}  