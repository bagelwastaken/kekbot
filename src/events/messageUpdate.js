const { EmbedBuilder } = require('discord.js');
const GhostPing = require('discord.js-ghost-ping');

module.exports = {
	name: 'messageUpdate',
	once: false,

	execute: async (oldMessage, newMessage) => {

		/* Fetch Partial Messages */
		if (oldMessage?.partial) await oldMessage.fetch();
		if (newMessage?.partial) await newMessage.fetch();

		if (oldMessage?.author?.bot == true || oldMessage?.author?.bot) return false;

		/* Ghost Ping Detector */
		const res = GhostPing('messageUpdate', oldMessage, newMessage);
		if (res && res?.mentions) {
			const embed = new EmbedBuilder()
				.setTitle('Ghost Ping Detected')
				.setColor('#4CD4D9')
				.addFields(
					{ name: '__Who?__', value: `**Author:** ${res.author}\n**Channel:** ${res.channel}`, inline: true },
					{ name: '__Mentions__', value: `${res.mentions.join(' ')}!`, inline: true },
				)
				.setFooter({ text: 'Don\'t GhostPing, smh!' })
				.setTimestamp();

			newMessage.channel.send({ embeds: [embed] });
		}

	},
};
