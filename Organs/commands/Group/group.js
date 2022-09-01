module.exports = {
    name: "group",
    alias: ["grp"],
    desc: "Ope/close group",
    cool:3,
    category: "Group",
    start: async(client, m,{pushName,isGroup,isAdmin,args,prefix}) => {
        //if (!isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmin) return m.reply("❌ This is an Admin only Command")

             if (args[0] === 'open'){
                await client.groupSettingUpdate(m.from, 'not_announcement').then((res) => m.reply(`*Group open*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await client.groupSettingUpdate(m.from, 'announcement').then((res) => m.reply(`*Group closed*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
					const sections = [
    {
	title: "GROUP settings",
	rows: [
	    {title: "close", rowId: `${prefix}group close`, description: "This will close the group"},
	    {title: "open", rowId: `${prefix}group open`, description: "This will open the group"}
	]
    }
]
const listMessage = {
  text: "Choose the required setting",
  footer: "ETERNITY",
  title: "",
  buttonText: "settings",
  sections
}
                    await client.sendMessage(m.from, listMessage,{quoted:m})

            }
    }
}