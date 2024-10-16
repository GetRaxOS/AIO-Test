const { EmbedBuilder } = require('discord.js');
const lang = require('../../events/loadLanguage');

module.exports = {
    name: 'howgay',
    description: lang.howgayDescription,
    execute(message, args) {
        var result = Math.ceil(Math.random() * 101);

        const embed = new EmbedBuilder()
            .setTitle(lang.howgayTitle)
            .setDescription(`${lang.howgayDescriptionText} ${result}% gay.`)
            .setColor('#ff69b4');

        message.reply({ embeds: [embed] });
    },
};
