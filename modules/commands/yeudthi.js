module.exports.config = {
    name: "yeudthi",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "DaWuy",
    description: "Những Câu Nói Của Gia Huy Dành Cho Dthi:3❤",
    commandCategory: "Khác",
    cooldowns: 1
};

module.exports.run = function ({ api, event }) {
    const data = ["Anh chỉ muốn nói là...Anh Yêu Em rất nhiều ( Dthi❤ )","Với thế giới, em có thể chỉ là một người, nhưng đối với anh,em là cả thế giới (Dthi❤)","Giới hạn hàm số là lim. Giới hạn của tớ là tim Dthi❤","Anh yêu Dthi còn nhiều hơn muối ở biển…","Chim thuộc về rừng, Dthi thuộc về Huy"
    ];
    return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
}