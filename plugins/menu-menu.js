import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './src/Miku/Hola.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/CD6MbGV.jpeg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `_Hola ${taguser}, este es el menu completo de_ _*MagoBot*_

*INFORMACION DEL BOT*
-.Owner
-.Adquirir
-.InfoBot
-.Estado
-.Redes
-.Tienda

*FUNCIONES DE MODERACION*

-.Add: agrega a una Persona.
-.Ban @usuario:Elimina al @.
-.Daradmin @usuario:Le da admin al @.
-.Quitaradmin @usuario:Le quita el adm al @.
-.Noti:Reenvia el mensaje con etiqueta invisible.
-.Tag:Menciona a todo el Grupo
-.Grupo abrir/cerrar:Modifica el Grupo
-.Link group:Manda el Link del Grupo
-.SetName Texto:Cambia el Nombre del Grupo
-.Setdesc Texto:Cambia la descripcion del grupo

*FUNCIONES EXTRAS*
-.S:Trasforma una imagen o video en stiker
-.Emojimix:Transforma dos emojis en uno
-.Google Texto:Buscas informacion
-.Wikipedia Texto:Buscas Informacion
-.Afk Razon:Manda un Mensaje diciendo que estas afk
-.Stickmaker:Crea un Stiker desde Stiker Maker`.trim()
let buttons = [
{ buttonId: '.owner', buttonText: { displayText: 'OWNER' }, type: 1 },
{ buttonId: '.adquirir', buttonText: { displayText: 'ADQUIRIR' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '*MagoBot*',
body: null,
thumbnail: img,
sourceUrl: `https://youtube.com`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙷𝚘𝚕𝚊 𝙴𝚕 𝙼𝚎𝚗𝚞 𝚜𝚎 𝙴𝚜𝚝𝚊 𝙿𝚛𝚘𝚌𝚎𝚜𝚊𝚗𝚍𝚘 , 𝙿𝚘𝚛𝙵𝚊𝚟𝚘𝚛 𝙴𝚜𝚙𝚎𝚛𝚊.........*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}