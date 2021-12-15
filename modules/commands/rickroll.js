const fs = require("fs");
module.exports.config = {
	name: "rickroll",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Rickroll",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("rickroll")==0 || (event.body.indexOf("Rickroll")==0)) {
		var msg = {
				body: "Mày đã bị rickroll và supperidol",
				attachment: fs.createReadStream(__dirname + `/noprefix/rickroll.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}