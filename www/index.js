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
