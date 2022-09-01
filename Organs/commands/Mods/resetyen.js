require('../../../handler/MessageHandler')
module.exports={
    name:"resetyen",
    alias:["reset-yen"],
    usage:"=resetyen <amount>",
    desc:"reset yen in wallet",
    category:"Mods",
    start:async(client,m,{command,prefix,text,own,pushName,mentionByTag,args,body,quoted,mime})=>{
      if(!own.includes(m.sender)) return client.sendMessage(m.from,{text:'*Only mods can use this command*'},{quoted:m})

        if (!text) return m.reply(`❌ No amount provided!`)
	anu = args.join(' ').split(' ')
		if (!anu[0]) return m.reply(`❌ No amount provided!`)
if (isNaN(anu[0]) == true) return m.reply(`❌ No amount provided!`)
			try {
                const mention= mentionByTag
                let users = await (mention[0]) || m.msg.contextInfo.participant
                if (!users) return m.reply("❌ Couldn't find any userID in context")      
                const money = parseInt(anu[0]);
               
      const wheretoPutMoney = 'wallet'; // Or bank
      let result = await cs.removeMoney({
        user: users,
        guild: 'mizuhara',
        amount: money,
        wheretoPutMoney: wheretoPutMoney
      });
      if (result.error) return m.reply("You cant removed  negative money");
      else m.reply(`Successfully removed  ¥ *${money}* from ${users}\'s wallet`)
			} catch (err) {
				return m.reply("❌ Couldn't find any userID in context")
			}
    }
}