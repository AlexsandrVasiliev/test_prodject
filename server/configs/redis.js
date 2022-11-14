const redis = require("redis");
const glob = require('glob');
const Promise = require('bluebird');

let client = redis.createClient({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: process.env.REDIS_PORT || "6379",
  password: process.env.REDIS_PASSWORD
});

client.on("error", function(error) {
  console.error(error);
});


client = Promise.promisifyAll(client);

const definedModels = glob.sync('server/dao/redis-models/*.js');

definedModels.forEach((path) => {
    require(`../dao/redis-models/${path.split('/')[3]}`)(client);
  }
);

module.exports = client;