const fs = require("fs");
require('./MessageHandler')
module.exports = async (client, m) => {
	try {
		let metadata = await client.groupMetadata(m.id)
		let participants = m.participants
	    const myID = client.user.id.split(":")[0] + "@s.whatsapp.net"

		for (let num of participants) {
			try {
				ppuser = await client.profilePictureUrl(m.id, 'image')
			} catch {
				ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
capt=`
*@${num.split('@')[0]}* *Welcome to*  *${metadata.subject}* 🍁
       
🎋 *Group Description:*
        
${metadata.desc}`
if (m.action == 'add'&& m.participants.includes(myID)) {
return client.sendMessage(m.id,{text:"thanks for adding"})
}
			if (m.action == 'add'&&wlc.includes(`${m.id}`)&&!m.participants.includes(myID)) {
				client.sendMessage(m.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption:capt})
			} else if (m.action == 'remove' &&wlc.includes(m.id)) {
				client.sendMessage(m.id, { text:`@${num.split("@")[0]} bye bye , we will not miss you`, mentions:[num], })
			}
		}
	} catch (err) {
		console.log(err)
	}
}