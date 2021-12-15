const fs = require("fs");
module.exports.config = {
	name: "gps",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "gps",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Gps")==0 || (event.body.indexOf("gps")==0)) {
		var msg = {
				body: "Em có phải là Gps",
				attachment: fs.createReadStream(__dirname + `/noprefix/gps.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}