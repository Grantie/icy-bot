const { CommandType } = require("wokcommands");

module.exports = {
  description: "Says pong, nothing much!",
  type: CommandType.BOTH,
  callback: () => {
    return {
      content: "Pong!",
    }
  },
}