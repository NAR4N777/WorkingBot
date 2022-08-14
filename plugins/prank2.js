let handler = async m => m.reply(`Maaf kak, Demi kenyamanan bersama, Saya hapus fitur virtex
`.trim())

handler.customPrefix = /^(.prank2)$/i
handler.command = new RegExp

handler.help = ['.prank2']
handler.tags = ['virtex']

handler.mods = false 
handler.premium = true
handler.group = true
handler.private = false
module.exports = handler