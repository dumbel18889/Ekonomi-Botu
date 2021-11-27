const Discord = require("discord.js");
const db = require("quick.db");
var ayarlar = require("../ayarlar.json");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

exports.run = async (client, message, args, perms) => {
  const isim = args.slice(0).join(" ");
  const bakiye = await db.fetch(`bakiyecdare-${message.author.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumuk4h1n-${message.author.id}`);
  const hesapismi = await db.fetch(`hesapismik4h1n-${message.author.id}`);

  if (hesapdurumu)
    return message.channel.send(
      `Bir hesabınız bulunmakta. Geçerli hesabınızın bilgilerini öğrenmek için: \n\`${client.k4h1n.prefix}param\``
    );
  if (hesapismi)
    return message.channel.send(
      `Bir hesabınız bulunmakta. Geçerli hesabınızın bilgilerini öğrenmek için: \n\`${client.k4h1n.prefix}param\``
    );
  if (!isim)
    return message.channel.send(
      `Bir isim girmelisiniz. Doğru Kullanım;\n\`${client.k4h1n.prefix}hesap-oluştur <hesap ismi>\``
    );
  if (!hesapdurumu) {
    if (!hesapismi) {
      db.set(`hesapdurumuk4h1n-${message.author.id}`, "aktif");
      message.channel.send("Hesabınız aktif edildi İyi Günler!");
      if (client.k4h1n.rastgelepara == true) {
        db.set(`hesapismik4h1n-${message.author.id}`, isim);
        const yıl = new Date().getFullYear();
        const ay = new Date().getDate();
        const gün = new Date().getMonth();
        db.set(`hesaptarihiçdayreyıl-${message.author.id}`, yıl);
        db.set(`hesaptarihiçdayreay-${message.author.id}`, ay);
        db.set(`hesaptarihiçdayregün-${message.author.id}`, gün);
        const randomizer = getRandomInt(
          client.k4h1n.minpara,
          client.k4h1n.maxpara
        );
        db.add(`bakiyecdare-${message.author.id}`, randomizer);
        message.channel.send(
          `Başlangıç parası rastgele olarak **${randomizer} ${client.k4h1n.parabirimi}** hesabınıza yatırıldı!`
        );
      } else {
        if (client.k4h1n.rastgelepara == false) {
          db.set(`hesapismik4h1n-${message.author.id}`, isim);
          const yıl = new Date().getFullYear();
          const ay = new Date().getDate();
          const gün = new Date().getMonth();
          db.set(`hesaptarihiçdayreyıl-${message.author.id}`, yıl);
          db.set(`hesaptarihiçdayreay-${message.author.id}`, ay);
          db.set(`hesaptarihiçdayregün-${message.author.id}`, gün);
          db.add(
            `bakiyecdare-${message.author.id}`,
            client.k4h1n.başlangıçparası
          );
          message.channel.send(
            `Başlangıç parası olarak **${client.k4h1n.başlangıçparası} ${client.k4h1n.parabirimi}** hesabınıza yatırıldı!`
          );
        }
      }
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hesap"],
  permLevel: 0,
  katagori: "Ekonomi"
};
exports.help = {
  name: "hesap-oluştur",
  description: "Bakiyenizi gösterir.",
  usage: "cüzdan <@kullanıcı>"
};
