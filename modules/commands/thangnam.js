const fs = require("fs");
module.exports.config = {
	name: "Thangnam",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Thangnam",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Tháng năm")==0 || (event.body.indexOf("tháng năm")==0)) {
		var msg = {
				body: "Cao tới mây",
				attachment: fs.createReadStream(__dirname + `/noprefix/thangnam.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}