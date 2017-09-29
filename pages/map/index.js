let buildlData = require('../../resources/school')
Page({
  data: {
    fullscreen: false,
    latitude: 22.97,
    longitude: 113.75,
    markers: buildlData
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log("e.markerId", e.markerId)
  },
  controltap(e) {
    console.log("e.controlId", e.controlId)
  },
  clickButton: function (e) {
    console.log(this.data.fullscreen)
    //打印所有关于点击对象的信息
    this.setData({ fullscreen: !this.data.fullscreen })  

  }
})