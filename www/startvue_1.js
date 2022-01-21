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

      this.autor_add_timer = setTimeout( () => {
        // this.autor.company = 'hosono lab.inc';
        Vue.set(this.autor,'company','hosono lab.inc');
        console.log(this.$el.textContent.includes(this.autor.company));
        this.$nextTick().then(() => {
          console.log(this.$el.textContent.includes(this.autor.company));
        });
      } , 3000);

      this.autor_remove_timer = setTimeout( () => {
        Vue.delete(this.autor,'company');
        this.autor = Object.assign({},this.autor,{
          company : 'hosono ultimate lab.inc',
        });
        console.log(this.$el.textContent.includes(this.autor.company));
        this.$nextTick().then(() => {
          console.log(this.$el.textContent.includes(this.autor.company));
        });
      } , 6000);
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
      // clearInterval(this.current_update_timer);
      clearInterval(this.autor_add_timer);
      clearInterval(this.autor_remove_timer);
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
