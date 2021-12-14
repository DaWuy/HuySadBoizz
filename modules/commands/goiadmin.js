module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Không cần dấu lệnh",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100013953037154") {
    var aid = ["100013953037154"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag Admin có gì ko🙂?","Sao?? Làm ơn nhắn qua mess hoặc zalo để liên hệ cậu chủ!!","Sao gọi chủ tôi có việc gì?","Hiện cậu chủ tôi đang bận hãy sử dụng callad để liên hệ","Hãy dùng lệnh ad hoặc adm để biết thông tin liên hệ chủ tôi","Tag nữa ăn đấm","Tag làm gì?","Sao? Tag có việc gì?","Gọi anh ấy có việc gì?","Thích tag ko :)","Tag gì lắm vậy? Bộ ko cho chủ tao xin phút gây bình yên à?","Sao tag có việc gì ngồi xuống uống tách trà tâm sự","Huy  đang bận ? Có chi ko?","Hiện tại ông chủ đang bận, có gì để lại tin nhắn qua người đó !!","Huy bận rùi có gì nói với tui nè "];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }