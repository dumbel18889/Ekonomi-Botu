const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');



exports.run = async (client, message, args) => {
  
  let transkllanç = message.mentions.users.first()
  if(!transkllanç) return message.channel.send("Lütfen Birini Etiketleyin.");
  let kllanç = message.author
  let para = args[1]
  if(transkllanç == kllanç) return message.channel.send(`Kendinize para gönderemezsiniz.`)
  if(transkllanç.bot == true) return message.channel.send(`Botlara para gönderemezsiniz.`)
  if(!transkllanç) return message.channel.send(`Bir kullanıcı girmelisiniz. Doğru Kullanım;\n\`${client.k4h1n.prefix}transfer @${client.user.tag} 50\``)
  if(!para) return message.channel.send(`Bir miktar girmelisiniz. Doğru Kullanım;\n\`${client.k4h1n.prefix}transfer @${client.user.tag} 50\``)
  const bakiye = await db.fetch(`bakiyecdare-${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumuk4h1n-${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismik4h1n-${kllanç.id}`);
  
  const transbakiye = await db.fetch(`bakiyecdare-${transkllanç.id}`);
  const transhesapdurumu = await db.fetch(`hesapdurumuk4h1n-${transkllanç.id}`);
  const transhesapismi = await db.fetch(`hesapismik4h1n-${transkllanç.id}`);
  
  if(!hesapdurumu) {
    message.reply(`İlk olarak hesap oluşturmalısın. ${client.k4h1n.prefix}hesap-oluştur <Hesap İsmi>`)
  } else {
    if(hesapdurumu) {
      if(!hesapismi) {
        message.reply(`İlk olarak hesap oluşturmalısın. ${client.k4h1n.prefix}hesap-oluştur <Hesap İsmi>`)
      } else {
        if(hesapdurumu) {
          if(hesapismi) {
            if(bakiye < para) return message.channel.send(`:warning: Paranız Yetersiz!`)
            if(!transhesapdurumu) return message.channel.send(`Transfer etmek istediğin kullanıcının bir hesabı bulunmamakta.`)
            if(transhesapdurumu) {
                db.add(`bakiyecdare-${message.author.id}`, -para)
                db.add(`bakiyecdare-${transkllanç.id}`, para)
                transkllanç.send(`${message.author.tag} adlı kullanıcı size \`${para} ${client.k4h1n.parabirimi}\` yolladı`)
                message.channel.send(`${transkllanç} adlı kullanıcıya başarıyla \`${para} ${client.k4h1n.parabirimi}\` yolladınız.`)
              }
          }
        }
      }
    }
  }
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['paragonder', 'paragönder', 'para-gonder', 'para-gönder'],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'transfer',
    description: 'Hesabınızdan başka bir hesaba para transferi yaparsınız.',
    usage: 'transfer <@kullanıcı>',
}
