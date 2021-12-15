const fs = require("fs");
module.exports.config = {
	name: "Konodioda",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Konodioda",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Konodioda")==0 || (event.body.indexOf("konodioda")==0)) {
		var msg = {
				body: "Hoho",
				attachment: fs.createReadStream(__dirname + `/noprefix/konodioda.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}