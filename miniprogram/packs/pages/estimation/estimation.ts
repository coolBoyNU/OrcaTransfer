// packs/pages/estimation/estimation.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false, //渠道遮罩
    isweight: false,//重量遮罩
    channel: [
      { id: 1, title: '普通货物', first: 59, next: 39 },
      { id: 2, title: '电子产品', first: 69, next: 49 },
      { id: 3, title: '液体粉末', first: 79, next: 59 },
      { id: 4, title: '内地EMS', first: 128, next: 49 },
      { id: 5, title: '广东EMS', first: 128, next: 35 }
    ],
    ins: 0,
    DT: '普通货物',
    defWei: 1, //默认重量
    cost: 0, //估算价格
  },

  //普通货物
  normal() {
    this.setData({
      isShow: true,
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
      isShow: false,
      isweight: false,
    })
  },
  //遮罩层确定
  affirm() {
    this.setData({
      isShow: false
    })
  },

  //获取重量弹出的值
  formSubmit(e: any) {
    let value = Number(e.detail.value.num)
    let name = this.data.DT
    let result = this.data.channel.filter((item) => {
      return item.title == name;
    })
    let numresult = ((value * 2 - 1) * result[0].next) + result[0].first
    this.setData({
      cost: numresult,
      isweight: false
    })
  },

  //显示重量弹出
  weightBtn() {
    this.setData({ isweight: true })
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