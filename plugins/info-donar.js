
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `✨ ¡𝘏𝘰𝘭𝘢 ${name}! ✨

¡𝘎𝘳𝘢𝘤𝘪𝘢𝘴 𝘱𝘰𝘳 𝘶𝘴𝘢𝘳 *${wm}*, 𝘵𝘶 𝘣𝘰𝘵 𝘨𝘳𝘢𝘵𝘶𝘪𝘵𝘰 𝘧𝘢𝘷𝘰𝘳𝘪𝘵𝘰! 🌟 𝘛𝘶 𝘢𝘱𝘰𝘺𝘰 𝘦𝘴 𝘧𝘶𝘯𝘥𝘢𝘮𝘦𝘯𝘵𝘢𝘭 𝘱𝘢𝘳𝘢 𝘮𝘢𝘯𝘵𝘦𝘯𝘦𝘳 𝘦𝘴𝘵𝘦 𝘱𝘳𝘰𝘺𝘦𝘤𝘵𝘰 𝘦𝘯 𝘮𝘢𝘳𝘤𝘩𝘢 𝘺 𝘴𝘪𝘦𝘮𝘱𝘳𝘦 𝘢𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘥𝘰. 𝘚𝘪 𝘲𝘶𝘪𝘦𝘳𝘦𝘴 𝘤𝘰𝘯𝘵𝘳𝘪𝘣𝘶𝘪𝘳 𝘺 𝘴𝘦𝘳 𝘱𝘢𝘳𝘵𝘦 𝘥𝘦 𝘦𝘴𝘵𝘢 𝘢𝘷𝘦𝘯𝘵𝘶𝘳𝘢, 𝘱𝘶𝘦𝘥𝘦𝘴 𝘩𝘢𝘤𝘦𝘳𝘭𝘰 𝘢 𝘵𝘳𝘢𝘷𝘦́𝘴 paypal. 🙏

─────────────────────

*💸 𝘗𝘢𝘺𝘗𝘢𝘭:* https://www.paypal.me/GZuasnabarPomatana

─────────────────────

🎁 *𝘖𝘵𝘳𝘢𝘴 𝘧𝘰𝘳𝘮𝘢𝘴 𝘥𝘦 𝘢𝘱𝘰𝘺𝘢𝘳:*
𝘚𝘪 𝘱𝘳𝘦𝘧𝘪𝘦𝘳𝘦𝘴 𝘢𝘺𝘶𝘥𝘢𝘳 𝘥𝘦 𝘰𝘵𝘳𝘢 𝘮𝘢𝘯𝘦𝘳𝘢, 𝘱𝘶𝘦𝘥𝘦𝘴 𝘥𝘰𝘯𝘢𝘳 𝘶𝘯 𝘯𝘶́𝘮𝘦𝘳𝘰 𝘱𝘢𝘳𝘢 𝘤𝘰𝘯𝘷𝘦𝘳𝘵𝘪𝘳𝘭𝘰 𝘦𝘯 𝘣𝘰t, y compartiendo nuestro canal para haci llegar con más personas<3
─────────────────────
'
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rcanal)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 
handler.estrellas = 3;

export default handler