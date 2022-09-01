module.exports = {
    name: "hi",
    alias: ["hello"],
    desc: "Tells hello",
    cool:3,
    react: "🍁",
    category: "General",
    start: async(client, m,{pushName}) => {
        await client.sendMessage(m.from,{text:`Hello ${pushName}`},{quoted:m})
    }
}