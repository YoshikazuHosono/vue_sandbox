Vue.component('my-hello', {
  template: '<div>こんにちは、<slot>デフォルト太郎</slot>さん！！！</div>',
});

Vue.component('my-slot', {
  template: `
  <div>
    <header>
      <slot name="header"></slot>
    </header>

    <div><slot></slot></div>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>`,
});

Vue.component('my-book', {
  data() {
    return {
      book: {
        isbn: '000-0-0000-0000-0',
        title: 'ただの細野が無敗神話伝説になってしまった件',
        price: 3000,
        publish: '集英社',
      },
    };
  },
  template: `
  <div>
    <slot :book="book">{{book.title}} ({{book.publish}})</slot>
  </div>`,
});

let app = new Vue({
  el: '#app',
});
