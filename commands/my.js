const { MessageEmbed } = require('discord.js');
const userData = require('../data/users.json');

module.exports = {
    name: 'my',
    description: 'Displays your WoW balance',
    execute(message, args) {
        const userId = message.author.id;
        const userCowoncy = userData[userId] ? userData[userId].cowoncy : 0;

        const embed = new MessageEmbed()
            .setColor('#ffcc00')
            .setTitle('My WoW Balance')
            .setDescription(`You have ${userCowoncy} earl 🐮`);

        message.channel.send({ embeds: [embed] });
    },
};
