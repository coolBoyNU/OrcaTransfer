import { loadavg, userInfo } from "os"

// package/pages/fillAddress/fillAddress.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //信息地址
    list: {
      thing: '1111',
    },
    errHint: {
      n: '',
      p: '',
      a: '',
      c: '',
      po: ''
    },
    userInfo: {
      name: '',
      phone: '',
      address: '',
      city: '',
      postcode: ''
    }

  },

  //选择地址
  addbtn() {
    wx.navigateTo({
      url: '../myaddress/myaddress'
    })
  },

  NStart() {
    wx.navigateTo({
      url: '../regulations/regulations'
    })
  },

  //输入框触发
  unName(e: any) {
    let reg = /[^\u4e00-\u9fa5]+/g  //非中文
    if (!reg.test(e.detail.value)) return this.setData({
      ['errHint.n']: '不能输入中文'
    });
    this.setData({
      ['userInfo.name']: e.detail.value,
      ['errHint.n']: ''
    });

  },

  unPhone(e: any) {
    let reg = /^1[3-9]\d{9}$/ //手机号
    if (!reg.test(e.detail.value)) return this.setData({
      ['errHint.p']: '手机号输入错误'
    });
    this.setData({
      ['userInfo.phone']: e.detail.value,
      ['errHint.p']: ''
    });
  },

  unAddress(e: any) {
    let reg = /[^\u4e00-\u9fa5]+/g  //非中文
    if (!reg.test(e.detail.value)) return this.setData({
      ['errHint.a']: '不能输入中文'
    });

    this.setData({
      ['userInfo.adderss']: e.detail.value,
      ['errHint.a']: ''
    });
  },

  unCity(e: any) {
    let reg = /[^\u4e00-\u9fa5]+/g  //非中文
    if (!reg.test(e.detail.value)) return this.setData({
      ['errHint.c']: '不能输入中文'
    });
    this.setData({
      ['userInfo.city']: e.detail.value,
      ['errHint.c']: ''
    });
  },

  unPostCode(e: any) {
    let reg = /^\d{6}$/  //邮政编码
    if (!reg.test(e.detail.value)) return this.setData({
      ['errHint.po']: 'code码错误，请输入6位'
    });
    this.setData({
      ['userInfo.postcode']: e.detail.value,
      ['errHint.po']: ''
    });
  },









  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    this.setData({ list: this.data.list.thing = options })
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