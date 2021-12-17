Page({

  gotoPage1: function (options) {   
    wx.navigateTo({      
        url: '../result/result',    //要跳转到的页面路径
  })  
  },
  gotoPage2: function (options) {   
    wx.navigateTo({      
        url: '../result2/result2',    //要跳转到的页面路径
  })  
  },
  gotoPage3: function (options) {   
    wx.navigateTo({      
        url: '../result3/result3',    //要跳转到的页面路径
  })  
  },

  /**
   * 页面的初始数据
   */
  data: {
    showUploadTip: false,
    haveGetOpenId: false,
    envId: '',
    openId: ''
  },

  onLoad(options) {
    this.setData({
      envId: options.envId
    });
  },

  getOpenId() {
    wx.showLoading({
      title: '',
    });
   wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getOpenId'
      }
    }).then((resp) => {
      this.setData({
        haveGetOpenId: true,
        openId: resp.result.openid
      });
     wx.hideLoading();
   }).catch((e) => {
      this.setData({
        showUploadTip: true
      });
     wx.hideLoading();
    });
  },

  clearOpenId() {
    this.setData({
      haveGetOpenId: false,
      openId: ''
    });
  }

});


