module.exports = {
	name: "promote",
	alias: ["pm"],
	usage:"=promote @tag/quote",
	desc: "Promote Member To Admin",
	category: "Group",
	start: async(client, m, { text, prefix, command,isAdmin,mentionByTag }) => {
		if(!isAdmin) return client.sendMessage(m.from,{text:"This is admin only command"},{quoted:m})
		const mention= mentionByTag
		let users = await (mention[0]) || m.msg.contextInfo.participant
		if (!users) return m.reply("❌ Couldn't find any userID in context")
	
			await client.groupParticipantsUpdate(m.from, [users], "promote")
			await client.sendMessage(m.from,{text:`Successfully promoted`},{quoted:m})
	},
    
}