import axios from 'axios';

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}${mid.smsTikTok6}\n*${usedPrefix + command} Gata_Dios*`
m.react("⏳")
try {
let { data: response } = await axios.get(`${apis}/search/tiktoksearch?query=${text}`);
if (!response || !response.meta || !Array.isArray(response.meta) || response.meta.length === 0) return m.reply(`❌ NO SE ENCONTRARON RESULTADOS PARA "${text}".`);
let searchResults = response.meta;
shuffleArray(searchResults);
let selectedResults = searchResults.slice(0, 3)
let messages = selectedResults.map(result => [
`${result.title}`, 
gt,
result.hd
]);
await conn.sendCarousel(m.chat, `💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 | 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}`, "🔍 TikTok Search", messages, m);
m.react("✅️")
} catch (error) {
m.react("❌️")
console.error(error);    
}};
handler.help = ['tiktoksearch <texto>'];
handler.tags = ['downloader'];
handler.command = ['tiktoksearch', 'ttsearch'];
handler.register = true;
handler.limit = 3;

export default handler;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }