const { EmbedBuilder, Embed } = require("discord.js");
module.exports = client => {
    const noPingRole = "1039264527939817473";
    client.on("messageCreate", (message) => {
        if (message.author.bot) return false;
        var users = message.mentions.users;
        var userIds = Array.from(users.keys());

        var deleteMessage = false;

        for (let i = 0; i < userIds.length; i++) {
            var userId = userIds[i];
            if (userId == message.author.id) return false;
            var member = message.guild.members.cache.get(userId);
            var hasRole = member.roles.cache.some(r => r.id === noPingRole);
            if (hasRole == true) {
                deleteMessage = true;
            }
        }

        if (deleteMessage == true) {
            message.delete();
            var embed = new EmbedBuilder()
                .setColor("ff0000")
                .setDescription(`A user that you pinged has pings off. Please do not ping them ${message.author.username}!`)
            message.channel.send({
                embeds: [embed],
                content: `<@${message.author.id}>`,
            }).then((sentMsg) => {
                setTimeout(() => {
                    sentMsg.delete();
                }, 7 * 1000);
            });
        }
    });
};