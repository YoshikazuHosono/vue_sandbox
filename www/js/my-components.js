Vue.component('my-hello', {
  props: {
    name: {
      type: String,
      required: false,
      default: 'Default太郎',
    },
  },
  template: `<div>こんにちは、{{name}}さん！</div>`,
});

Vue.component('my-counter', {
  props: ['init'],
  template: ` <div>COUNT : {{current}}<input type="button" @click="clickadd" value="ADD" /></div>`,
  data: function () {
    return {
      current: this.init,
    };
  },
  methods: {
    clickadd: function () {
      this.current++;
    },
  },
});
