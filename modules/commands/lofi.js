const fs = require("fs");
module.exports.config = {
	name: "Lofi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Lofi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Lofi")==0 || (event.body.indexOf("lofi")==0)) {
		var msg = {
				body: "Shiloh imaginaton",
				attachment: fs.createReadStream(__dirname + `/noprefix/lofi.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}