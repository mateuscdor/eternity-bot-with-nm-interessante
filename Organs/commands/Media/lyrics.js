const { fetchBuffer}=require('../../../lib/Function')
const Genius =require("genius-lyrics")
const Client = new Genius.Client();
module.exports = {
    name: "lyrics",
    alias: ["ly"],
    desc: "Finds the lyrics of the given song",
    cool:3,
    category: "Media",
    start: async(client, m,{text,pushName}) => {
       
if (!text) return m.reply(`❌ No query provided!`)
  const searches = await Client.songs.search(text);

  // Pick first one
  const firstSong = searches[0];
  console.log("About the Song:\n", firstSong, "\n");
  
  // Ok lets get the lyrics
  const lyrics = await firstSong.lyrics();
  console.log("Lyrics of the Song:\n", lyrics, "\n");
  const reactionMessage = {
    react: {
        text: "🎶",
        key:m.key
    }
}

 await client.sendMessage(m.from, reactionMessage)
  client.sendMessage(m.from, { text:lyrics, contextInfo: {
    externalAdReply: {
        title:'Lyrics-',
        body:firstSong.title,
        thumbnail: await fetchBuffer(firstSong.thumbnail),
        //mediaUrl: media.url
    }
}}, { quoted: m})

    }

}