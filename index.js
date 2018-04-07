const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NDMyMjgxNjc0MjkwODIzMTcw.DarBUw.3jCyY_Veo2k6rozlK65t1rKjwDE');

bot.on('message', message => {
    if (message.content.startsWith('rola')){
        message.channel.send('pong!');
    }

    
        if (message.content.startsWith('!ip')){
            message.channel.send('veja em #info-servidor');
        }

        
        if (message.content.startsWith('!Olá')){
            message.channel.send('Olá, veja as regras e fique por dentro das novides do nosso Servidor');
        }

        
        if (message.content.startsWith('Oi Samara')){
            message.channel.send('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH');
        }

        
        if (message.content.startsWith('Qual ip do servidor?')){
            message.channel.send('eu que vou saber? veja no menu ali do lado.');
        }
    


});