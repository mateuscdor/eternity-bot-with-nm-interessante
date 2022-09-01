const {fetchJson,buffergif}=require('../../../lib/Function')
const axios=require('axios')
module.exports = {
    name: "bite",
    alias:["bite"],
    desc: "Sends bite gif",
    category: "Reactions",
    start: async(client, m, { command, prefix, mentionByTag,text}) => {

        var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let usep = m.sender
let mentioneduser=``
try {
    const mention= mentionByTag
    users = await (mention[0]) || m.msg.contextInfo.participant
 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     mentioneduser =`@${m.sender.split("@")[0]} bitten themselves`
     console.log(mentioneduser)

} else {
const mentioneduserr =`@${users.split("@"[0])}`
 mentioneduser= `@${m.sender.split("@")[0]} bitten @${users.split("@")[0]} `

console.log(mentioneduser)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await buffergif(buffer)
		client.sendMessage(m.from,{video: sgif, gifPlayback:true,mentions:ment,caption:mentioneduser},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}

}
