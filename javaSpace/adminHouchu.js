// pages/myOrder/myOrder.js
Page({
  data: {
    tabs: ['待上餐', '待评价', '已完成', '已取消'],
    currentTab: 0
  },
  //监听
  onLoad() {
    this.getList()
  },
  //选中顶部导航栏
  selectTab(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      currentTab: index
    })
    this.getList()
  },
  //得到当前选中
  getList() {
    let e = this.data.currentTab
    wx.cloud.database().collection('order')
      .where({
        status: e
      })
      .get()
      .then(res => {
        this.setData({
          list: res.data
        })
      })
  },
  //取消订单
  quxiao(e) {
    let id = e.currentTarget.dataset.id
    wx.cloud.database().collection('order').doc(id)
      .update({
        data: {
          status: 3
        }
      }).then(res => {
        console.log('取消订单结果', res)
        this.getList()
      })
  },
  //评价
  pingjia(e) {
    let id = e.currentTarget.dataset.id
    let user = wx.getStorageSync('user')
    wx.showModal({
      title: '输入评价内容',
      editable: true,
      cancelColor: '取消',
      success: res => {
        if (res.confirm) {
          if (res.content) {
            wx.cloud.database().collection('pinglun').add({
              data: {
                name: user.nickName,
                orderId: id,
                avatarUrl: user.avatarUrl,
                content: res.content
              }
            }).then(res=>{
              wx.showToast({
                title: '提交成功',
              })
            })
          }else{
            wx.showToast({
              icon:'error',
              title: '内容为空',
            })
          }

        }
        else {
          console.log('用户点击了取消')
        }
      }
    })
  },
  //跳转至评价列表页面
  chakanpingjia(){
    wx.navigateTo({
      url: '/pages/mycomment/mycomment',
    })
  }
})
