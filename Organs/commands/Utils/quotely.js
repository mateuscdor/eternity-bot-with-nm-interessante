require('../../../handler/MessageHandler')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const axios = require('axios')

module.exports = {
    name: "quotly",
    alias: ["q"],
    desc: "Telegram quotly bot it makes quote stickes.",
    cool: 5,
    category: "Utils",
    start: async(client, m,{ text, quoted, pushName, args }) => {
        
   if(m.quoted){
        let content =m.quoted.msg || 'null'
  //      if (!content) return m.reply('Provide the text you want as quotly sticker, Baka!')
  let name = await user.findOne({ id:m.quoted.sender })
  const nams=name.name || "user"
        const username = nams
        let pfp;   
        try {
            pfp = await client.profilePictureUrl(m.quoted.sender, 'image')
        } catch {
            pfp = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg' 
        }
        
   try {
// JSON for results 
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#FFFFFF",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": username,
        "photo": {
          "url": pfp
        }
      },
      "text": content,
      "replyMessage": {}
    }
  ]
};
        const response = await axios.post('https://api.safone.tech/quotly', json, {
        headers: {'Content-Type': 'application/json'}
    })
   const base64 = response.data.image
   const buffer = Buffer.from(base64, 'base64')

   const sticker = new Sticker(buffer, {
                pack: `Quotly Bot`,
                author: `${username}`,
                type: StickerTypes.FULL,
                categories: ['🤩', '🎉'],
                quality: 100,
                background: 'transparent'
            })
            const sbuffer = await sticker.toBuffer()
         client.sendMessage(m.from,{sticker:sbuffer},{quoted:m})
        console.log(base64);
        } catch (err) {
            console.log(err.message, true)
            await m.reply('An error occurred. Try again later')
        }
      }else{
        let content =text || 'null'
        //      if (!content) return m.reply('Provide the text you want as quotly sticker, Baka!')
        
              const username = pushName
              let pfp;   
              try {
                  pfp = await client.profilePictureUrl(m.sender, 'image')
              } catch {
                  pfp = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg' 
              }
              
         try {
      // JSON for results 
      const json = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#FFFFFF",
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [
          {
            "entities": [],
            "avatar": true,
            "from": {
              "id": 1,
              "name": username,
              "photo": {
                "url": pfp
              }
            },
            "text": content,
            "replyMessage": {}
          }
        ]
      };
              const response = await axios.post('https://api.safone.tech/quotly', json, {
              headers: {'Content-Type': 'application/json'}
          })
         const base64 = response.data.image
         const buffer = Buffer.from(base64, 'base64')
      
         const sticker = new Sticker(buffer, {
                      pack: `Quotly Bot`,
                      author: `${username}`,
                      type: StickerTypes.FULL,
                      categories: ['🤩', '🎉'],
                      quality: 100,
                      background: 'transparent'
                  })
                  const sbuffer = await sticker.toBuffer()
               client.sendMessage(m.from,{sticker:sbuffer},{quoted:m})
              console.log(base64);
              } catch (err) {
                  console.log(err.message, true)
                  await m.reply('An error occurred. Try again later')
              }
      }
      
    }
}