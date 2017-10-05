//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    var _this = this;
    _this.globalData.map = _this.loadMap();
    _this.globalData.introduce = _this.loadIntroduce();
    if (!this.debug) {
      _this.updateMap(function (data) {
        _this.globalData.map = data.map;
        _this.globalData.introduce = data.introduce;
      })
    }
  },
  loadMap: function () {
    var buildlData = this.school.map
    if (this.debug){
      return buildlData;
    }
    try {
      var value = wx.getStorageSync('map')
      if (value) {
        //校验格式用
        value[0].name;
        return value;
      }
    } catch (e) {
      console.log(e);
      // Do something when catch error
    }
    return buildlData;
  },
  loadIntroduce: function () {
    var data = this.school.introduce
    if (this.debug) {
      return data;
    }
    try {
      var value = wx.getStorageSync('introduce')
      if (value) {
        //校验格式用
        value.name;
        return value;
      }
    } catch (e) {
      console.log(e);
      // Do something when catch error
    }
    return data;
  },
  updateMap: function (cb) {
    wx.request({
      url: 'http://qn.gxgk.cc/school.js?@21111', //仅为示例，并非真实的资源
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.map && res.data.map.length > 0) {
          wx.setStorage({
            key: "map",
            data: res.data.map
          })
          wx.setStorage({
            key: "introduce",
            data: res.data.introduce
          })
          typeof cb == "function" && cb(res.data);
        }
      }
    })
  },
  debug: true, //开启后只调用本地数据
  school: require('/resources/gdst.js'),
  globalData: {
    userInfo: null,
    map: null,
    introduce: null,
  }
})