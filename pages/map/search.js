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
    cursor: 0
  },

  bindSearchInput: function (e) {
    let showData = new Array();
    let searchdata = this.data.buildlData;
    if (e.detail.cursor >= this.data.cursor) {
      //输入文字
      console.log('输入文字')
      let inputData = e.detail.value.replace(/(^\s*)|(\s*$)/g, "")
      if (inputData) {
        for (var b in searchdata) {
          for (var i in searchdata[b].data) {
            if (searchdata[b].data[i].name.indexOf(inputData) != -1 || searchdata[b].data[i].description.indexOf(inputData) != -1) {
              let build = searchdata[b].data[i];
              build.tid = b;
              build.bid = i;
              showData.push(build)
            }
          }
        }
        this.setData({ showData: showData });
      }
    } else {
      //删除文字
      console.log('删除文字')
      this.setData({ showData: null });
    }
    this.data.cursor = e.detail.cursor;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  reset: function () {
    this.setData({ keyword: null });
  }
})