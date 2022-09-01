module.exports = {
	name: "react",
	alias: ["reac","r"],
	desc: "Send Reaction Message",
    category: "Group",
    usage: "=react 🥺",
    start: async(client, m, { text, prefix, command }) => {
        if (!text) return m.reply(`Example : ${prefix + command} 🥺`)
      
            reactionMessage = {
                react: {
                    text: text,
                    key: m.key
                }
            }
          
            client.sendMessage(m.from, reactionMessage)
        }
	
   
}