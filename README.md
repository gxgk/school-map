地图导览 - 微信地图导览小程序
===
第一款开源的微信地图导览小程序，仅需修改地图文件，就可以适配某一学校/景区，具有出色的用户体验。
官网：http://www.gxgk.cc

**特性** 

- [x] 一键配置切换
- [x] 地图路径规划
- [x] 在线热修补

---

## 开源许可证 License AGPLv3
 
请认真阅读并遵守以下开源协议

`AGPLv3` [GNU Affero General Public License v3.0](https://github.com/gxgk/map/blob/master/LICENSE)

欢迎 pull request and star

---

## 预览

![导览](https://qn.gxgk.cc/%E6%A0%A1%E5%9B%AD%E5%AF%BC%E8%A7%88/Screenshot.jpg)
![二维码](https://qn.gxgk.cc/%E6%A0%A1%E5%9B%AD%E5%AF%BC%E8%A7%88/qrcode.jpg)

---
## 使用说明

项目根文件新建config.js文件，写入以下内容，并根据自身需求修改

```
module.exports = {
  //调试模式开关，调试模式下只调用本地数据
  debug: true,
  //学校数据配置名称，学校英文缩写
  school: "gdst",
  //高德路线规划密钥，必须加入https://restapi.amap.com为request合法域名
  //密钥申请地址http://lbs.amap.com/api/javascript-api/summary/
  key: "", 
  //地图更新地址，用于热修补，无需每次都提交审核
  updateUrl: "https://qn.gxgk.cc/school.js?123"
}
```

复制resources下的地图数据文件gdst.js，重命名gdst.js为(你自己学校的英文缩写.js，根据实际情况修改)

```
module.exports.introduce = {}
module.exports.map = [{}]
``` 

修改地图文件

```
参照例子自行研究
地图经纬度获取：http://lbs.qq.com/tool/getpoint/index.html
``` 

---


> @ 广东科技学院 - 莞香广科团队 http://www.gxgk.cc