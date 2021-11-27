const Discord = require("discord.js");
const db = require("quick.db");
const kasalar = require(".././kasalar");

exports.run = async (client, message, args) => {
  const k4h1nfiltre = kasalar
    .filter(x => x.kasaid)
    .map(
      x =>
        `Kasa İsmi: **${x.isim}** Kasa fiyatı: **${x.fiyat}** İD: **${x.kasaid}**`
    )
    .join("\n ");
  const embed = new Discord.MessageEmbed()
    .addField(`Kasa Listesi ${client.k4h1n.botismi}`, `${k4h1nfiltre}`)
    .setFooter(
      `Bir kasa hakkında bilgi almak için: ${client.k4h1n.prefix}kasa-bilgi <kasaid>`
    )
    .setColor(client.k4h1n.renk);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  katagori: "Ekonomi"
};

exports.help = {
  name: "kasalar",
  description: "Kasaları listeler.",
  usage: "kasalar"
};
