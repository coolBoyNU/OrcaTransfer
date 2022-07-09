// package/pages/money/money.ts
import Dialog from '../../../miniprogram_npm/@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: false,//复选框
    show: false, //弹出层
    toprice: {
      transfer: 256,//转运费
      attach: 299,//附加费
      tariffs: 0, //关税
      lose: 0,//失险
      calVal: 0,//优惠卷值
    },
    getvu: false,//优惠卷满减弹框状态
    selnum: 0,//最终价格
    uhid: 0,//优惠卷id
    saleData: [
      { id: 1, title: '红杉资本优惠券', int: '永久有效 · 所有课程可用', price: '2000.00', isSal: true },
      { id: 2, title: '优惠券1', int: '14天后到期 · 指定课程可用', price: '200.00', isSal: true },
      { id: 3, title: '优惠券2', int: '30天后到期 · 指定课程可用', price: '100.00', isSal: true },
    ],
    windowH: 0, //获取屏幕高度
    disStatus: true, //支付按钮状态
  },

  // 价格计算
  sumup() {
    let num = 0;
    let count: any = this.data.toprice
    console.log('所有价格', count);

    for (let i in count) {
      if (count[i]) {
        //对js浮动数的计算公式 公式0.1+0.2 * 10/10
        num += Number(count[i]) * 1000000000
      }
    }
    this.setData({ selnum: num / 1000000000 })
  },


  //电子条款
  onChange() {
    if (this.data.checked) return this.setData({ checked: false });
    this.setData({ show: true });
  },

  //同意条款
  onClose() {
    this.setData({ show: false, checked: true, disStatus: false });
  },

  //支付
  Pay(): any {
    if (!this.data.checked) return Dialog.alert({
      context: this,
      title: '提示',
      message: '请先勾选运单契约条款',
    })

    wx.navigateTo({
      url: '../payment/payment'
    })
  },

  //优惠卷弹出
  onSale() {
    this.setData({ getvu: true })

  },

  //优惠卷弹出点击遮罩位置
  SaleC() {
    this.setData({ getvu: false })

  },
  //当选框
  elected(event: any) {
    this.setData({ uhid: event.detail })

  },

  //确认使用优惠卷
  onfix() {
    let res = this.data.saleData.filter(item => item.id == this.data.uhid)
    let numcut = res[0].price
    this.setData({
      getvu: false,
      selnum: this.data.selnum - Number(numcut),
      ['toprice.calVal']: numcut,
    })
  },

  //获取视口高度
  windowHeight() {
    let windheig = 0;
    wx.getSystemInfo({
      success(res) {
        if (res.windowHeight > 700) {
          windheig = 50
        } else {
          windheig = 70
        }
      }
    })
    this.setData({ windowH: windheig })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    //复制保价
    this.setData({
      ['toprice.lose']: options.lose,
      ['toprice.tariffs']: options.tariffs
    })
    this.sumup()

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
    this.windowHeight() //视口高度

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