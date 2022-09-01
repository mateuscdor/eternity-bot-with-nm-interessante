module.exports = {
	name: "report",
	alias: ["rpt","complaint","bug"],
	desc: "Report bug or submit complaint to Eternity developers.",
    usage:"/report <text>/ /bug <text>",
	category: "Group",
	start: async(client, m, { text, prefix,groupName, command,isAdmin,participants,groupAdmin,pushName}) => {
        if (!text) return m.reply(`Please write your report! Ex: */report <Enter the issue>*`);
        const rep=`
*『 Report Recieved! 』*

*Group:* ${groupName}
*User:* ${pushName}
*Message:* ${text}`
    m.reply(`Reporting has been sent to the developers successfully.`)
    const rid= `120363042386835331@g.us`
       await client.sendMessage(rid, {text: rep})
       
    }
}