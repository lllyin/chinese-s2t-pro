const { heartbeat } = require('./heartbeat')
const s2tJson = require('./s2tJson.js')

// 排除库，排除标点符号空格等等
const EXCLUDE_CHARS = {
  "，": "中文逗号",
  "。": "中文句号",
  "！": "中文感叹号",
  "：": "中文冒号"
};

// 单个简体字转繁体字
const simpleChar2TC = (function simpleChar2TC() {
  const cacheCharDic = {};
  return function (char) {
    if (!(typeof char === "string" && char.length === 1)) throw new Error('参数须是单个汉字')
    // 如果是排除库的字符，不转译
    if (EXCLUDE_CHARS[char]) {
      console.log('排除库', char)
      return char
    }
    heartbeat(char)
    if (cacheCharDic[char]) return cacheCharDic[char]
    if (s2tJson[char]) {
      return cacheCharDic[char] = s2tJson[char]
    } else {
      return char
    }
  }
})()

// 单行简体文本转繁体文本
const simpleLine2TL = (function simpleLine2TL() {
  const cacheLineDic = {}
  return function (line) {
    if (cacheLineDic[line]) return cacheLineDic[line]
    const TCLine = line.split(/\s*/).map(char => simpleChar2TC(char)).join('');
    return cacheLineDic[line] = TCLine
  }
})()


// 动态调频，记录每个字被查询次数，次数越多，优先级越高
function d() {
  // ... 待开发 
}



module.exports = {
  simpleChar2TC,
  simpleLine2TL
}

