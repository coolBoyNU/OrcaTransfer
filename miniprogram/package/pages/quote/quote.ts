// package/pages/quote/quote.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: { all: "联系客服", verify: "下一步", allcor: '#4c168e', verifycor: '#274f05' },
    show: false,
  },

  //联系客服
  al() {
    console.log('联系客服');
  },
  //下一步
  vr() {
    this.setData({ show: true });
  },

  dll() {
    this.setData({ show: false });
  },
  risk() {
    wx.navigateTo({
      url: '../money/money'
    })
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