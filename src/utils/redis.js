const redis = require('redis');
const url = require('url');

const o = url.parse(process.env.REDIS_URL);
const client = redis.createClient(o.port, o.hostname);
const auth = o.auth.split(':');
if (auth) client.auth(auth[1]);

module.exports = (fn, ...args) =>
  new Promise((resolve, reject) =>
    client[fn](...args, (err, ret) => {
      if (err) return reject(err);
      resolve(ret);
    })
  );
