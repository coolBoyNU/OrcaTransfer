//弹窗
wx.$showMsg = function (title: string = '数据加载失败！', duration: number = 1500): void {
  wx.showToast({
    title: title,
    duration: duration,
    icon: 'none'
  })
}
