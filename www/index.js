Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

app.message = 'Hello Vue!!!!!!!!!!!';

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen : false
  }
})
app3.seen = true;

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos : [
        { text : "test message 1" },
        { text : "test message 2" },
        { text : "test message 3" },
    ]
  }
})
app4.todos.push({ text: 'text message push' })

var app5 = new Vue({
  el: '#app-5',
  data: {
    message : "54321 sample message 12345"
  },
  methods: {
    reverseMessage : function(){
        this.message = this.message.split('').reverse().join('')
        this.message = this.message + "12345"
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'input here'
  }
})

var app7 = new Vue({
  el: '#app-7',
})
