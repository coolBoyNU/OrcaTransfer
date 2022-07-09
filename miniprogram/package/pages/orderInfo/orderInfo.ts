import { getOrderId } from '../../../utils/util'


Page({
  /**
   * 页面的初始数据
   */
  data: {
    billParcel: [{ title: '包裹一' }, { title: '包裹二' }, { title: '包裹三' }], //账单盒子数据
    lists: { stata: false, all: "联系客服", verify: "取消订单", allcor: '#4c168e', verifycor: '#e2e2e2', allfont: '', verifyfont: '#000' }, //底部按钮
    order: [{ numSize: '298267132913123213' }],
    news: [
      { name: '新希望仓库', phone: '18688880130', add: '深圳市龙华区龙华街道工业路壹城环智中心C座2607室', icon: 'location-o', color: '#59b850', cop: 1 },
      {
        name: 'KK Chen', phone: '18688333332', add: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5A TUCSON, AZ 85705 USA', icon: 'home-o',
        color: '#4c168e'
      },
    ],
    ditch: '普通货物',
    inputValue: [
      { id: 1, value: '34e21451432142', status: true, bllSt: 2 },
      { id: 2, value: 'AA344343432232', status: true, bllSt: 2 },
      { id: 3, value: 'fdsfdsf3234324', status: true, bllSt: 2 },
    ], // 输入框
    isDisabled: false, //快递个数输入框状态
    isFocus: false, //快递个数获取焦点
    isInputShow: false, //订单输入框是否显示
  },
  //删除
  del(e: any) {
    if (this.data.inputValue.length <= 1) return wx.$showMsg('最后一单不能删除');
    let filresult = this.data.inputValue.filter((item: any) => item.id !== e.target.dataset.rem);
    this.setData({ inputValue: filresult })
  },

  //单号输入框
  oddNum(e: any) {
    let filresult = this.data.inputValue.map((item: any) => {
      if (item.id == e.target.dataset.mark) {
        item.value = e.detail.value;
      }
      return item
    })
    //输入框为空时return出去
    if (!e.detail.value) return
    let _this = this;
    wx.showModal({
      title: '请确认快递单号是否无误',
      content: '请确认快递单号【test12346】是否无误一旦提交，不可修改',
      success(res) {
        if (res.confirm) {
          //确认后禁用按钮
          _this.data.inputValue.forEach(item => {
            //@ts-ignore
            if (item.id == e.target.dataset.mark) {
              //@ts-ignore
              item.status = true;
              item.bllSt = 1;
            }
          })
          _this.footBtn()
          wx.setStorageSync('list', filresult)
          //@ts-ignore
          _this.setData({ inputValue: filresult })
        }
      }
    })
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
    let num = 0;
    this.data.order.forEach(item => {
      //@ts-ignore
      num = item.numSize

    })

    //一键获取剪贴板内容
    wx.getClipboardData({
      success() {
        wx.setClipboardData({
          //@ts-ignore
          data: num,
          success() {
            wx.$showMsg('复制成功')
          }
        })
      }
    })
  },

  //快递个数输入框
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
            //@ts-ignore
            inputValue: [],
          })
        }
      }
    })
    let arr: any = []

    for (let i = 1; i <= res; i++) {
      arr = [...arr, { id: i, value: '', status: false, bllSt: 0 }]
    }


    this.setData({
      // @ts-ignore//
      inputValue: arr,
      isDisabled: true,
      isInputShow: true,
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
          //时间戳
          let med = Date.now()

          //添加一个对象进inputValue
          _this.setData({
            // @ts-ignore//
            inputValue: [..._this.data.inputValue, { id: med, value: '', status: false, bllSt: 0 }],
          })
        }
      }
    })

  },

  //取消订单-确认打包
  callOff(val: any) {
    let _this = this;
    if (val.detail == '取消订单') {
      wx.showModal({
        title: '是否取消订单',
        content: '取消订单后，订单将不能进行后续操作是否要继续？',
        success(res) {
          if (res.confirm) {
            wx.setStorageSync('list', '');
            _this.setData({ inputValue: [] });
            wx.reLaunch({ url: '../../../pages/home/home' })
          }
        }
      });
      return;
    }
    if (val.detail == '确认打包') {
      wx.showModal({
        title: '是否确认打包所有的快递包裹',
        content: '确认后，订单进入捡货状态，快递包裹将会进行打包称重，是否要继续？',
        success(res) {
          if (res.confirm) {
            wx.reLaunch({ url: '../../../pages/info/info' })
          }
        }
      });
      return;
    }

  },

  //联系客服
  Service() {
    wx.navigateTo({ url: '../../../packs/pages/service/service' })
  },

  //判断底部按钮状态显示
  footBtn() {
    //只有有一个为真就返回true
    const rxbool = this.data.inputValue.some(item => item.bllSt != 0)
    const rxTrue = this.data.inputValue.every(item => item.bllSt == 2)

    if (rxbool) {
      //@ts-ignore
      let newlists = this.data.lists = {
        stata: false,
        all: '联系客服',
        verify: '确认打包',
        allcor: '#e7691d',
        verifycor: '#274f05',
      }
      this.setData({
        //@ts-ignore
        lists: newlists
      })
    }
    //所有为真就显示通栏联系按钮
    if (rxTrue) {
      //@ts-ignore
      let newlists = this.data.lists = {
        stata: true,
        all: '联系客服',
        allcor: '#4c168e',
      }
      this.setData({
        //@ts-ignore
        lists: newlists
      })
      return
    }

  },

  //获取本地保存的单号数据
  synlist() {
    let list = wx.getStorageSync('list')
    if (list) {
      this.setData({ inputValue: list, isInputShow: true, isDisabled: true })
      return
    }
  },

  //加载时查看对象是否为真，为真就显示地址输入框
  inputLoading() {
    if (this.data.inputValue) {
      this.setData({ isInputShow: true })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    //加载时查看对象是否为真，为真就显示地址输入框
    this.inputLoading()
    console.log('时间戳', getOrderId());

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.footBtn()

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    //获取本地保存的单号数据
    this.synlist()

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