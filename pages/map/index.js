//获取应用实例
var app = getApp();
Page({
  data: {
    fullscreen: false,
    latitude: 22.973132,
    longitude: 113.755875,
    buildlData: app.globalData.map,
    windowHeight: "",
    windowWidth: "",
    isSelectedBuild: 0,
    isSelectedBuildType: 0,
    controls: [],
    islocation: true
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        //获取当前设备宽度与高度，用于定位控键的位置
        _this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth,
        })
        _this.setControls(res.windowWidth, res.windowHeight / 2)
        console.log(res.windowWidth)
      }
    })
    //载入更新后的数据
    this.setData({
      buildlData: app.globalData.map
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: app.globalData.introduce.name + ' - 校园导览',
      path: '/pages/map/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    // 选中 其对应的框
    this.setData({
      isSelectedBuild: e.markerId
    })

    console.log("e.markerId", e.markerId)
  },
  controltap(e) {
    if (e.controlId == -1) {
      wx.navigateTo({
        url: 'search'
      })
    } else if (e.controlId == -2) {
      this.location()
    } else {
      console.log("e.controlId", e.controlId)
    }
  },
  location: function () {
    var _this = this
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标  
      success: function (res) {
        app.globalData.latitude = res.latitude;
        app.globalData.longitude = res.longitude;
        _this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  },
  clickButton: function (e) {
    //console.log(this.data.fullscreen)
    //打印所有关于点击对象的信息
    this.setData({ fullscreen: !this.data.fullscreen })
    if (this.data.fullscreen) {
      this.setControls(this.data.windowWidth, this.data.windowHeight - 25)
    } else {
      this.setControls(this.data.windowWidth, this.data.windowHeight / 2)
    }
  },
  changePage: function (event) {
    this.setData({
      isSelectedBuildType: event.currentTarget.id,
      isSelectedBuild: 0
    });

  },
  // 修改控键位置
  setControls: function (width, height) {
    this.setData({
      controls: [{
        id: -1,
        iconPath: '/img/search.png',
        position: {
          left: width - 50,
          top: height - 110,
          width: 40,
          height: 40
        },
        clickable: true
      }, {
        id: -2,
        iconPath: '/img/location.png',
        position: {
          left: width - 50,
          top: height - 65,
          width: 40,
          height: 40
        },
        clickable: true
      }]
    })

  }
})