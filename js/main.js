Vue.use(VueResource)
var vm = new Vue({
  el: ".app",
  data: {
    weekly: {}
  },
  created: function() {
    var weekly_id = this.getQuery("wid")
    this.$http.get("http://wx.xj8.net/weeklies/" + weekly_id,function(data) {
      this.$data = data
    })
  },
  ready: function() {
  },
  methods: {
    getQuery: function (key){
      return (document.location.search.match(new RegExp("(?:^\\?|&)"+key+"=(.*?)(?=&|$)"))||['',''])[1];
    },
  }
})
