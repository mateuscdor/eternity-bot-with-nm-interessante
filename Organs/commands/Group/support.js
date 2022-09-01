module.exports = {
	name: "support",
	alias: ["sup"],
	desc: "Send you official support group link.",
	category: "Group",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://c.tenor.com/ADH9F8VHR_0AAAPo/anime-rent-a-girlfriend.mp4',
                    'https://c.tenor.com/a_rN_4QgvgsAAAPo/02-zero-two.mp4',
                    'https://c.tenor.com/iyikePLcR_QAAAPo/mizuhara.mp4',
                    'https://c.tenor.com/iXCm5bC8asAAAAPo/anime-girl.mp4',
                    'https://c.tenor.com/2IhcQ2RZRaoAAAPo/ichigodarling-darlinginthefranxx.mp4',
                    'https://c.tenor.com/UERgL11AC1MAAAPo/mwa.mp4',
                    'https://c.tenor.com/I6jUNcGd-Z4AAAPo/rem-kawai-rem.mp4',
                    'https://c.tenor.com/coXu_UrRPcgAAAPo/hatsune-miku-miku-hatsune.mp4',
                    'https://c.tenor.com/AshlDqJKqLEAAAPo/nezuko.mp4']
        let rae = yup[Math.floor(Math.random() * yup.length)]
const lemo = `
*『☘️ Support Links ☘️』*

*1) 🎓Eternity : Community 🎓:*
https://chat.whatsapp.com/LMb34ARtGcRCgjN9qC51YR

*2) ✦ Eternity: 𝗖𝗮𝘀𝗶𝗻𝗼 🎰 ✦:*
Coming Soon...
`
    await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}* have a look in your DM`},{quoted:m})
    client.sendMessage(m.sender,{text: lemo })
    }
}