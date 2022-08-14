let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let helloarie = fs.readFileSync('./mp3/Bot.opus') 
conn.sendFile(m.chat, helloarie, '', '', m, true)
}

handler.customPrefix = /^(bot|menu)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = true
handler.private = false

module.exports = handler
