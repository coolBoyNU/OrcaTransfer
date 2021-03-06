// package/pages/payment/payment.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counNum: 5,
  },

  //完成
  carry() {
    wx.reLaunch({
      url: '../../../pages/info/info'
    })
  },

  //进入后倒计时退出
  countZero() {
    let status: any = null;
    let num = 5;
    status = setInterval(() => {
      num--
      if (num <= 0) {
        clearTimeout(status)
        wx.reLaunch({
          url: '../../../pages/info/info'
        })
        return;
      }
      this.setData({ counNum: num })
    }, 1000)
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
    this.countZero() //倒计时

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