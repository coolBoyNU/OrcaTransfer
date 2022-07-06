// package/pages/money/money.ts
import Dialog from '../../../miniprogram_npm/@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: false,//复选框
    show: false, //弹出层
  },

  onChange() {
    if (this.data.checked) return this.setData({ checked: false });
    this.setData({ show: true });
  },

  //同意条款
  onClose() {
    this.setData({ show: false, checked: true });
  },

  //支付
  Pay(): any {
    if (!this.data.checked) return Dialog.alert({
      context: this,
      message: '请先勾选运单契约条款',
    })

    wx.navigateTo({
      url: '../payment/payment'
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