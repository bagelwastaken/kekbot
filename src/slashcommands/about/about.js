import { MessageEmbed } from 'discord.js';

export const name = 'about';
export const description = 'shows lots of cool information about the bot.';
export const args = 0;
export const permissions = [];
export const execute = ({ interaction, args, prefix, client }) => {

	const servers = client.guilds.cache.size;
	const users = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);

	const uptime = `${Math.floor(client.uptime / 86400000)}d ${Math.floor(client.uptime / 3600000) % 24}h ${Math.floor(client.uptime / 60000) % 60}m ${Math.floor(client.uptime / 1000) % 60}s`;

	const embed = new MessageEmbed()
		.setTitle('My Information')
		.setColor('RANDOM')
		.setDescription(`Hey, I'm **${client.user.tag}**! My prefix is: \`kek\`.`)
		.addFields(

			{ name: '**Total Servers:**', value: `${servers}`, inline: true },
			{ name: '**Total Users:**', value: `${users}`, inline: true },
			{ name: '**Total Commands:**', value: '1', inline: true },

			{ name: '**Version:**', value: `3.8.1`, inline: true },
			{ name: '**Uptime:**', value: `${uptime}`, inline: true },
			{ name: '**Birthday:**', value: '18/06/2020', inline: true },

			{ name: '**Developers:**', value: '[Bagel#1475](https://github.com/bagelwastaken)\n**[ThatsLiamS#6950](https://github.com/ThatsLiamS)**', inline: true },

		)

	interaction.reply({ embeds: [embed] });

};