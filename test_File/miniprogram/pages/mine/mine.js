// pages/mine/mine.js
Page({
    gotoPage: function (options) {   
      wx.navigateTo({      
          url: '../../pages/collection/collection',    //跳转到收藏
    })  
    },  
  
    gotoPage1: function (options) {   
        wx.navigateTo({      
            url: '../../pages/history/history',    //跳转到浏览记录
      })  
      },  

    gotoPage2: function (options) {   
        wx.navigateTo({      
            url: '../../pages/feedback/feedback',    //跳转到反馈箱
      })  
      },  

    gotoPage3: function (options) {   
        wx.navigateTo({      
            url: '../../pages/login/login',    //从logout跳转到启动页面
      })  
      },  
    /**
     * 页面的初始数据
     */
    data: {
      
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
