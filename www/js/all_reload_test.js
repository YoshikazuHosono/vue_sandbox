new Vue({
  el: '#app',
  data: {
    current: new Date(),
    current2: new Date(),
  },
  computed: {
    random: function () {
      return Math.random();
    },
  },
  methods: {
    random_method: function () {
      return Math.random();
    },
    onclickUpdateCurrentTimestamp() {
      this.current = new Date();
    },
    onclickUpdateCurrentTimestamp2() {
      this.current2 = new Date();
    },
  },
});
