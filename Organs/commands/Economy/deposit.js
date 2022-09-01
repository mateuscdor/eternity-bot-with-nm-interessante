require('../../../handler/MessageHandler')
module.exports={
    name:"deposit",
    alias:["dep"],
    usage:"=deposit <amount>",
    desc:"deposits the speified amount in your bank",
    category:"Economy",
    start:async(client,m,{command,prefix,text,args,quoted,isAdmin,isBotAdmin,pushName})=>{
if (!q) return m.reply(`🟥 No amount provided, Use ${prefix}deposit [amount eg. 1000].`)
		if (isNaN(text) == true) return m.reply(`🟥 No amount provided, Use ${prefix}deposit [amount eg. 1000].`)
			let money = parseInt(text);
      let result = await cs.deposite({
         user: m.sender,
        guild: 'mizuhara',
        amount: money
      });
      
      
      if (result.error) {
        if (result.type === 'money') return m.reply("Specify an amount to deposite!");
        if (result.type === 'negative-money') return message.reply("You can't deposite negative 💴!");
        if (result.type === 'low-money') return m.reply("You don't have that much *💴 Yen* in your wallet!");
        if (result.type === 'no-money') return m.reply("You don't have enough *💴 Yen* in your *Wallet*.");
        if (result.type === 'bank-full') return m.reply("Your bank is full, It has reached it's limit!");
      } else {
        if (result.type === 'all-success') return m.reply("You've deposited all your 💴 to your *Bank*" + `\nNow you've *¥${result.rawData.wallet}* 💴 in your *Wallet* and *¥${result.rawData.bank}* 💴 in your *Bank*.`);
        if (result.type === 'success') return m.reply(`You've deposited *¥${result.amount}* 💴 to your *Bank*.\nNow you've *¥${result.rawData.wallet}* 💴 in your *Wallet* and *¥${result.rawData.bank}* 💴 in your *Bank*.`);
      };
    }
}