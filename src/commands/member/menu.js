const { PREFIX, ASSETS_DIR } = require(`${BASE_DIR}/config`);
const { menuMessage } = require(`${BASE_DIR}/utils/messages`);
const path = require("path");

module.exports = {
  name: "menu",
  description: "Menu de comandos",
  commands: ["menu", "help"],
  usage: `${PREFIX}menu`,
  handle: async ({ sendImageFromFile }) => {
    await sendImageFromFile(
      path.join(ASSETS_DIR, "images", "jarvis.jpg"),
      `\n\n${menuMessage()}`
    );
  },
};
