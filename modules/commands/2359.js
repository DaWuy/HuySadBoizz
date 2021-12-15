const fs = require("fs");
module.exports.config = {
	name: "2359",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "2359",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("2359")==0 || (event.body.indexOf("2359")==0)) {
		var msg = {
				body: "2 3 5 9",
				attachment: fs.createReadStream(__dirname + `/noprefix/2359.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}