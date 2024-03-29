const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'about',
	description: 'shows lots of cool information about the bot.',
	usage: '',

	permissions: [],
	ownerOnly: false,
	guildOnly: true,

	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('Shows lots of cool information about the bot!'),

	error: false,
	execute: ({ interaction, client }) => {

		const servers = client.guilds.cache.size;
		const users = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);

		const uptime = `${Math.floor(client.uptime / 86400000)}d ${Math.floor(client.uptime / 3600000) % 24}h ${Math.floor(client.uptime / 60000) % 60}m ${Math.floor(client.uptime / 1000) % 60}s`;

		const embed = new EmbedBuilder()
			.setTitle('My Information')
			.setColor('Random')
			.setDescription(`Hey, I'm **${client.user.tag}**! My prefix is: \`/\`.`)
			.addFields(

				{ name: '**Total Servers:**', value: `${servers}`, inline: true },
				{ name: '**Total Users:**', value: `${users}`, inline: true },
				{ name: '**Total Commands:**', value: '24', inline: true },

				{ name: '**Version:**', value: '4.6.0', inline: true },
				{ name: '**Uptime:**', value: `${uptime}`, inline: true },
				{ name: '**Birthday:**', value: '18/07/2020', inline: true },

				{ name: '**Developers:**', value: '[Bagel#1475](https://github.com/bagelwastaken)\n**[ThatsLiamS#6950](https://liamskinner.co.uk)**', inline: true },

			)
			.setFooter({ text: 'Do \'/help\' to get started' });


		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setStyle(ButtonStyle.Link).setLabel('Support Server').setURL('https://dsc.gg/kekbot'),
				new ButtonBuilder()
					.setStyle(ButtonStyle.Link).setLabel('Invite the bot!').setURL('https://dsc.gg/kekinv'),
				new ButtonBuilder()
					.setStyle(ButtonStyle.Link).setLabel('Website').setURL('https://www.kekbot.cf'),

			);

		interaction.followUp({ embeds: [embed], components: [row], ephemeral: false });

	},
};
