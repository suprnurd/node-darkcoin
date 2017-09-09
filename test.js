var chaincoin = require('./lib');
var settings = require('./settings')

var client = new chaincoin.Client({
  host: settings.host,
  port: settings.port,
  user: settings.user,
  pass: settings.pass
});

client.masternode('count', function(err, count){
  if (err) return console.log(err);
  console.log('Masternodes count:', count);
});
