const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "choigay",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "huy hoàng và hoàng",
  description: "choigay Người Bạn Muốn",
  commandCategory: "Hình Ảnh",
  usages: "choigay",
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
          "https://imgur.com/NIwOz0h.png",
             ];
   var callback = () => api.sendMessage({body:`Chơi gay đã không cưng 🤭`
  ,attachment: fs.createReadStream(__dirname + "/cache/choigay.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/choigay.png"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/choigay.png")).on("close",() => callback());
   };