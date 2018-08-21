const { simpleChar2TC, simpleLine2TL } = require('./core')

// 测试
console.log('简体转繁体', simpleLine2TL('曾经沧海难为水，除去巫山不是云'))


module.exports = {
  simpleChar2TC,
  simpleLine2TL
}