const os = require('os');
// info about the current user
const user =os.userInfo();
console.log(user);

// method returns the system uptime in seconds :
console.log(`system uptime in ${os.uptime()}, seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freememory:os.freemem(),
}
console.log(currentOS);

