// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    orderList: [
      { id: 1, oddNumber: 12212122121211, status: 0 },
      { id: 2, oddNumber: 675634233434434, status: 1 },
      { id: 3, oddNumber: 23556744555566, status: 2 },
      { id: 4, oddNumber: 23556744555566, status: 3 },
      { id: 5, oddNumber: 23556744555566, status: 3 }
    ],
    awaitList: [],
  },
  onChange(event: any) {
    if (event.detail.index == 1) {
      let res = this.data.orderList.filter(item => item.status == 1);
      //@ts-ignore
      this.setData({ awaitList: res });
    } else if (event.detail.index == 2) {
      this.setData({ awaitList: [] });
    } else if (event.detail.index == 3) {
      let res = this.data.orderList.filter(item => item.status == 3);
      //@ts-ignore
      this.setData({ awaitList: res })
    } else if (event.detail.index == 0) {
      let data = this.data.orderList
      //@ts-ignore
      this.setData({ awaitList: data })
    }

  },

  //复制
  oddctrl(e: any) {
    //一键获取剪贴板内容
    wx.getClipboardData({
      success() {
        wx.setClipboardData({
          //@ts-ignore
          data: String(e.detail),
          success() {
            wx.$showMsg('复制成功')
          }
        })
      }
    })

  },

  //物流情况
  noves() {
    wx.navigateTo({ url: '../../package/pages/packrota/packrota' })

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
    let res = this.data.orderList
    //@ts-ignore
    this.setData({ awaitList: res })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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