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
    },
    created() {
      this.unwatch = this.$watch('godName',function(newValue,oldValue){
        this.trueGodName = '真・' + this.godName;
      });
    },
    watch: {
      name(newValue,oldValue) {
        _.debounce(()=>this.upperName = this.name.toUpperCase(),2000)();
      },
      'autor.name'(newValue,oldValue) {
        this.autor.company = newValue + ' ultimate.inc';
      },
    },
})
