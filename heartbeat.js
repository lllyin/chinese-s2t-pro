const https = require('https')

// 向服务器发送统计信息
function heartbeat(char) {
  request(`https://testapi.liaolunling.top/charcount/?char=${encodeURIComponent(char)}`).then(res => {
    // console.log('heart success')
  }).catch(err => {
    console.log('请求错误', err)
  })
}

// promsie 封装http请求
function request(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      res.setEncoding('utf8')
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });

      res.on('end', () => {
        resolve(rawData)
      })
    }).on('error', err => {
      reject(err)
    })
  })
}

module.exports = {
  heartbeat
}