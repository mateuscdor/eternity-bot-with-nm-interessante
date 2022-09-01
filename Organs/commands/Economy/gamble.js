require('../../../handler/MessageHandler')
const fs=require("fs")

const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')

module.exports={
    name:"gamble",
    alias:["casino"],
    usage:"=gamble <amount> left/right",
    desc:"random gambles left/right",
    category:"Economy",
    start:async(client,m,{command,prefix,text,args,quoted,isAdmin,isBotAdmin,pushName,mentionByTag})=>{
      //  if (!text) return m.reply(`❌ No amount and direction provided!`)
	anu = args.join(' ').split(' ')
    if (!anu) return m.reply(`🟥 No amount and direction provided!`)
if (!anu[0]) return m.reply(`🟥 No amount provided!`)
if (isNaN(anu[0]) == true) return m.reply(`🟥 No amount provided!`)
	if (!anu[1]) return m.reply(`🟥 No direction provided!`)
	 if (anu[0].includes("-")) return m.reply("You can't send negitive 💴yen.")
		
	const directions = ["left", "right"];
	await db.set(`${m.sender}_lastgamble`, Date.now());
const ammount = parseInt(anu[0])
 const wheretoPutMoney = 'wallet';
 if (ammount < 200)
      return m.reply(`You can't gamble less than *¥200* 💴`);
      //const wheretoPutMoney = 'wallet'; // Or bank
	  	let result1 = await cs.balance({
        user: m.sender,
        guild: 'mizuhara'
      });
const direction = anu[1]
	  if ( ammount > parseInt(result1.wallet) || !parseInt(result1.wallet) == ammount) return m.reply(`You don't have enough *💴 Yen* in your wallet.`);
	  const wallet = parseInt(result1.wallet)
    if (!directions.includes(anu[1])) return m.reply(`❌ No direction provided, Try Eg. ${prefix}gamble [amount eg. 100] left or right`)
try {
	const chance = directions[Math.floor(Math.random() * directions.length)]
	let gif = ''
  let gg
	 if (chance === "left") {
    let media = "https://thumbs.gfycat.com/GargantuanLastIndianspinyloach-mobile.mp4"
    let sticker = new Sticker(media, {
       pack: "left turn", // The pack name
       author: "Eternity Casino", // The author name
       type: StickerTypes.CROP, // The sticker type
       categories: ['🤩', '🎉'], // The sticker category
       id: '12345', // The sticker id
       quality: 60, // The quality of the output file
       background: 'transparent' // The sticker background color (only for full stickers)
    })
    
     gg = await sticker.toBuffer()
   //await client.sendMessage(m.from, {sticker: gg}, {quoted: m})
   // await client.sendMessage(m.from, {sticker: fs.readFileSync('https://thumbs.gfycat.com/GargantuanLastIndianspinyloach-mobile.mp4')}, {quoted: m})
       
    } else if (chance === "right") {
      let media = "https://thumbs.gfycat.com/LoathsomeParchedDarwinsfox-mobile.mp4"
    let sticker = new Sticker(media, {
       pack: "right turn", // The pack name
       author: "Eternity Casino", // The author name
       type: StickerTypes.CROP, // The sticker type
       categories: ['🤩', '🎉'], // The sticker category
       id: '12345', // The sticker id
       quality: 60, // The quality of the output file
       background: 'transparent' // The sticker background color (only for full stickers)
    })
    
     gg = await sticker.toBuffer()
       //gg="https://im4.ezgif.com/tmp/ezgif-4-6dccf74c77.webp"
    }
    //await client.sendMessage(m.from, {sticker: gg}, {quoted: m})

	  if ((chance == direction) == true) {
		  	let result3 = await cs.addMoney({
        user: m.sender,
        guild: 'mizuhara',
        amount: ammount,
        wheretoPutMoney: wheretoPutMoney
});
await client.sendMessage(m.from, {sticker: gg}, {quoted: m})
await m.reply(`📈 You won *¥${ammount}* 💴`)
	  }
	   else if ((chance == direction) == false) {
		   console.log(`${chance !== directions} ${directions} ${chance}`)
		   let result2 = await cs.removeMoney({
        user: m.sender,
        guild: 'mizuhara',
        amount: ammount,
        wheretoPutMoney: wheretoPutMoney
      });

await client.sendMessage(m.from, {sticker: gg}, {quoted: m})
await m.reply(`📉 You lost *¥${ammount}* 💴`)
	   }

}catch (err) {
	 m.reply("❌ You are useing the command in a wrong format")
	console.log(err)
}
    }
}