new Vue({
    el: '#app',
    data: {
      message: '皆さん、こんにちは！',
      url_google : 'https://www.google.com/',
      url_yahoo : 'https://www.yahoo.co.jp/',
      flag : true,
      user_email : 'test@test.co.jp',
      current: new Date(),
      autor : {
        name: 'yoshikazu hosono',
      },
    },
    beforeCreate: function() {
      console.log("beforeCreate...");
    },
    created(){
      console.log("created...");
      
      // this.current_update_timer = setInterval( () => this.current = new Date(),1000);

      this.autor_timer = setTimeout( () => {
        // this.autor.name =  'yoshikazu jack hosono';
        // this.autor.company = 'hosono lab.inc';
        Vue.set(this.autor,'company','hosono lab.inc');
      } , 3000);
    },
    beforeMount: function(){
      console.log("beforeMount...");
    },
    mounted: function() {
      console.log("mounted...");
    },
    beforeUpdate: function(){
      console.log("beforeUpdate...");
    },
    updated: function(){
      console.log("updated...");
    },
    beforeDestroy() {
      console.log("beforeDestroy...");
      clearInterval(this.current_update_timer);
    },
    destroyed: function(){
      console.log("destroyed...");
    },
    computed: {
      user_email_domain: function(){
        return this.user_email.split('@')[1];
      },
      random: function(){
        return Math.random();
      },
    },
    methods: {
      user_email_domain_method: function(){
        return this.user_email.split('@')[1];
      },
      random_method: function(){
        return Math.random();
      },
      onclick: function(){
        this.current = new Date().toLocaleString();
      },
      onclickDestroy: function(){
        this.$destroy();
      },
    }
})
