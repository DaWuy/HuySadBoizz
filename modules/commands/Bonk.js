const fs = require("fs");
module.exports.config = {
	name: "Bonk",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Bonk",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bonk")==0 || (event.body.indexOf("bonk")==0)) {
		var msg = {
				body: "Gõ chết mẹ mày!",
				attachment: fs.createReadStream(__dirname + `/noprefix/bonk.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}