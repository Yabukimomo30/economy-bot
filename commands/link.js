const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'link',
    description: 'Get the invite link for the bot',
    execute(message, args) {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Bot Invite Link')
            .setDescription('Click [here]( https://discord.gg/4vpJRCNvYA) to invite the bot to your server.');

        message.channel.send({ embeds: [embed] });
    },
};
