const r = require('better-tord');
module.exports = {
	name: "truth",
	alias: ["trooth"],
	desc: "Send truth questions.",
    category: "Group",
    usage: "=truth",
    start: async(client, m, { prefix, command }) => {
        const truth = r.get_truth();
        await client.sendMessage(m.from,{text:truth},{quoted:m})
    }
}