const fs = require("fs");
module.exports.config = {
	name: "EDITN",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "EDITN",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("editn")==0 || (event.body.indexOf("EDITN")==0)) {
		var msg = {
				body: "XXXTENTACION - Everybody Dies In Their Nightmares (Audio)",
				attachment: fs.createReadStream(__dirname + `/noprefix/Everybody Dies In Their Nightmares.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}