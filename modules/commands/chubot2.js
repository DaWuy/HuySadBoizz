﻿const fs = require("fs");
module.exports.config = {
	name: "chubot2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "chủ bot tên gì",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Chủ bot tên gì")==0 || (event.body.indexOf("chủ bot tên gì")==0 || (event.body.index0f("Tên chủ bot")==0 || (event.body.index0f("tên chủ bot")==0)))) {
		var msg = {
				body: "Cậu chủ tên là Trần Nguyễn Gia Huy, hay còn gọi là DaWuy :3",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}