const fs = require("fs");
module.exports.config = {
	name: "Chủ bot là ai",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Chủ bot là ai",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Chủ bot là ai")==0 || (event.body.indexOf("chủ bot là ai")==0 || (event.body.inedx0f("ai là chủ bot")==0 || (event.body.index0f("Ai là chủ bot")==0)))) {
		var msg = {
				body: "Là cậu chủ Trần Nguyễn Gia Huy, hay còn được gọi là DaWuy đó ạ :3",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}