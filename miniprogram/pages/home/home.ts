// pages/home/home.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    channel: [
      { title: '普通货物' },
      { title: '电子产品' },
      { title: '液体粉末' },
      { title: '内地EMS' },
      { title: '广东EMS' }
    ],
    ins: 0,
    DT: '普通货物',
    country: '美国', //国家
  },
  //立即转运
  isBtn() {
    this.setData({
      isShow: true
    })
  },

  //修改选中
  isStatus(e: any) {
    this.setData({
      ins: e.target.dataset.ins,
      DT: e.target.dataset.dt
    })
  },
  //遮罩层取消
  iscll() {
    this.setData({
      isShow: false
    })
  },
  //遮罩层下一步
  affirm() {
    wx.navigateTo({
      url: '../../package/pages/orderInfo/orderInfo?TD=' + this.data.DT
    })
    this.setData({
      isShow: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: object | any) {
    console.log(options);
    this.setData({
      country: options.coun
    })
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