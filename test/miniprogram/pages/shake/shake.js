// pages/shake/shake.js
Page({
  data: {
		tabType: 'tab1',
		key: 'tab1',
		conditionList: [{
			title: 'The Odin Project',
			id: '1',
			select: false
		},
		{
			title: 'Codegym',
			id: '2',
			select: false
		},
		{
			title: 'codecademy',
			id: '3',
			select: false
		},
		{
			title: 'OSChina',
			id: '4',
			select: false
		},
		{
			title: 'zhihu',
			id: '5',
			select: false
		},
		{
			title: 'CSDN',
			id: '6',
			select: false
		},
	],
		choosedCondition: {
			title: 'Select platform',
			id: '1'
		},
		conditionVisible: false,
	},
	showCondition() {
		this.setData({
			conditionVisible: !this.data.conditionVisible
		})
	},
	// 改变查询项
	onChnageCondition(e) {
		const list = this.data.conditionList
		list.forEach(item => {
			if (item.id === e.currentTarget.dataset.id) {
				item.select = true
				this.setData({
					'choosedCondition.title': item.title,
					'choosedCondition.id': item.id
				})
			} else {
				item.select = false
			}
		})
		this.setData({
			conditionList: list
		})
	},
	gotoPage: function (options) {   
		wx.navigateTo({      
			url: '../search/search',   //要跳转到的页面路径
	  })  
	  },
  })