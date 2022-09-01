module.exports = {
    name: "modh",
    alias: ["mhelp"],
    desc: "List all command",
    react: "🎀",
    start: async(client, m, { commands, args, prefix, text, toUpper }) => {
        //const eth=await fetchbuffer()
        //const buff=await buffergif(eth)
       
        const { pushName, sender } = m
let cm=commands.keys()
            let category=[];
             

            for (let cmd of cm) {
                let info = commands.get(cmd);
                if (!cmd) continue;
                if (!info.category || info.category === 'private') continue;
                if (Object.keys(category).includes(info.category)) category[info.category].push(info);
                else {
                    category[info.category] = [];
                    category[info.category].push(info);
                }
            }
            const emo=["💹","🍀","🌊","🎵","🍁","🔞","🎟","♨️","🉐",]
        
            let txt = `*Kon'nichiwa (｡♡‿♡｡)* ${pushName} I'm *Eternity Bot.*

📑 *Note :*
                       
*• Don’t Call the Bot.*
*• Don’t Dm the Bot.*
*• This bot is made and own by Eternity.*
                       
🧧 *Prefix :* [ / ]
                       
📝 Here's the *Commands* listed below :\n\n`
        const keys = Object.keys(category);
        for (const key of keys) {
            txt += `*${key.toUpperCase()} ${emo[keys.indexOf(key)]} :* \`\`\`${category[key]
                .map((cmd) => cmd.name).join(" | ")},\`\`\`\n\n`
        }
        txt += `📗 *Type /help <Command-Name> or <Command-Name> --info*`; 
        const eternitylogogg = [
            "https://telegra.ph/file/9d6d42653277cd0b5d9f0.jpg",
            "https://telegra.ph/file/13e13ff7e301144d6da57.jpg",
            "https://telegra.ph/file/a17f262da84f0b667d255.jpg",
            "https://telegra.ph/file/d29dcfd8ed1692424a157.jpg",
            "https://telegra.ph/file/7562ef83e2566ed456a58.jpg",
            "https://telegra.ph/file/b44d75a78ac337d0f2469.jpg",
            "https://telegra.ph/file/ce79bf8a65aa59c9ceb1b.jpg",
            "https://telegra.ph/file/ccffabe7d588209617fe4.jpg",
            "https://telegra.ph/file/d10f4b2f386b546225c4f.jpg",
            "https://telegra.ph/file/c4d24fcdf260fd6564ee5.jpg",
            "https://telegra.ph/file/374fa48bb91f9a51c4e00.jpg",
            "https://telegra.ph/file/64c7e1edfb9c62860ca11.jpg",
            "https://telegra.ph/file/9aa55b02666d868647091.jpg",
            "https://telegra.ph/file/896d4316125eb1a5b7c06.jpg",
            "https://telegra.ph/file/4282d0809831fe96d0ebf.jpg"
            ]
        
            const eternitylogo = eternitylogogg[Math.floor(Math.random()*eternitylogogg.length)]
        
                   client.sendMessage(m.from,{image:{url:eternitylogo},caption:txt},{quoted:m})
        //client.sendMessage(m.from,{text:txt},{quoted:m})

    }
}