const Discord = require("discord.js");
const bot = new Discord.Client();
bot.on('ready', () => {
  bot.user.setGame(` By FwQc .`);
  console.log('---------------');
  console.log('Desert Bot Is Online')
  console.log('---------------')
});


bot.on('message', message => {
    if (message.guild) return undefined;
    var roomid = "530225570047459338";
    var room = bot.channels.get(roomid);
    if (!room) return undefined;
    var emb = new Discord.RichEmbed()
    .setColor("#36393e")
    .setAuthor(message.author.username,message.author.displayAvatarURL)
    .setDescription(`**Message from ${message.author} in the bot dm**\n\`\`\`apache\nMessage: ${message.content}\`\`\``)
    .setThumbnail(message.author.displayAvatarURL)
    .setTimestamp();
    room.send(emb);
});


 const bannedwords2 = [

	"رابط الموقع",
	"موقع السكربتات"

  ];

bot.on('message', message => {
  if(bannedwords2.some(word => message.content.includes(word))) {
message.author.send("http://script.aba.ae/");
    message.delete()
    message.reply("  ارسلت لك الرابط خاص :ok_hand:     ").then(msg => {msg.delete(9000)});;
    }
}); 

 const bannedwords1 = [

	"موقع القرصان"

  ];

bot.on('message', message => {
  if(bannedwords1.some(word => message.content.includes(word))) {
message.author.send("https://qtatar.com/gpc/index.php");
    message.delete()
    message.reply("  ارسلت لك الرابط خاص :ok_hand:     ").then(msg => {msg.delete(9000)});;
    }
}); 

 const bannedwords0 = [

	"رابط المنتدى"

  ];

bot.on('message', message => {
  if(bannedwords0.some(word => message.content.includes(word))) {
message.author.send("http://script.aba.ae/members/");
    message.delete()
    message.reply("  ارسلت لك الرابط خاص :ok_hand:     ").then(msg => {msg.delete(9000)});;
    }
}); 


bot.on('message',msg=>{
    if(msg.content ==="!aim"){
        msg.reply(Math.floor(Math.random() * 300) + 130)
        msg.reply(Math.floor(Math.random() * 30) + 12)
    }
});

bot.login(process.env.Bot_Tokenc);
