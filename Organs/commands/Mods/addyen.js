require('../../../handler/MessageHandler')
module.exports={
    name:"addyen",
    alias:["add-yen"],
    usage:"=addyen <amount>",
    desc:"Adding yen to wallet",
    category:"Mods",
    start:async(client,m,{command,prefix,text,own,pushName,mentionByTag,args,body,quoted,mime})=>{
       // if (!text) return m.reply("❌ Couldn't find any userID in context")
       if(!own.includes(m.sender)) return client.sendMessage(m.from,{text:'*Only mods can use this command*'},{quoted:m})
       if (!text) return m.reply(`❌ No ammount provided!`)
       if (isNaN(text) == true) return m.reply(`❌ No ammount provided!`)
           try {
     const money = parseInt(text);
     const wheretoPutMoney = 'wallet'; // Or bank
     let result = await cs.addMoney({
       user: m.sender,
       guild: 'mizuhara',
       amount: money,
       wheretoPutMoney: wheretoPutMoney
     });
     if (result.error) return m.reply("You cant add negitive money");
     else m.reply(`Successfully added ¥ *${money}* to ${pushName}, ( in ${wheretoPutMoney} )`)
     console.log(`Successfully added ¥ ${money} to ${pushName}, ( in ${wheretoPutMoney} )`)
           } catch (err) {
               console.log(err)
           }
    }
}