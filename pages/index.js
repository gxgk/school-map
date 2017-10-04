Page({
  onLoad: function (options) {
    let buildlData = require('../resources/school')
    buildlData.updateMap();
  }
})