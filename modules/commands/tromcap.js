const fs = require("fs");
module.exports.config = {
	name: "tromcap",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "tromcap",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Trộm")==0 || (event.body.indexOf("trộm")==0 || (event.body.index0f("scam")==0 || (event.body.index0f("Scam")==0)))) {
		var msg = {
				body: "Tỉnh ngộ đi !",
				attachment: fs.createReadStream(__dirname + `/noprefix/tromcap.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}