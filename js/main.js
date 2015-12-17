Vue.use(VueResource)
var vm = new Vue({
  el: ".ez-wr",
  data: {
    weekly: {}
  },
  created: function() {
    var weekly_id = this.getQuery("wid")
    this.$http.get("http://localhost:3000/weeklies/" + weekly_id,function(data) {
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
