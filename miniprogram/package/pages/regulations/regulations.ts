// package/pages/regulations/regulations.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: 5,
    isdisabled: true,
  },

  timeDate() {
    let stop: any = null;
    stop = setInterval(() => {
      this.setData({
        timer: --this.data.timer
      });
      if (this.data.timer <= 0) {
        //@ts-ignore
        this.setData({ timer: '', isdisabled: false })
        clearInterval(stop)
      }
    }, 1000)
  },


  //已阅读
  allBtn() {
    if (this.data.isdisabled) return
    wx.navigateTo({
      url: "../orderInfo/orderInfo"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.timeDate()
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