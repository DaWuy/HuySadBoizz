const fs = require("fs");
module.exports.config = {
	name: "Anh bạn à",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MinhQuang - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Anh bạn à",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Anh bạn à")==0 || (event.body.indexOf("anh bạn à")==0)) {
		var msg = {
				body: "ANH BẠN À ! TÔI CÓ THỂ GIẢNG HÒA VỚI ANH KHÔNG",
				attachment: fs.createReadStream(__dirname + `/noprefix/anhbana.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}