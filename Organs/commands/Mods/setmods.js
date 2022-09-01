module.exports={
    name:"setmods",
    alias:["setmod"],
    usage:"=setmods @user",
    desc:"Adding eternity mods",
    category:"Mods",
    start:async(client,m,{command,prefix,text,own,pushName,mentionByTag,args,body,quoted,mime})=>{
       // if (!text) return m.reply("❌ Couldn't find any userID in context")
       if(!own.includes(m.sender)) return client.sendMessage(m.from,{text:'*Only mods can use this command*'},{quoted:m})
  
            const mention= await mentionByTag

            let userss = await (mention[0]) || m.msg.contextInfo.participant
            if (!userss) return m.reply("❌ Couldn't find any userID in context")
   
    
     if(own.includes(`${userss}`)) return client.sendMessage(m.from,{text:`@${userss.split("@")[0]} is already registered to mods`,mentions:[userss]},{quoted:m})
    
    await db.push("owner",`${userss}`)
   client.sendMessage(m.from,{text:`@${userss.split("@")[0]} is successfully registered to mods`,mentions:[userss]},{quoted:m})
  
   
    }
}