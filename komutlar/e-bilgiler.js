const Discord = require("discord.js");
const db = require("quick.db");
var ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let k4h1n38 = message.mentions.users.first() || message.author;
  const bakiye = await db.fetch(`bakiyecdare-${k4h1n38.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumuk4h1n-${k4h1n38.id}`);
  const hesapismi = await db.fetch(`hesapismik4h1n-${k4h1n38.id}`);
  const hesaptarihyıl = await db.fetch(`hesaptarihiçdayreyıl-${k4h1n38.id}`);
  const hesaptarihay = await db.fetch(`hesaptarihiçdayreay-${k4h1n38.id}`);
  const hesaptarihgün = await db.fetch(`hesaptarihiçdayregün-${k4h1n38.id}`);

  if (!hesapdurumu) {
    if (args[0])
      return message.channel.send(
        `Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`
      );
    message.reply(
      `İlk olarak hesap oluşturmalısın. ${client.k4h1n.prefix}hesap-oluştur <Hesap İsmi>`
    );
  } else {
    if (hesapdurumu) {
      if (!hesapismi) {
        const k4h1nembed1 = new Discord.MessageEmbed()
          .setColor(client.k4h1n.renk)
          .setDescription(
            `Hesap İsmi: ${client.k4h1n.isimsiz}\n Hesap Bakiyesi: ${bakiye}\n Hesap Oluşturma Tarihi: Bilinmiyor`
          );
        message.channel.send(k4h1nembed1);
      } else {
        if (hesapdurumu) {
          if (hesapismi) {
            const k4h1nembed1 = new Discord.MessageEmbed()
              .setColor(client.k4h1n.renk)
              .setDescription(
                `Hesap İsmi: ${hesapismi}\n Bakiye: ${bakiye}\n Hesap Oluşturma Tarihi: *${hesaptarihay}/ ${hesaptarihgün}/${hesaptarihyıl}* gününde hesabın oluşturuldu! 
              `
              );
            message.channel.send(k4h1nembed1);
          }
        }
      }
    }
  }
};
("https://cdn.discordapp.com/attachments/910129470655070218/911562813414178826/Emoji_Gif_M3L1H_278.gif");
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  katagori: "Ekonomi"
};
exports.help = {
  name: "param",
  description: "Bilgilerinizi gösterir.",
  usage: "bilgiler <@kullanıcı>"
};
