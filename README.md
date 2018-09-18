# chinese-s2t-pro  [![NPM version](https://img.shields.io/npm/v/chinese-s2t-pro.svg?style=flat)](https://www.npmjs.com/package/chinese-s2t-pro)

## demo
https://demo.liaolunling.top/s2t/dist/index.html

# 介绍

中文简繁体互相转换

# 安装

```shell
npm install chinese-s2t-pro
```
或者

```shell
yarn add chinese-s2t-pro
```

# 使用方法

#### 简体转繁体

```js
const {simpleChar2TC, simpleLine2TL } = require('chinese-s2t-pro')
//单个汉字转换成繁体
simpleChar2TC('云');
//雲

//整句、整篇汉字转繁体
simpleLine2TL('曾经沧海难为水，除去巫山不是云');
//  曾經滄海難為水，除去巫山不是雲

```

#### 繁体转简体
```js
莫着急，马上就好
```


