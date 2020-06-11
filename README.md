<div align="center">
 <h1> 导览 - 微信地图导览小程序 </h1>

[![GitHub license](https://img.shields.io/github/license/gxgk/school-map)](https://github.com/gxgk/school-map/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/gxgk/school-map)](https://github.com/gxgk/school-map/stargazers)
[![test](https://img.shields.io/badge/platform-微信小程序-green)]()

首款开源的微信地图导览小程序，仅需修改地图文件，就可以适配某一学校/景区，具有出色的用户体验。

***官网：https://www.gxgkcat.com***

☑️一键配置切换  ☑️地图路径规划  ☑️在线热修补

</div>

---

## 🤩预览

![导览](https://map.gxgkcat.com/%E6%A0%A1%E5%9B%AD%E5%AF%BC%E8%A7%88/Screenshot.jpg)
![二维码](https://map.gxgkcat.com/%E6%A0%A1%E5%9B%AD%E5%AF%BC%E8%A7%88/qrcode.jpg)

---
## 📝使用说明

1、项目根文件新建config.js文件，写入以下内容，并根据自身需求修改

```js
module.exports = {
  // 调试模式开关，调试模式下只调用本地数据
  debug: true,
  // 学校数据配置名称，学校英文缩写
  school: "gdst",
  // 高德路线规划密钥，必须加入https://restapi.amap.com为request合法域名
  // 密钥申请地址http://lbs.amap.com/api/javascript-api/summary/
  key: "", 
  // 地图更新地址，用于热修补，无需每次都提交审核
  updateUrl: "https://www.qq.com/json.json",
  // 图片CDN域名
  imgCDN: "https://www.gxgkcat.com/"
}
```

2、复制resources下的地图数据文件gdst.js，重命名gdst.js为(你自己学校的英文缩写.js，根据实际情况修改)

```js
module.exports.introduce = {}
module.exports.map = [{}]
``` 

3、修改地图文件

```
参照例子自行研究
地图经纬度获取：http://lbs.qq.com/tool/getpoint/index.html
``` 

---

## 📒开源许可证
 
请认真阅读并遵守以下开源协议

`MIT License` [License](https://github.com/gxgk/map/blob/master/LICENSE)

欢迎 pull request and star

允许任何人对该项目进行变动

同时欢迎各位校友参与到该项目(可新增关于界面加入参与贡献者名称)

不过，该项目所有图片均有版权(学院宣传服务中心所有)，禁止盗用，包含首页背景

> @ 广东科技学院 - 莞香广科团队 http://www.gxgkcat.com
