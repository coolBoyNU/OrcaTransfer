// components/ordercard/ordercard.ts
Component({
  options: {
    styleIsolation: 'isolated'
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
    //复制
    oCopy(e: any) {
      this.triggerEvent('ctrl', e.target.dataset.num);
    },
    //物流情况
    movement() {
      this.triggerEvent('move');
    }
  }
})
