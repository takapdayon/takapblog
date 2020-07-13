---
title: swiftのdelegateが何故必要か
date: "2020-07-13T12:46:37.121Z"
description: swiftのdelegateを使用する機会があり、その際の知見をまとめたものです。
tags: ["swift", "delegate", "ios"]
hero: vue.png
---

## 概要

swiftをお仕事で最近触れ始めたのですが、swiftを学習している中でどうしてもdelegateの役割が
しっくりこなく、理解できないままでいました(確かにfatviewcontrollerならいらない気がする...)
何故必要になってくるのかに焦点を当て、書いていきたいと思います。


## 何故必要?
先に結論を言っちゃうと、密結合にしないためです(密です!)
かつ、再利用できるviewを部品として作れることです
delegateは、オブジェクト指向の依存性逆転の原則の考え方を用いています

依存性逆転の原則(wikiより)
>上位レベルのモジュールは下位レベルのモジュールに依存すべきではない。両方とも抽象(abstractions)に依存すべきである。

(このお話を社内のslackでした際、なんか哲学みたいだねって話になった...w)

<br>
<br>
自分も実際に使用するまでいまいち理解できなかったのですが
今では他言語でも使用されているDIと同じものという理解でいます。


```swift
protocol TestDelegate {
  func test()
}

class TestView: UIView {

  var delegate: TestDelegate
  
}

```