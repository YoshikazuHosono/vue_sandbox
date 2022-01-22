new Vue({
    el: '#app',
    data: {
      name:'',
      upperName:'',
      autor : {
        name: '',
        company: '',
      },
      godName: 'HOSONO',
      trueGodName: '',
      inputValue1: '',
      updatedInputValue1: '',
    },
    created() {
      this.unwatch = this.$watch('godName',function(newValue,oldValue){
        this.trueGodName = '真・' + this.godName;
      });
    },
    beforeDestroy() {
      this.unwatch();
    },
    watch: {
      name(newValue,oldValue) {
        _.debounce(()=>this.upperName = this.name.toUpperCase(),2000)();
      },
      'autor.name'(newValue,oldValue) {
        this.autor.company = newValue + ' ultimate.inc';
      },
      inputValue1: {
        handler: function(newValue,oldValue) {
          this.updatedInputValue1 = 'updated [' + newValue + ']';
        },
        deep: true,
        immediate: false,
      }
    },
})
