require('../../../handler/MessageHandler')
const canvacord=require('canvacord')
const {fetchBuffer}=require('../../../lib/Function')
module.exports={
    name: "rank",
    alias: ["rank"],
    desc: "shows the rank",
    cool:3,
    category: "General",
    start: async(client, m,{text,pushName,sender}) => {
        const userq = await Levels.fetch(m.sender, "bot");
				        const levelRoleq = userq.level
        var role = 'Warrior'
        if (levelRoleq <= 2) {
            var role = 'Elite III'
        } else if (levelRoleq <= 4) {
            var role = 'Elite II'
        } else if (levelRoleq <= 6) {
            var role = 'Elite I'
        } else if (levelRoleq <= 8) {
            var role = 'Master IV'
        } else if (levelRoleq <= 10) {
            var role = 'Master III'
        } else if (levelRoleq <= 12) {
            var role = 'Master II'
        } else if (levelRoleq <= 14) {
            var role = 'Master I'
        } else if (levelRoleq <= 16) {
            var role = 'Grandmaster V'
        } else if (levelRoleq <= 18) {
            var role = 'Grandmaster IV'
        } else if (levelRoleq <= 20) {
            var role = 'Grandmaster III'
        } else if (levelRoleq <= 22) {
            var role = 'Grandmaster II'
        } else if (levelRoleq <= 24) {
            var role = 'Grandmaster I'
        } else if (levelRoleq <= 26) {
            var role = 'Epic V'
        } else if (levelRoleq <= 28) {
            var role = 'Epic IV'
        } else if (levelRoleq <= 30) {
            var role = 'Epic III'
        } else if (levelRoleq <= 32) {
            var role = 'Epic II'
        } else if (levelRoleq <= 34) {
            var role = 'Epic I'
        } else if (levelRoleq <= 36) {
            var role = 'Legend V'
        } else if (levelRoleq <= 38) {
            var role = 'Legend IV'
        } else if (levelRoleq <= 40) {
            var role = 'Legend III'
        } else if (levelRoleq <= 42) {
            var role = 'Legend II'
        } else if (levelRoleq <= 44) {
            var role = 'Legend I'
        } else if (levelRoleq <= 46) {
            var role = 'Mythic'
        } else if (levelRoleq <= 50) {
            var role = 'Mythic Glory'
        }
		let disc = m.sender.substring(3, 7)
			let textr = "";
            if (pushName) {
             textr += `*${pushName}#${disc}'s* Exp\n\n`
			} else {
				textr += `*${m.sender}#${disc}'s* Exp\n\n`
			}
			textr += `*🎯️XP*: ${userq.xp} / ${Levels.xpFor(userq.level + 1)}\n*❤️Level*: ${userq.level}\n*🔮️Role*: ${role}`

			try {
                    ppuser = await client.profilePictureUrl(m.sender, 'image')
                } catch {
                    pppuser = 'https://www.linkpicture.com/q/IMG-20220118-WA0387.png'
                    ppuser=await fetchBuffer(pppuser)

                }
                const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
                const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
                const randomHexz = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`

			                const rank = new canvacord.Rank()
                    .setAvatar(ppuser)
                    .setLevel(userq.level)
                    .setLevelColor(randomHexs, randomHex)
                    .setCurrentXP(userq.xp)
                    .setOverlay(randomHex, 100, false)
                    .setRequiredXP(Levels.xpFor(userq.level + 1))
                    .setProgressBar(randomHexs, 'COLOR')
				    .setRank(0, role, false)
                    .setBackground('COLOR', randomHexz)
                    .setUsername(pushName)
                    .setDiscriminator(disc)
                rank.build().then(async(data)=>{
					client.sendMessage(m.from,{image:data,caption:textr},{quoted:m})
  })

    }
}