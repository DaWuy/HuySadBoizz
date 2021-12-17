const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "choiless",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "huy hoàng và hoàng",
  description: "chơi less Người Bạn Muốn",
  commandCategory: "Hình Ảnh",
  usages: "choiless",
  cooldowns: 5,
  dependencies: {
        "fs": "",
        "axios": "",
    "request": ""
    }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                 if (args.join().indexOf('@') !== -1)
        var link = [
          "https://imgur.com/j0xMyKS.png",
             ];
   var callback = () => api.sendMessage({body:` Đã Không Cưng 🤭`
  ,attachment: fs.createReadStream(__dirname + "/cache/choiless.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/choiless.png"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/choiless.png")).on("close",() => callback());
   };