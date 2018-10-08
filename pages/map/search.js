// pages/map/search.js
//获取应用实例
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: null,
    buildlData: app.globalData.map,
    showData: null,
    cursor: 0,
    imgCDN: app.imgCDN
  },

  bindSearchInput: function(e) {
    let showData = new Array();
    let searchdata = this.data.buildlData;
    if (e.detail.cursor >= this.data.cursor) {
      //输入文字
      let inputData = e.detail.value.replace(/(^\s*)|(\s*$)/g, "")

      if (inputData) {
        let z = 0,
          x = 100;
        for (var b in searchdata) {
          for (var i in searchdata[b].data) {
            if (searchdata[b].data[i].name.indexOf(inputData) != -1 || (searchdata[b].data[i].floor && searchdata[b].data[i].floor.indexOf(inputData) != -1)) {
              let build = searchdata[b].data[i];
              build.tid = b;
              build.bid = i;
              z = z + 1;
              build.index = z;
              showData.push(build);
            } else if (searchdata[b].data[i].description.indexOf(inputData) != -1) {
              let build = searchdata[b].data[i];
              build.tid = b;
              build.bid = i;
              x = x + 1;
              build.index = x;
              showData.push(build);
            }
          }
        }
        //冒泡排序
        for (var i = 0; i < showData.length; i++) {
          for (var j = 0; j < showData.length - i - 1; j++) {
            if (showData[j].index > showData[j + 1].index) {
              var temp = showData[j];
              showData[j] = showData[j + 1];
              showData[j + 1] = temp;
              console.log('交换' + showData[j].index + ':' + showData[j + 1].index)
            }
          }
        }
        if (inputData == 'gxgk') {
          showData.push({
            name: "\u839e\u9999\u5e7f\u79d1"
          })
        }
        this.setData({
          showData: showData
        });
      }
    } else {
      //删除文字
      console.log('删除文字')
      this.setData({
        showData: null
      });
    }
    this.data.cursor = e.detail.cursor;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  reset: function() {
    this.setData({
      keyword: null
    });
  }
})