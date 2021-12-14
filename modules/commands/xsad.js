const fs = require("fs");
module.exports.config = {
name: "S",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DW",
	description: "S A D",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("xsad")==0 || (event.body.indexOf("Xsad")==0)) {
		var msg = {
				body: "S A D - XXXTENTACION",
				attachment: fs.createReadStream(__dirname + `/noprefix/sadxx.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}