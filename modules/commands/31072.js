const fs = require("fs");
module.exports.config = {
	name: "31072",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "31072",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("31072")==0 || (event.body.indexOf("31072")==0)) {
		var msg = {
				body: "3 1 0 7 - Phần 2 ~~",
				attachment: fs.createReadStream(__dirname + `/noprefix/31072.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}