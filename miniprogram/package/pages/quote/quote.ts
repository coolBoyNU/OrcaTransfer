// package/pages/quote/quote.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: { stata: false, all: "联系客服", verify: "下一步", allcor: '#4c168e', verifycor: '#274f05' },
    show: false,
    insure1: 0,
    insure2: 0,
    isShow1: true, //默认开启保价
    isShow2: true,
  },

  //联系客服
  al() {
    console.log('联系客服');
  },
  //下一步
  vr() {
    this.setData({ show: true });
  },
  //购买保险
  dll() {
    let num1 = 0;
    let num2 = 0;
    if (this.data.isShow1) {
      num1 = this.data.insure1;
    }
    if (this.data.isShow2) {
      num2 = this.data.insure2;
    }
    wx.navigateTo({
      url: `../money/money?lose=${num1}&tariffs=${num2}`
    })
    this.setData({ show: false })
  },
  //承担风险
  risk() {
    wx.navigateTo({
      url: '../money/money'
    })
    this.setData({ show: false })
  },

  //输入框内容
  inputVal(e: any) {
    let digital = Number(e.detail.value)
    this.setData({
      insure1: digital * 3 / 100,
      insure2: digital * 2 / 100
    })

  },

  //开关
  onChange1() {
    this.setData({ isShow1: !this.data.isShow1 })
  },
  onChange2() {
    this.setData({ isShow2: !this.data.isShow2 })
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