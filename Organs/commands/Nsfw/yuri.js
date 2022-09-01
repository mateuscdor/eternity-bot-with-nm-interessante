const { buffergif, fetchBuffer } = require('../../../lib/Function')
const axios = require('axios')
const hmtai=require('hmtai')
module.exports={
    name:"yuri",
    alias:["yuri"],
    usage:"=yuri",
    desc:"What about cute Les?~",
    category:"Nsfw",
    start:async(client,m,{command,nsfw,prefix,text})=>{
      let waifud = await hmtai.nsfw.pantsu();
      let assss = await axios.get ("https://purrbot.site/api/img/nsfw/yuri/gif")
    var bobuff = await fetchBuffer(assss.data.link)
    var bogif = await buffergif(bobuff)
    await client.sendMessage(m.from,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
  }
}

