const os = require("os");
const user = os.userInfo();
console.log(user);
console.log(os.uptime());

const items = {
       name: os.type(),
       release : os.release(),
       totalmem :os.totalmem(),
       freemem :os.freemem()
};
console.log(items);





