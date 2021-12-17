// pages/article.js
Page({
    data: {
      class: 'heart'
    },
    clickHeart() {
      if(this.data.class == 'heart') {
        this.setData({
          class: 'heart-active'
        })
      } else if(this.data.class == 'heart-active') {
        this.setData({
          class: 'heart-center'
        })
        setTimeout(() => {
          this.setData({
            class: 'heart'
          })
        }, 200);
      }
    }
  });