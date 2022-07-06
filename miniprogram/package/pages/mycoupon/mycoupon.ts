// package/pages/mycoupon/mycoupon.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        price: '15',
        unit: '元',
        exg: '满100元使用',
        title: '新品优惠卷',
        date: '2022.5.12 - 2022.6.23',
        bg: '../../static/coupons/cou-lit.png',
        bg2: '',
        bg3: '../../static/coupons/cou-liy-bj.png',
        bg4: '../../static/coupons/cou-liy.png'
      },
      {
        price: '88',
        unit: '折',
        exg: '满100元使用',
        title: '新品优惠卷',
        date: '2022.5.12 - 2022.6.23',
        bg: '../../static/coupons/cou-lit.png',
        bg2: '',
        bg3: '../../static/coupons/cou-liy-bj.png',
        bg4: '../../static/coupons/cou-liy.png'
      },
      {
        price: '15',
        unit: '元',
        exg: '满100元使用',
        title: '新品优惠卷',
        date: '2022.5.12 - 2022.6.23',
        bg: '../../static/coupons/cou-lit2.png',
        bg2: '../../static/coupons/y-con.png',
        bg3: '../../static/coupons/cou-liy-bj2.png',
        bg4: '../../static/coupons/cou-liy.png'
      },
      {
        price: '88',
        unit: '折',
        exg: '满100元使用',
        title: '新品优惠卷',
        date: '2022.5.12 - 2022.6.23',
        bg: '../../static/coupons/cou-lit2.png',
        bg2: '../../static/coupons/y-con.png',
        bg3: '../../static/coupons/cou-liy-bj2.png',
        bg4: '../../static/coupons/cou-liy.png'
      },
      {
        price: '15',
        unit: '元',
        exg: '满100元使用',
        title: '新品优惠卷',
        date: '2022.5.12 - 2022.6.23',
        bg: '../../static/coupons/cou-lit3.png',
        bg2: '../../static/coupons/g-con.png',
        bg3: '../../static/coupons/cou-liy-bj3.png',
        bg4: '../../static/coupons/cou-liy.png'
      },
      {
        price: '88',
        unit: '折',
        exg: '满100元使用',
        title: '新品优惠卷',
        date: '2022.5.12 - 2022.6.23',
        bg: '../../static/coupons/cou-lit3.png',
        bg2: '../../static/coupons/g-con.png',
        bg3: '../../static/coupons/cou-liy-bj3.png',
        bg4: '../../static/coupons/cou-liy.png'
      }


    ],
    show: false,
  },

  //弹出按钮
  onClickShow() {
    console.log(11);
    this.setData({ show: true });
  },
  //取消
  onHideod() {
    console.log(22);
    this.setData({ show: false });
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