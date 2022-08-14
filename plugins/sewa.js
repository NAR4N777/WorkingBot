const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let sewa = `*────── 「 LIST SEWA 」 ──────*

Bot Gratis kok.
Tinggal chat owner 👇
wa.me/6285713110263`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/696076406bf2516adb1fd.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: sewa,
           hydratedFooterText: wm,
           hydratedButtons: [{
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             },
               {
             quickReplyButton: {
               displayText: '🙏 Donasi',
               id: '.donasi',
             }

           }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['sewa']
handler.tags = ['donasi']
handler.command = new RegExp
handler.customPrefix = /^(.sewa)$/i

module.exports = handler