const { buffergif, fetchBuffer } = require('../../../lib/Function')
const axios = require('axios')
module.exports={
    name:"solo",
    alias:["solo"],
    usage:"=solo",
    desc:"Basically doing stuff by herself.",
    category:"Nsfw",
    start:async(client,m,{command,nsfw,prefix,text})=>{
      let waifud = await hmtai.nsfw.pantsu();
      let assss = await axios.get ("https://purrbot.site/api/img/nsfw/solo/gif")
    var bobuff = await fetchBuffer(assss.data.link)
    var bogif = await buffergif(bobuff)
    await client.sendMessage(m.from,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
  }
}

