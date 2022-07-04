// package/pages/respository/respository.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: [
      { name: '收件人', content: '虎鲸仓库' },
      { name: '收货地址', content: '深圳市龙华区龙华街道工业路壹城环智中心C座2601号仓库' },
      { name: '联系电话', content: '1546668888' },
      { name: '邮政编码', content: '618000' },
    ],
    allData: ''
  },

  copy() {
    this.data.info.forEach(item => {
      this.setData({
        allData: this.data.allData += `${item.content}  `
      })
    })
    console.log(this.data.allData);

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