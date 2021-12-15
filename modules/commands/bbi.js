const fs = require("fs");
module.exports.config = {
	name: "bbi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "bbi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bbi")==0 || (event.body.indexOf("Bbi")==0)) {
		var msg = {
				body: "Bae em là ai :3",
				attachment: fs.createReadStream(__dirname + `/noprefix/bbi.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}