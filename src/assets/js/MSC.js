
async function CheckServer() {
    const isReachable = require('is-reachable')
    const reached = await isReachable ('212.227.204.188:80')
    return reached
  }