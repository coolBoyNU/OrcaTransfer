// package/pages/coupdetails/coupdetails.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsData: [
      { title: '有效期:', center: '2022-05-20至2022-06-20 23:59' }
    ],
    expiredDate: [
      {
        title: '不可用日期:', center: '2022年2月1日至2022年2月4日，12月26日以后开始使用'
      },
      { title: '使用时间:', center: '00: 00 - 23: 59' },
      { title: '适用范围:', center: ' 全场通用' }
    ],
    rule: [
      { center: '适用于运费' },
      { center: '适用于普通货物，电子产品' },
      { center: '使用优惠券下单，有效期以优惠券规则为准' },
      { center: '不可叠加使用' },
      { center: '不兑现、不提现' }
    ]
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