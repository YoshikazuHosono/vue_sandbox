let app = new Vue({
  el: '#app',
  data: {
    current: 0,
    message: '',
  },
  methods: {
    onplus: function (e) {
      this.current += e;
    },
  },
  mounted() {
    this.$refs.child.message = 'msg from parent';
  },
});
