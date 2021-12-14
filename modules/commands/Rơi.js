const fs = require("fs");
module.exports.config = {
name: "Rơi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DW",
	description: "Rơi",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Rơi")==0 || (event.body.indexOf("rơi")==0)) {
		var msg = {
				body: "-Rơi - GoAllDay",
				attachment: fs.createReadStream(__dirname + `/noprefix/roi.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}