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
    btnHandler(e: any) {
      this.triggerEvent('all', e.target.dataset.dler)
    },
    //确认
    btnver(e: any) {
      this.triggerEvent('ver', e.target.dataset.ver)
    }
  }
})
