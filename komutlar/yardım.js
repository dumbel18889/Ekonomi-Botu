const K4H1NDiscord = require("discord.js");
const K4H1NClient = new K4H1NDiscord.Client();
const ayarlar = require("../ayarlar.json");
let Prefix = ayarlar.prefix;

exports.run = (client, message) => {
  const K4H1NEmbed = new K4H1NDiscord.MessageEmbed()
    .setImage(
      "https://cdn.discordapp.com/attachments/893834716954902568/911565310237237308/Emoji_Gif_M3L1H_278.gif"
    )
    .setColor("BLUE")
    .setAuthor(`Ekonomi Bot Yardım Menüsü`)
    .setDescription(
      `
 **${Prefix}param** \n :beginner: Hesap Bilgisini Gösterir.
 **${Prefix}bakiye** \n:beginner: Bakiyeyi Gösterir.
 **${Prefix}hesap-oluştur** \n:beginner:  Hesap Oluşturursun.
 **${Prefix}hesap-sil** \n:beginner:  Hesap Silersin.
 **${Prefix}kasa-aç** \n:beginner:  Kasa Açarsın.
 **${Prefix}kasa-bilgi** \n:beginner:  Kasalar Hakkında Bilgi Alırsın.
 **${Prefix}kasalar** \n:beginner:  Tüm Kasaları Gösterir.
 **${Prefix}günlük** \n:beginner:  Günlük Paranızı Verir.
 **${Prefix}transfer** \n:beginner:  Belirtilen Kişiye Belirtilen Miktarda Para Gönderirsin.
`
    )
    .setFooter(`Ekonomi`)
    .setTimestamp();
  message.channel.send(K4H1NEmbed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "",
  usage: ""
};
