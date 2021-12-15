const fs = require("fs");
module.exports.config = {
name: "yamate",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "yamete",
	commandCategory: "Không cần dấu lệnh",
	usages: "yamate",
	cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yamate")==0 || (event.body.indexOf("Yamate")==0)) {
		var msg = {
				attachment: fs.createReadStream(__dirname + `/noprefix/yamate.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
