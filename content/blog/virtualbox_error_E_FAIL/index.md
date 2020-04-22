---
title: virtualboxのNot in a hypervisor partition (HVP=0)の解決法
date: "2020-04-22T23:46:37.121Z"
description: なんか、なんでか度々virtualbox起動するとなるんですよねー・・・
tags: ["atcoder","python"]
hero: virtualbox.jpg
---

## 問題

あー、blog記事書くために仮想環境立ち上げて、docker立ち上げてやるかぁ
とか思って起動したんすよvirtualbox<br>
そしたらこれ
>Not in a hypervisor partition (HVP=0) <br>
>AMD-V is disabled in the BIOS

あーまたか、またこれか(n回目)
なんでかちょくちょくなるんですよね今日はその解決法2つ挙げたいと思います。
virtualboxをちょいぶりくらいに

## 解決法

解決法というか、確認してほしい点は2つ
1. BIOSのVirtualization(AMDはSVM)がdisableになってないか
2. hyper-Vが有効になっていないか

僕の場合は大体1ですね、なんでか勝手にdisableに変わっちゃうんですよね

