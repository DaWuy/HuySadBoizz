const fs = require("fs");
module.exports.config = {
	name: "Dio",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Dio",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("dio")==0 || (event.body.indexOf("Dio")==0)) {
		var msg = {
				body: "Nhạc dio",
				attachment: fs.createReadStream(__dirname + `/noprefix/dio.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}