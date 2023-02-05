const { EmbedBuilder } = require("discord.js");
module.exports = client => {
    client.on("messageCreate", (message) => checkMsg(message));
    client.on("messageUpdate", (oldMessage, newMessage) => checkMsg(newMessage));

    function checkMsg(msg) {
        const blockedWords = ["fuck", "bitch", "nigg", "shit", "dick"];

        for (let i = 0; i < blockedWords.length; i++) {
            var checkSwearWord = blockedWords[i];

            if (msg.content.toLowerCase().includes(checkSwearWord)) {
                msg.delete();
                var embed = new EmbedBuilder()
                    .setColor("ff0000")
                    .setDescription(`Please do not send messages with swear words ${msg.author.username}.`)
                msg.channel.send({
                    content: `<@${msg.author.id}>`,
                    embeds: [embed],
                }).then((sentMsg) => {
                    setTimeout(() => {
                        sentMsg.delete();
                    }, 7 * 1000);
                });
            }
        }
    }
}