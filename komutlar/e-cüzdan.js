
const Discord = require("discord.js");
const db = require("quick.db");
var ayarlar = require("../ayarlar.json");
const Canvas = require('canvas')
    , Image = Canvas.Image
    , Font = Canvas.Font
    , path = require('path');
const request = require('node-superfetch');

exports.run = async (client, message, args) => {
  let member = message.author;
  let member2 = message.mentions.members.first()
  let kllanç = message.mentions.users.first() || message.author;
  const bakiye = await db.fetch(`bakiyecdare-${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumuk4h1n-${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismik4h1n-${kllanç.id}`);
if(!member2) return message.channel.send("Bir Kullanıcı Etiketlermisin.")
  if (!hesapdurumu) {
    if (args[0])
      return message.channel.send(
        `Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`
      );
    message.channel.reply(
      `İlk olarak hesap oluşturmalısın. ${client.k4h1n.prefix}hesap-oluştur <Hesap İsmi>`
    );
  } else {
    if (hesapdurumu) {
        const k4h1nembed = new Discord.MessageEmbed()
          .setColor(client.k4h1n.renk)
          .setDescription(
            `Hesap İsmi: ${hesapismi ? hesapismi : 'Bilinmiyor.'}\n Bakiye: **${bakiye}**`
          );
        message.channel.send(k4h1nembed);
      } else {
        if (hesapdurumu) {
          if (hesapismi) {
           
            const { createCanvas, loadImage } = require("canvas");
            const canvas = createCanvas(1092, 678);
            const ctx = canvas.getContext("2d");

            const background = await Canvas.loadImage(
              "https://cdn.discordapp.com/attachments/611466015582322700/668155571492356117/woxecredit.png"
            );
            ctx.drawImage(background , 0 ,0 , canvas.width , canvas.height);
            
            const avatar = await Canvas.loadImage(message.author.displayAvatarURL)
            ctx.drawImage(avatar , 500 , 200 , 250 , 250)
            
            ctx.font = '60px sans-serif';
            ctx.fillStyle = "BLACK";
            ctx.fillText(`${message.author.id}` , canvas.width / 5, 550 )
            
            ctx.font = '60px sans-serif';
            ctx.fillStyle = "BLACK";
            ctx.fillText(`Para: ${bakiye}` , canvas.width / 3.25, 650 )
            
            const attachment = new Discord.Attachment(
              canvas.toBuffer(),
              "Hoşgeldin.png"
            );
            
            message.channel.send(attachment)
          }
        }
      }
    
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  katagori: "Ekonomi"
};
exports.help = {
  name: "bakiye",
  description: "Bakiyenizi gösterir.",
  usage: "cüzdan <@kullanıcı>"
};
