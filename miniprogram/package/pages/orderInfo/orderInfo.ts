import { inputProps } from 'miniprogram/miniprogram_npm/@vant/weapp/field/props'
import { getOrderId } from '../../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: [
      { name: '新希望仓库', phone: '18688880130', add: '深圳市龙华区龙华街道工业路壹城环智中心C座2607室', icon: 'location-o', color: '#59b850', cop: 1 },
      {
        name: 'KK Chen', phone: '18688333332', add: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5A TUCSON, AZ 85705 USA', icon: 'home-o',
        color: '#4c168e'
      },
    ],
    ditch: '',
    inputValue: null, // 输入框
    isDisabled: false, //输入框状态
    isFocus: false, //获取焦点
  },

  //复制号码
  copyPhone() {
    let res = this.data.news.filter(item => {
      return item.cop === 1 ? item.phone : ''
    })
    let phone = ''
    res.forEach(item => {
      phone = item.phone
    })
    //一键获取剪贴板内容
    wx.getClipboardData({
      success() {
        wx.setClipboardData({
          data: phone,
          success() {
            wx.$showMsg('复制成功')
          }
        })
      }
    })



  },

  //复制订单号
  xxCopy() {
    console.log(111);

  },

  //输入框
  bindKeyInput(e: any) {
    let reg = /\d/g
    if (!reg.test(e.detail.value)) return wx.$showMsg('请输入数字')
    let res = Number(e.detail.value)
    let _this = this
    if (res > 100) return wx.showModal({
      title: '提示',
      content: '快递不能超过100个，如有疑问或快递较多，请联系客服！',
      confirmText: "联系客服",
      cancelText: "重新输入",
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          _this.setData({
            isFocus: true,
            inputValue: null,
          })
        }
      }
    })

    this.setData({
      // @ts-ignore//
      inputValue: res ? res : '',
      isDisabled: true,
    })
  },


  //补充单号
  tickets() {
    const _this = this
    wx.showModal({
      title: '是否增加快递单号？',
      content: '增加快递单号后，发往转运中心的快递个数+ 1。是否要继续？',
      success(res) {
        if (res.confirm) {
          _this.setData({
            // @ts-ignore
            inputValue: ++_this.data.inputValue
          })
        }
      }
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(optlons: any) {
    this.setData({
      ditch: optlons.TD
    })
    console.log('时间戳', getOrderId());

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