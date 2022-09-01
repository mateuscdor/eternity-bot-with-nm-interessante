require('../../../handler/MessageHandler')
module.exports={
    name:"bank",
    alias:["bnk"],
    usage:"=bank",
    desc:"Shows the bank",
    category:"Economy",
    start:async(client,m,{command,prefix,text,args,quoted,isAdmin,isBotAdmin,pushName})=>{
        let disc = m.sender.substring(3, 7)
	let result = await cs.balance({
        user: m.sender,
        guild: 'mizuhara'
      });
	  const dbut = [
{buttonId: '/wallet', buttonText: {displayText: 'Wallet'}, type: 1},
{buttonId: "/help", buttonText: {displayText: 'Commands'}, type: 1}
]
let but = {
	text:`*❁世銀↝𝔹𝕒𝕟𝕜 - 💳*\n\n📗 *INFO* :\n        *🪪 Name :* ${pushName}\n        *⛩ Tag :* #${disc}\n        *💳 Amount :* ¥${(result.bank).toLocaleString()}`,
	footer: "ETERNITY",
	buttons: dbut,
	headerType: 1
		}
		await client.sendMessage(m.from,but,{quoted:m})
    }
}