// pages/map/details.js
let buildlData = require('../../resources/school')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    building: {
      img:'/img/loading.svg'//加载中图片地址
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var bid = parseInt(options.bid);
    var tid = parseInt(options.tid);
    var data = buildlData[tid].data[bid];
    this.setData({ 'building': data });
    wx.setNavigationBarTitle({
      title: data.name
    })
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

  }
})