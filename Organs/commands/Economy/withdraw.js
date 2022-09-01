require('../../../handler/MessageHandler')
module.exports={
    name:"withdraw",
    alias:["wd"],
    usage:"=withdraw <amount>",
    desc:"withdraws the speified amount from your bank and adds in your wallet",
    category:"Economy",
    start:async(client,m,{command,prefix,text,args,quoted,isAdmin,isBotAdmin,pushName})=>{
        if (!text) return m.reply(`🟥 No amount provided!`)
		if (isNaN(text) == true) return m.reply(`🟥 No amount provided!`)
			let money = parseInt(text);
	 let result = await cs.withdraw({
        user: m.sender,
        guild: 'mizuhara',
        amount: money
      });
      if (result.error) {
        if (result.type === 'money') return m.reply("Specify an amount to withdraw your 💴!")
        if (result.type === 'negative-money') return m.reply("You can't withdraw negative 💴, please use deposit command!")
        if (result.type === 'low-money') return m.reply("You don't have enough *💴 Yen* in your *Bank*.")
        if (result.type === 'no-money') return m.reply("You don't have any 💴 to withdraw!")
      } else {
        if (result.type === 'all-success') return m.reply("You've withdraw'd all your 💴 from your *Bank*" + `\nNow you've *¥${result.rawData.wallet}* 💴 in your *Wallet* and *¥${result.rawData.bank}* 💴 in your *Bank*.`)
        if (result.type === 'success') return m.reply(`You've withdrawn *¥${result.amount}* 💴 from your *Bank*.\nNow you've *¥${result.rawData.wallet}* 💴 in your *Wallet* and *¥${result.rawData.bank}* 💴 in your *Bank*.`)
      };
    }
}