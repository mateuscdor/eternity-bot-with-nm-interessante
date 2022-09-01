require('../../../handler/MessageHandler')
module.exports={
    name:"wallet",
    alias:["wal"],
    usage:"=wallet",
    desc:"Shows the wallet",
    category:"Economy",
    start:async(client,m,{command,prefix,text,args,quoted,isAdmin,isBotAdmin,pushName})=>{
        let disc = m.sender.substring(3, 7)
        let result = await cs.balance({
            user: m.sender,
            guild: 'mizuhara'
          });
          let wall = `${(result.wallet).toLocaleString()}`
          let wllet = parseInt(wall)
          const dbut = [
    {buttonId: '/bank', buttonText: {displayText: 'Bank'}, type: 1},
    {buttonId: "/help", buttonText: {displayText: 'Commands'}, type: 1}
    ]
    let but = {
        text:`*❁財↝𝕎𝕒𝕝𝕝𝕝𝕖𝕥 - 💴*\n\n📗 *INFO* :\n        *🪪 Name :* ${pushName}\n        *⛩ Tag :* #${disc}\n        *💳 Amount :* ¥${(result.wallet).toLocaleString()}`,
        footer: "ETERNITY",
        buttons: dbut,
        headerType: 1
            }
            await client.sendMessage(m.from,but,{quoted:m})
    }
}