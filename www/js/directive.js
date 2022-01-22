new Vue({
  el: '#app',
  data: {
    current: '',
  },
  methods: {
    onclick: function (e) {
      console.log(e);
      this.current = new Date().toLocaleString() + ' , e =' + e;
    },
  },
});

new Vue({
  el: '#app2',
  data: {
    src: 'http://www.web-deli.com/image/linkbanner_l.gif',
    alt: 'logo image',
    screenX: 0,
    screenY: 0,
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    offsetX: 0,
    offsetY: 0,
  },
  methods: {
    onmouseenter: function (e) {
      this.src = 'http://www.web-deli.com/image/home_chara.gif';
    },
    onmouseleave: function (e) {
      this.src = 'http://www.web-deli.com/image/linkbanner_l.gif';
    },
    onmousemove: function (e) {
      this.screenX = e.screenX;
      this.screenY = e.screenY;
      this.pageX = e.pageX;
      this.pageY = e.pageY;
      this.clientX = e.clientX;
      this.clientY = e.clientY;
      this.offsetX = e.offsetX;
      this.offsetY = e.off;
    },
  },
});

new Vue({
  el: '#app3',
  data: {
    src: './img/test.jpeg',
  },
  methods: {
    onerror: function (arg) {
      this.src = './img/noimage.png';
    },
  },
});
