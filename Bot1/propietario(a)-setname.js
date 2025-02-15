let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊`
  try {
    await conn.updateProfileName(text)
    m.reply('LISTO!')
  } catch (e) {
    console.log(e)
    throw `Errore`
  }
}
handler.help = ['setbotname <teks>']
handler.tags = ['Tyr']
handler.command = /^(setbotname)$/i

handler.Tyr = true

export default handler