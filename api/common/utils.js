// 
const os = require('os');
const UTILS = {}

UTILS.getIPv4 = function() {
  var osType = os.type(); // 操作系统名字
  var network = os.networkInterfaces(); // 网络地址
  var netJson, netIP;

  switch(osType) {
    case 'Linux':
      netJson = network.en0;
      break
    case 'Darwin':
      netJson = network.en0;
      break
    case 'Windows_NT':
      netJson = network.WLAN;
      break
    default:
      return
  }
  
  for(var i = 0; i < netJson.length; i++) {
      var json = netJson[i];
      if(json.family == 'IPv4') {
          console.log('===LOG IP:'+json.address);
          netIP = json.address;
          break;
      }
  }
  return netIP;
}

module.exports = UTILS