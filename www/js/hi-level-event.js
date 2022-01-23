Vue.config.keyCodes = {
  'custom-escape-key': 27,
};

new Vue({
  el: '#app',
  data: {
    fortune: '占いの結果',
    name: 'HOSONO',
  },
  methods: {
    clickFortune: function () {
      this.fortune =
        '今日の運勢は' + (Math.floor(Math.random() * 100) + 1) + '点';
    },
    clickParent: function () {
      console.log('parent click');
    },
    clickMe: function () {
      console.log('me click');
    },
    clickChild: function () {
      console.log('child click');
    },
    clear: function () {
      this.name = '';
    },
  },
});

{
  /* <div id="parent" @click="clickParent">
Parent
<div id="me" @click="clickMe">
  Me
  <div id="child" @click="clickChild">child</div>
</div>
</div> */
}
