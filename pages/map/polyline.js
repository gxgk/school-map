var amapFile = require('../../utils/amap-wx.js');
Page({
  data: {
    latitude: 23.05,
    longitude: 113.76,
    markers: [],
    distance: '',
    polyline: []
  },
  onLoad: function (options) {
    console.log(options.latitude);
    console.log(options.longitude);
    var that = this;
    // wx.getLocation({
    //   type: 'gcj02',
    //   success: function (res) {
    //     that.setData({
    //       latitude: 23.05,
    //       longitude: 113.76
    //     });
    //   },
    //   fail: function () {
    //     that.setData({
    //       latitude: 23.05,
    //       longitude: 113.76
    //     });
    //   }
    // })

    var myAmapFun = new amapFile.AMapWX({ key: '2b9a90d2d9ac9ab1902ec83603b144a4' });
    console.log(this.data.longitude);
    myAmapFun.getDrivingRoute({
      origin: options.longitude + ',' + options.latitude,
      destination: that.data.longitude+','+that.data.latitude,
      success: function (data) {
        var points = [];
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          var steps = data.paths[0].steps;
          for (var i = 0; i < steps.length; i++) {
            var poLen = steps[i].polyline.split(';');
            for (var j = 0; j < poLen.length; j++) {
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            }
          }
        }
        that.setData({
          markers: [{
            latitude: options.latitude,
            longitude: options.longitude
          }, {
            latitude: that.data.latitude,
            longitude: that.data.longitude
          }],
          polyline: [{
            points: points,
            color: "#0091ff",
            width: 6
          }]
        });
        if (data.paths[0] && data.paths[0].distance) {
          that.setData({
            distance: data.paths[0].distance + '米'
          });
        }
      },
      fail: function (info) {

      }
    })
  }
})