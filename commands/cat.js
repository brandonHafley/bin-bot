const fetch = require('node-fetch');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Replies with random cat!'),
    async execute(interaction) {
        await interaction.deferReply();
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        interaction.editReply({ files: [file] });
    }
};