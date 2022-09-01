require('../../../handler/MessageHandler')
module.exports={
    name:"transfer",
    alias:["give"],
    usage:"=give <amount> @user",
    desc:"transfer the amount from your wallet to tagged user wallet",
    category:"Economy",
    start:async(client,m,{command,prefix,text,args,quoted,isAdmin,isBotAdmin,pushName,mentionByTag})=>{
        try {
           // if (!text) return m.reply(`❌ No amount provided!`)
const anu = args.join(' ').split(' ')
if (!anu) return m.reply(`🟥 No amount provided!`)
if (isNaN(anu[0]) == true) return m.reply(`🟥 No amount provided!`)
if (!anu[0]) return m.reply(`🟥 No amount provided!`)
 if (anu[0].includes("-")) return m.Sreply("🟥 You can't send negitive money.")
 const mention= await mentionByTag
const users =await (mention[0]) || m.msg.contextInfo.participant
if ( m.sender == users) return m.reply("🟥 You can't transfer *💴 Yen* to yourself")
     
  let money = parseInt(anu[0]);
  const wheretoPutMoney = 'wallet'; // Or bank
      let result1 = await cs.balance({
    user: m.sender,
    guild: 'mizuhara'
  });
  if ( money > parseInt(result1.wallet) || !parseInt(result1.wallet) == money) return m.reply(`You don't have enough yen💴 in your wallet.`);
  let result2 = await cs.removeMoney({
    user: m.sender,
    guild: 'mizuhara',
    amount: money,
    wheretoPutMoney: wheretoPutMoney
  });
  let result3 = await cs.addMoney({
    user: users,
    guild: 'mizuhara',
    amount: money,
    wheretoPutMoney: wheretoPutMoney
  });
 return client.sendMessage(m.from,{text:`*${pushName}*, Successfully transferred *¥${money} 💴* to @${users.split('@')[0]}`,mentions:[users]},{quoted:m})
} catch (err) {
    console.log(err)
    return m.reply("❌ Couldn't find any userID in context, Try Again.")

}
    }
}