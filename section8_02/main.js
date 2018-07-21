new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    // handler for clicking the button
    increment: function(){
      this.count += 1  //処理は再代入のみ
    }
  }
})
