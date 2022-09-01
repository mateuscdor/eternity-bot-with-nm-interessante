const r = require('better-tord');
module.exports = {
	name: "dare",
	alias: ["dares"],
	desc: "Send dare task.",
    category: "Group",
    usage: "=truth",
    start: async(client, m, { prefix, command }) => {
        const truth = r.get_dare();
        await client.sendMessage(m.from,{text:truth},{quoted:m})
    }
}