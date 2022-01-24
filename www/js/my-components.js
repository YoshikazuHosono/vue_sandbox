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

Vue.component('my-emit-counter', {
  props: {
    step: {
      required: true,
      type: Number,
    },
  },
  template: `<button type="button" @click="onclick">{{step}}</button>`,
  methods: {
    onclick: function () {
      this.$emit('plus', this.step);
    },
  },
});

Vue.component('my-child', {
  data: function () {
    return {
      message: '',
    };
  },
  template: `<p>child : {{message}}</p>`,
  mounted() {
    console.log('child component mounted');
    this.$parent.message = 'msg from child';
  },
});
