let media = img.getRandom()
let handler = async (m, { conn, command }) => {
//let pp = './src/apoyo.jpg'
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { 
text: `*\`[💖 ＤＯＮＡＣＩＯＮ 💖 ]\`*

✨ ¡𝘏𝘰𝘭𝘢 ${name}! ✨

¡𝘎𝘳𝘢𝘤𝘪𝘢𝘴 𝘱𝘰𝘳 𝘶𝘴𝘢𝘳 *${wm}*, 𝘵𝘶 𝘣𝘰𝘵 𝘨𝘳𝘢𝘵𝘶𝘪𝘵𝘰 𝘧𝘢𝘷𝘰𝘳𝘪𝘵𝘰! 🌟 𝘛𝘶 𝘢𝘱𝘰𝘺𝘰 𝘦𝘴 𝘧𝘶𝘯𝘥𝘢𝘮𝘦𝘯𝘵𝘢𝘭 𝘱𝘢𝘳𝘢 𝘮𝘢𝘯𝘵𝘦𝘯𝘦𝘳 𝘦𝘴𝘵𝘦 𝘱𝘳𝘰𝘺𝘦𝘤𝘵𝘰 𝘦𝘯 𝘮𝘢𝘳𝘤𝘩𝘢 𝘺 𝘴𝘪𝘦𝘮𝘱𝘳𝘦 𝘢𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘥𝘰. 𝘚𝘪 𝘲𝘶𝘪𝘦𝘳𝘦𝘴 𝘤𝘰𝘯𝘵𝘳𝘪𝘣𝘶𝘪𝘳 𝘺 𝘴𝘦𝘳 𝘱𝘢𝘳𝘵𝘦 𝘥𝘦 𝘦𝘴𝘵𝘢 𝘢𝘷𝘦𝘯𝘵𝘶𝘳𝘢, 𝘱𝘶𝘦𝘥𝘦𝘴 𝘩𝘢𝘤𝘦𝘳𝘭𝘰 𝘢 𝘵𝘳𝘢𝘷𝘦́𝘴 paypal. 🙏

─────────────────────

*💸 𝘗𝘢𝘺𝘗𝘢𝘭:* https://www.paypal.me/GZuasnabarPomatana

─────────────────────

🎁 *𝘖𝘵𝘳𝘢𝘴 𝘧𝘰𝘳𝘮𝘢𝘴 𝘥𝘦 𝘢𝘱𝘰𝘺𝘢𝘳:*
𝘚𝘪 𝘱𝘳𝘦𝘧𝘪𝘦𝘳𝘦𝘴 𝘢𝘺𝘶𝘥𝘢𝘳 𝘥𝘦 𝘰𝘵𝘳𝘢 𝘮𝘢𝘯𝘦𝘳𝘢, 𝘱𝘶𝘦𝘥𝘦𝘴 𝘥𝘰𝘯𝘢𝘳 𝘶𝘯 𝘯𝘶́𝘮𝘦𝘳𝘰 𝘱𝘢𝘳𝘢 𝘤𝘰𝘯𝘷𝘦𝘳𝘵𝘪𝘳𝘭𝘰 𝘦𝘯 𝘣𝘰t, y compartiendo nuestro canal para haci llegar con más personas<3
─────────────────────

*ＡＧＲＡＤＥＣＩＭＩＥＮＴＯＳ:*

les agradecemos a todos por apoyarnos en este proyecto 

> ɢʀᴀᴄɪᴀs 💕`, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen3, 
"title": 'ᴾᵘᵉᵈᵉ ᵃᵖᵒʸᵃʳ ⁿᵘᵉˢᵗʳᵒ ʳᵉᵖᵒˢᶦᵗᵒʳᶦᵒ ᶜᵒⁿ ᵘⁿᵃ ᵉˢᵗʳᵉˡˡᶦᵗᵃˢ ⭐', 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": md, 
"sourceUrl": md, 
}}}, { quoted: m })
// await conn.sendButton(m.chat, `a`, `https://www.paypal.me/GZuasnabarPomatana`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
/*await conn.sendHydrated(m.chat, str, wm, media,
}
handler.help = ['donar']
handler.tags = ['main']
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating|creditos$/i
handler.register = true
export default handler


/*
//await conn.sendButton(m.chat, wm, `https://www.paypal.me/GZuasnabarPomatana`, pp, m)
await conn.sendButton(m.chat, ``, `https://www.paypal.me/GZuasnabarPomatana`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
  */