const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
const ms = require("ms");
const db = require("quick.db");
const DBL = require("dblapi.js");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

exports.run = async (client, message, args) => {
  let timeout = 86400000; //bunu ellemeyin 24 saat

  let daily = await db.fetch(`günlükkullanımgodareçdare-${message.author.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));

    message.channel.send(
      `Günlük ödülünü tekrar alabilmek için ** 24 saat ** olmasını beklemelisin!`
    );
  } else {
    if (client.k4h1n.dbloy == false) {
      db.set(`günlükkullanımgodareçdare-${message.author.id}`, Date.now());
      if (client.k4h1n.rastgelepara == true) {
        const randomizer = getRandomInt(
          client.k4h1n.minpara,
          client.k4h1n.maxpara
        );
        db.add(`bakiyeasreaper-${message.author.id}`, randomizer);
        let para1 = new Discord.MessageEmbed()
          .setColor(client.k4h1n.renk)
          .setDescription(`**Günlük Para**`)
          .addField(
            `Aldığınız Miktar;`,
            randomizer + ` ${client.k4h1n.parabirimi}`
          );
        message.channel.send(para1);
      } else {
        if (client.k4h1n.rastgelepara == false) {
          db.add(
            `bakiyeasreaper-${message.author.id}`,
            client.k4h1n.günlükpara
          );
          let para1 = new Discord.MessageEmbed()
            .setColor(client.k4h1n.renk)
            .setDescription(`**Günlük Para**`)
            .addField(
              `Aldığınız Miktar;`,
              client.k4h1n.günlükpara + ` ${client.k4h1n.parabirimi}`
            );
          message.channel.send(para1);
        }
      }
    } else {
      if (client.k4h1n.dbloy == true) {
        const dbl = new DBL(client.k4h1n.dblkey, client);
        dbl.hasVoted(message.author.id).then(voted => {
          if (voted) {
            db.set(
              `günlükkullanımgodareçdare-${message.author.id}`,
              Date.now()
            );
            if (client.k4h1n.rastgelepara == true) {
              const randomizer = getRandomInt(
                client.k4h1n.minpara,
                client.k4h1n.maxpara
              );
              db.add(`bakiyecdare-${message.author.id}`, randomizer);
              let para1 = new Discord.MessageEmbed()
                .setColor(client.k4h1n.renk)
                .setDescription(`**Günlük Para**`)
                .addField(
                  `Aldığınız Miktar;`,
                  randomizer + ` ${client.k4h1n.parabirimi}`
                );
              message.channel.send(para1);
            } else {
              if (client.k4h1n.rastgelepara == false) {
                db.add(
                  `bakiyecdare-${message.author.id}`,
                  client.k4h1n.günlükpara
                );
                let para1 = new Discord.MessageEmbed()
                  .setColor(client.k4h1n.renk)
                  .setDescription(`**Günlük Para**`)
                  .addField(
                    `Aldığınız Miktar;`,
                    client.k4h1n.günlükpara + ` ${client.k4h1n.parabirimi}`
                  );
                message.channel.send(para1);
              }
            }
          } else {
            return message.channel.send(`${client.k4h1n.dblmsj}`);
          }
        });
      }
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["günlük"],
  permLevel: 0,
  katagori: "Ekonomi"
};

exports.help = {
  name: "günlükpara",
  description: "murat",
  usage: "murat"
};
