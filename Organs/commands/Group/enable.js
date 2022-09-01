require('../../../handler/MessageHandler')
module.exports = {
    name: "enable",
    alias: ["act","register"],
    desc: "enables the commands",
    cool:3,
    category: "Group",
    start: async(client, m,{pushName,text,args,wlc,isGroup,isAdmin,nsfw,mods}) => {
        if (!text) return m.reply(`❌ No option provided!`)
      //  if (!isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
      //if(!isBotAdmin) return m.reply("❌ Cannot execute without being admin")
      if(!isAdmin) return m.reply("❌ This is an Admin only Command")

        if (args[0] == "mod") {
                if(mods.includes(`${m.from}`)) return m.reply("🛡 *Mod* is already enabled")

await db.push('mods',`${m.from}`)
        m.reply('💮 Successfully Enabled *Mod*')
        }
        if (args[0] == "nsfw") {
          if(nsfw.includes(`${m.from}`)) return m.reply("🛡 *Nsfw* is already enabled")

await db.push('nsfw',`${m.from}`)
  m.reply('💮 Successfully Enabled *Nsfw*')
  } 
  if(args[0]=="events"||args[0]=="event"){
    if(wlc.includes(`${m.from}`)) return m.reply("🛡 *Events* is already enabled")

    await db.push('events',`${m.from}`)
      m.reply('💮 Successfully Enabled *Events*')
  }       
    }
}