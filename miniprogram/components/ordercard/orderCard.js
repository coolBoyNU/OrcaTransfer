// components/orderCard/orderCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderNum:Object
  },
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    copyOrderNumber(e){
      this.triggerEvent('copyOrderNum',this.data.orderNum.orderNumber)
    },
    orderDetail(e){
      this.triggerEvent('orderDetHan',this.data.orderNum)
    }
  }
})
