const dns = require("node:dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI)
console.log(`database is connected......🔥`);
}

module.exports=connectDB