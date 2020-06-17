---
title: vueでaxiosを使用した際のCORSエラー対応
date: "2020-06-18T12:46:37.121Z"
description: axiosで通信した際にプラウザ側でCORSエラーとなってしまう対応です
tags: ["vue", "cors", "axios"]
hero: vue.png
---

## 概要

とあるデモサイトをパクって作ってたところ、axiosで通信する部分があり<br>
そのまま実装して通信したらCORSエラーとなってしまったため<br>
その際の対応備忘録です。
<br>
<br>

## 内容

率直にいうとproxyを使用する回避策でいけました。
以下手順です。

<br>
<br>

## vue.config.jsファイル作成

vueプロジェクト直下(root直下)にvue.config.jsの名前でファイルを作成してください

```
root
├── node_modules
├── public
├── src
.
.
.
├── vue.config.js
```

## proxy設定を記述

通信したいOriginをtargetに設定するってことだけ覚えておけばOKです。
(http\://xxx.co.jp/v2...に対して通信したいならtargetはhttp\://xxx.co.jp)

```javascript
module.exports = {
    devServer: {
      proxy: {
        "/api/": {
          target: "http://xxx.co.jp/",
          pathRewrite: {'^/api/': ''}
          //これでapiが取り除かれる
        }
      }
    }
  };
```

```javascript
 axios.get(`/api/v2/...`);
```

## 疑問点
やってて思ったのは
+ main.jsにbaseurl記述してる場合って(自分はCORS引っかかった)どうやるの -> なんでぇ!?

ワカルカタ　ツイッター　マッテマス