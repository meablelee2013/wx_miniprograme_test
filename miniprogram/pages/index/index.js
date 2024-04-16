const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj: ""
  },

  getData() {
    console.log(123)
    db.collection("demolist").get().then(res => {
      console.log(res.data)
      this.setData({
        dataObj: res.data
      })
    })
  },

  addData() {
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    db.collection("demolist").add({
      data: {
        title: "测试3",
        author: "王五",
        content: "测试内容部分测试内容部分测试内容部分测试内容部分"
      }
    }).then(res => {
      console.log(res)
      wx.hideLoading()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})