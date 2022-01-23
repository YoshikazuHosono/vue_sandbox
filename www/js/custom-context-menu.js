new Vue({
  el: '#app',
  data: {
    pos: {
      left: 0,
      top: 0,
    },
    show: false,
  },
  methods: {
    leftclick: function (e) {
      this.show = false;
    },
    rightclick: function (e) {
      this.pos = {
        left: e.pageX + 'px',
        top: e.pageY + 'px',
      };
      this.show = true;
    },
  },
});
