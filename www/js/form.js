new Vue({
  el: '#app',
  data: {
    myName: '',
    pet: '',
    agree: false,
    os: [],
    browser: '',
    browser2: [],
    money: {},
    uploadStatus: 'not uploaded',
    temperature: 0,
    memo: '',
  },
  methods: {
    onchange: function () {
      let file = this.$refs.upfile.files[0];
      this.uploadStatus = '[' + file.name + '] is uploaded!';
    },
    changeTemperature: function () {
      if (this.temperature == '') {
        return;
      }
      console.log(this.temperature.toFixed(1));
    },
    changeMemo: function () {
      console.log(this.memo);
    },
  },
});
