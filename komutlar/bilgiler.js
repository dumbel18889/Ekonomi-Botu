const AsreaperDiscord = require("discord.js");
const AsreaperClient = new AsreaperDiscord.Client();
exports.run = (client, message) => {
  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed();
  AsreaperEmbed.setColor(0x36393f);
  AsreaperEmbed.setDescription(
    ` DumBel'i davet etmek için [buraya](https://discord.com/api/oauth2/authorize?client_id=910797458869727262&permissions=8&scope=bot) tıkla ,
     DumBel Destek sunucusuna gelmek için  [buraya](https://discord.gg/TKT6T5gPak) tıkla 
    Sahibimin adı = DumBel#6755
    Yapımında yardımcı olan = 👑《 ₮ⱧɆ ₭ł₦₲ !O!F!》👑#5451
    Alt yapım için DumBel#6755'e dm atmanız yetellidir`
  );
  message.channel.send(AsreaperEmbed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: "bilgiler",
  description: "Bot ile ilgili bilgi verir.",
  usage: "bilgi"
};
