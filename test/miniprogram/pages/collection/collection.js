Page({

    /**
     * 页面的初始数据
     */
    data: {
      showUploadTip: false,
      haveGetOpenId: false,
      envId: '',
      openId: ''
    },
    gotoPage: function (options) {   
      wx.navigateTo({      
          url: '../../pages/mine/mine',    //要跳转到的页面路径
    })  
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
