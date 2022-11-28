const os = require('os');
console.log(`Free memory: ${os.freemem()}`);
console.log(`Total memorey: ${os.totalmem()}`);

const fs = require(`fs`);
const file = fs.readdirSync(`./`);
console.log(`[sync] ${file}`);


fs.readdir('./',(err,file) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(`[async]Free memory ${file}`);
    }

});

console.log("between sync to async");