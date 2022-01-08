const { Discord, MessageEmbed ,Client } = require('discord.js');
const client = new Client();
const { MessageButton } = require('discord-buttons')(client);
const moment = require('moment');
const cfg = require('./ayarlar.json');

client.on('ready', async => {
  client.user.setPresence({ activity: { name: "Arcenio ❤️ Valentina" }, status: "online" });
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
 })

client.on("message", (message) => {


if (message.content !== "!!!buttonn" || message.author.id === cfg.bot.BotOwner || message.author.bot) return;

// BUTONLAR
//--------------------------------\\

// Çekilis Katılımcısı
let CekilisKatılımcı = new MessageButton()
  .setStyle('green') // Rengi ayarlayabilirsiniz.
  .setLabel('🎉 Çekiliş Katılımcısı') // Adını Değiştirebilirsiniz.
  .setID('CekilisKatılımcı'); // Elleme Bunu

// Etkinlik Katılımcı
let EtkinlikKatılımcı = new MessageButton()
  .setStyle('red') // Rengi ayarlayabilirsiniz.
  .setLabel('🎉Etkinlik Katılımcısı') // Adını Değiştirebilirsiniz.
  .setID('EtkinlikKatılımcı'); // Elleme Bunu


//--------------------------------\\

/*let XpeawEmbed = new MessageEmbed()
.setAuthor(Arcenio")
.setColor("RANDOM")
.setDescription(`

Aşağıdaki menüden kendinize oyun seçebilirsiniz. Bir oyunun rolünü almak için o butona tıklayın.

\`>\` <@&${cfg.roles.vkrole}> 

\`>\` <@&${cfg.roles.dc}> 

\`>\` <@&${cfg.roles.gartic}> 


`)
.setFooter(Arcenio`)
.setTimestamp()
message.channel.send({ buttons: 
  [
    Vk, 
    Dc, 
    Gartic
  ], 
  embed: XpeawEmbed 
}); */


message.channel.send(`

\`Kayıtlı , kayıtsız olarak hepiniz bu kanalı görebilmektesiniz.Sunucumuzda everyone here atılmayacağından dolayı sunucunun başında tüm herkesin alabileceği rollerimizi mutlaka  tıklayarak almanız sizin için de bizim için de mükemmel olacaktır!\`

<@&914513779587428399> **: Rolünü alırsanız , tüm çekilişlerimizden haberdar olacak ve boş boş etiketler yemeyeceksiniz. @everyone veya @here kullanmayacağımız için çekilişlerde çekiliş katılımcısı alımını konserler ve etkinlikler için tüm herkese açtık!Kayıtsız olsanız bile mutlaka alın teşekkürler.**

<@&914513779587428398> \`: Konserler ve etkinliklerden haberdar olmak için alınan rol \`


<@&914513779587428398>  **: Bu rolümüzü çekiliş rolünü almasanız bile almalısınız çünkü konserler ve diğer turnuva , yarışmalar için  ever here sık sık atmayacağız o yüzden çekiliş katılımcısı almasanız bile** <@&914513779587428398> **rolünü mutlaka üstünüze almanızı şiddetle önemle tavsiye ederim.Hepinize eğlenceli vakitler,iyi günler geçirmeniz dileğiyle ** ||@everyone||

\`>\` <@&${cfg.roles.CekilisKatılımcı}>

\`>\` <@&${cfg.roles.EtkinlikKatılımcı}>

`, { 
  buttons: [ CekilisKatılımcı, EtkinlikKatılımcı ]
});

});

client.on('clickButton', async (button) => {
  // Çekilis Katılımcısı
    if (button.id === 'CekilisKatılımcı') {
        if (button.clicker.member.roles.cache.get(cfg.roles.CekilisKatılımcı)) {
            await button.clicker.member.roles.remove(cfg.roles.CekilisKatılımcı)
            await button.think(true);
            await button.reply.edit("Cekilis Katılımcı Rolü Üzerinizden Alındı!")
        } else {
            await button.clicker.member.roles.add(cfg.roles.CekilisKatılımcı)
            await button.think(true);
            await button.reply.edit("Cekilis Katılımcı Rolü Üzerinize Verildi!")
        }
    }

  // Etkinlik Katılımcı
    if (button.id === 'EtkinlikKatılımcı') {
        if (button.clicker.member.roles.cache.get(cfg.roles.EtkinlikKatılımcı)) {
            await button.clicker.member.roles.remove(cfg.roles.EtkinlikKatılımcı)
            await button.think(true);
            await button.reply.edit(`Etkinlik Katılımcı Rolü Üzerinizden Alındı!`)
        } else {
            await button.clicker.member.roles.add(cfg.roles.EtkinlikKatılımcı)
            await button.think(true);
            await button.reply.edit(`Etkinlik Katılımcı Rolü Üzerinize Verildi!`)
        }

    }
 
});


client.login(cfg.bot.token);