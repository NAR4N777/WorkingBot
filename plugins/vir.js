let handler = async m => m.reply(`
Maaf kak, Demi kenyamanan bersama, Saya hapus fitur virtex
`.trim()) 

handler.customPrefix = /^(.prank)$/i
handler.command = new RegExp

handler.help = ['.prank']
handler.tags = ['virtex']

handler.premium = true
handler.mods = false 
handler.premium = false
handler.group = true
handler.private = false
module.exports = handler