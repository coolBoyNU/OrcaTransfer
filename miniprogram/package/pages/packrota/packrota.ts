// package/pages/packrota/packrota.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: [
      {
        text: '待处理 3',
        desc: '描述信息',
        inactiveIcon: 'location-o',
        activeIcon: 'success',
      },
      {
        text: '待入仓 6',
        desc: '待验货 6 ',
        inactiveIcon: 'like-o',
        activeIcon: 'plus',
      },
      {
        text: '待出仓 7',
        desc: '描述信息',
        inactiveIcon: 'star-o',
        activeIcon: 'cross',
      },
      {
        text: '待收货 8',
        desc: '描述信息',
        inactiveIcon: 'phone-o',
        activeIcon: 'fail',
      },
    ],
    active: 2, //执行步骤
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