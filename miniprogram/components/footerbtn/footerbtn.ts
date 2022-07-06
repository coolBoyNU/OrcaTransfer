// components/footerbtn/footerbtn.ts
Component({
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    list: Object
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
    //取消按钮
    btnHandler() {
      this.triggerEvent('all')
    },
    //确认
    btnver() {
      this.triggerEvent('ver')
    }
  }
})
