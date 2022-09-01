module.exports = {
	name: "ping",
	alias: ["tagall"],
	desc: "Tags all the members",
    usage:"=ping / =ping <text>",
	category: "Group",
	start: async(client, m, { text, prefix, command,isAdmin,participants,groupAdmin,pushName}) => {
		if(!isAdmin) return client.sendMessage(m.from,{text:"This is admin only command"},{quoted:m})
        if(text) { var Text =`📌 *Message - ${text}*\n` } else {  var Text = "No text"}

let menText = `${Text}\n*💫 Ping by - ${pushName}*\n\n`
for (let memNum of participants) {

    if( groupAdmin.includes(memNum.id) === true ) { var emo = '👑'} else { var emo = '❄️'}
    menText += `${emo} *@${memNum.id.split('@')[0]}*\n`
    //members_id.push(memNum.jid)
}
client.sendMessage(m.from,{text:menText,mentions: participants.map(a => a.id)},{quoted:m})
    }
}