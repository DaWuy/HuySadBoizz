  ﻿module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.3",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Bot của DW <3" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`» 𝙆𝙀𝙏 𝙉𝙊𝙄 𝙏𝙃𝘼𝙉𝙃 𝘾𝙊𝙉𝙂«\n\n◆━━━━━━━━━━━━━◆\n⚠𝓛𝓾𝓪̣̂𝓽 𝓑𝓸𝓽 𝓓𝓦\n1. Cấm spam nhiều lệnh trong 1 phút\n2. Cấm 2 bot trong 1 box (=ban)\n3. Hạn chế menu và help (nên copy lại)\n4. Thêm bot ko xin (=ban)\n5. Đừng có mà chửi bot sẽ bị ban vĩnh viễn ☠\n6. Nhập Luật bot để xem luật của bot nhé lắp não vào mà đọc !
\n◆━━━━━━━━━━━━━◆\n📝Nhập /ad sẽ có thông tin của adminbot\n📌Liên hệ khi cần thiết\n⚜QTV có thể dùng '/help rule' để xem hướng dẫn và set bảng luật box\n⚜Thành viên dùng '/rule' để xem luật box của mình\n◆━━━━━━━━━━━━━◆\nĐỌC KĨ RỒI SỬ DỤNG NHÉ. Thank you for using\nXin cảm ơn đã đọc...UwU\n© Admin: Trần Nguyễn Gia Huy`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `join.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.allUserID.push(id);
					logger(global.getText("handleCreateDatabase", "newUser", id), "[ DATABASE ]");
				}
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "🦋Hi cậu {name}.\nChào mừng cậu đã đến với {threadName}.\n🍁Từ nay {name} sẽ là thành viên sáng giá thứ {soThanhVien} của nhóm" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'Các cậu' : 'Cậu')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
