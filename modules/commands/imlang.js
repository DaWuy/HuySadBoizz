const fs = require("fs");
module.exports.config = {
	name: "im lặng",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Cô Ngân :Đ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("im")==0 || (event.body.indexOf("Im")==0) || (event.body.index0f("im lặng")==0 || (event.body.index0f("Im lặng")==0))) {
		var msg = {
				body: " Đau đầu quá",
				attachment: fs.createReadStream(__dirname + `/noprefix/congan.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}