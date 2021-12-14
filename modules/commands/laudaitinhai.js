const fs = require("fs");
module.exports.config = {
	name: "Lâu đài tình ái",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "Lâu đài tình ái của Dady Đàm :Đ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lâu đài tình ái")==0 || (event.body.indexOf("Lâu đài tình ái")==0)) {
		var msg = {
				body: "Bản lâu phai nhé :>",
				attachment: fs.createReadStream(__dirname + `/noprefix/laudaitinhai.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}