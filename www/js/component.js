let app = new Vue({
  el: '#app',
  components: {
    'local-hello': {
      props: ['yourName'],
      template: `<div>こんにちは、{{yourName}}さん！</div>`,
    },
  },
});
