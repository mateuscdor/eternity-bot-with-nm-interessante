const axios = require('axios')
const fs=require("fs")
module.exports={
    name:"weather",
    alias:["weather"],
    usage:"=weather [Your city]",
    desc:"Gives you forecast of current weather ",
    category:"Utils",
    start:async(client,m,{command,prefix,text,args})=>{
    if (!q)  return m.reply(`Please provide me the place name.`)
try {
wthr = await axios.get(`http://api.weatherapi.com/v1/current.json?key=0af08d75fca5466786e74019212512%20&q=${q}&aqi=no`)
if (!wthr) return m.reply(`Can not find the place's weather`)
const reply = `
📍 *Location:* ${wthr.data.location.name}
🏡 *Region:* ${wthr.data.location.region}
🗾 *Country:* ${wthr.data.location.country}
🕗 *Time Zone:* ${wthr.data.location.tz_id}
🌡️ *Temparature:* ${wthr.data.current.temp_c}°C
📡 *Weather Condition:* ${wthr.data.current.condition.text}
🍃 *Wind Speed:* ${wthr.data.current.wind_kph} Km/hr
🎐 *Wind Degree:* ${wthr.data.current.wind_degree}°
🌬️ *Wind Direction:* ${wthr.data.current.wind_dir}
🌈 *pressure:* ${wthr.data.current.pressure_in} in
🌧️ *preciptation:* ${wthr.data.current.precip_mm} mm
💧 *Humidity:* ${wthr.data.current.humidity}%
☁ *Cloud:* ${wthr.data.current.cloud}
🏜️ *Feels like:* ${wthr.data.current.feelslike_c}°C
`
await client.sendMessage(m.from,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return m.reply (`*${q}* isn't a valid place.`)
    }
  }
}
