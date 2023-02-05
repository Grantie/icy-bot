const { EmbedBuilder } = require("discord.js");
module.exports = client => {
    client.on("messageCreate", (message) => checkMsg(message));
    client.on("messageUpdate", (oldMessage, newMessage) => checkMsg(newMessage));

    function checkMsg(msg) {
        if (msg.author.bot) return false;
        if (msg.author.id !== "874730179468079159" && msg.author.id !== "774014708159610880") {
            const blocked = ["https://", "http://", "discord.gg/"];

            for (let i = 0; i < blocked.length; i++) {
                var checkWord = blocked[i];

                if (msg.content.toLowerCase().includes(checkWord)) {
                    msg.delete();
                    var embed = new EmbedBuilder()
                        .setColor("ff0000")
                        .setDescription(`Please do not send links ${msg.author.username}.`)
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
}