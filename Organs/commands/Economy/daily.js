require('../../../handler/MessageHandler')
const moment = require("moment-timezone")

module.exports={
    name:"daily",
    alias:["dail"],
    usage:"=daily",
    desc:"adds 1000 everday in your wallet",
    category:"Economy",
    start:async(client,m,{command,prefix,text,args,quoted,isAdmin,isBotAdmin,pushName})=>{
        const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
        console.log(time)
        let momen = await db.get(`{m.sender}_daily`)
        console.log(momen)
               let result = await cs.daily({
           user: m.sender,
           guild: 'mizuhara',
           amount: 1000,
           });
           if (result.error) {
               return m.reply(`You have alrady claimed your daily rewards at *${momen}* Try again in ${result.time}`);
           }
           else {
               m.reply("*¥1000* has been added to your wallet")
           console.log(`You have earned ¥${result.amount}. Your streak is now ${result.rawData.streak.daily}`);
           await db.set(`{m.sender}_daily`,time)
           }
    
    }



}