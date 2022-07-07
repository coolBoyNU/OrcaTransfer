// package/pages/myaddress/myaddress.ts


Page({

  // storeBindings: {
  //   store,
  //   fields: {
  //     numA: () => store.formInfo,
  //     numB: () => store.numB,
  //     address: "address"
  //   },
  //   // actions: {
  //   //   buttonTap: "naber",
  //   // },
  // },
  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    list: [
      {
        name: '你的名字', phone: '15788884444', default: 1, add: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON, AZ 85705 USA',
        head: ''
      },
      {
        name: '赵赫', phone: '15788884444', default: 0, add: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON, AZ 85705 USA', head: ''
      }
    ],
    filterList: [],
  },

  //新建地址
  newAdd() {
    wx.navigateTo({
      url: '../../../package/pages/address/address'
    })

  },

  //设置默认地址
  onChange(e: any) {

    let res = this.data.filterList.filter(item => {
      //@ts-ignore
      if (item.default) {
        //@ts-ignore
        item.default = 0;
      }
      //@ts-ignore
      if (item.name == e.target.dataset.li) {
        //@ts-ignore
        item.default = 1;
      }
      return item
    })

    this.setData({ filterList: res })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    //获取数据 
    let listTest = this.data.list.map(item => {
      var reg = /(\d{3})\d{4}(\d{4})/g;
      item.phone = item.phone.replace(reg, "$1****$2")
      item.head = item.name.substring(0, 1)
      return item
    })
    //@ts-ignore
    this.setData({ filterList: listTest })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})