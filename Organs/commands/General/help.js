module.exports = {
    name: "help",
    alias: ["h","menu"],
    desc: "List all command",
    category: "General",
    react: "🎀",

    start: async(client, m, { commands, args, prefix, text, toUpper }) => {
        
       
   const { pushName, sender } = m
        if (args[0]) {
            let data = []
            let name = args[0].toLowerCase()
            let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
            if (!cmd || cmd.type == "hide") return m.reply("No Command Found")
            else data.push(`*🍁Command :* ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
            if (cmd.alias) data.push(`*👾Alias :* ${cmd.alias.join(", ")}`) 
            if(cmd.cool) data.push(`*⏱️Cooldown:* ${cmd.cool}`)       
            if (cmd.desc) data.push(`*🧾Description :* ${cmd.desc}`)
            if (cmd.usage) data.push(`*💡Example :* ${cmd.usage.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
            var buttonss = [
				{buttonId: `${prefix}help`, buttonText: {displayText: `help`}, type: 1},]
            let buth={
                text:`*ℹ️Command Info*\n\n${data.join("\n")}`,
                footer:"Eternity",
                buttons:buttonss,
                headerType:1
            }    
            return client.sendMessage(m.from,buth,{quoted:m})
        } else {
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


}


