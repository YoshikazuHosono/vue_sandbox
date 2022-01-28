Vue.component('banner-hosono', {
  template: `
  <div class="banner">
    <h3>チームHOSONOメンバー卍募集中！！！</h3>
    <p>異世界転生経験者の多い弊社で、在宅LEGO審判としての経験をイカしてみませんか？</p>
  </div>
  `,
});

Vue.component('banner-yoshikazu', {
  template: `
  <div class="banner">
    <h3>YOSHIKAZUを探しています、、、</h3>
    <p>1000年の宴が終焉を迎えしとき、みたいな雰囲気のサイゼリアの壁の絵</p>
  </div>
  `,
});

Vue.component('banner-jack', {
  template: `
  <div class="banner">
    <h3>よぉ、JACK、、、</h3>
    <p>XYZ</p>
  </div>
  `,
});

Vue.component('tab-member', {
  template: `
  <div class="tab">
    <p>tab-membertab-membertab-membertab-membertab-membertab-member</p>
    <input type="text" />
  </div>
  `,
});

Vue.component('tab-new', {
  template: `
  <div class="tab">
    <p>tab-newtab-newtab-newtab-newtab-newtab-newtab-newtab-newtab-new</p>
    <input type="text" />
  </div>
  `,
});

Vue.component('tab-env', {
  template: `
  <div class="tab">
    <p>tab-envtab-envtab-envtab-envtab-envtab-envtab-envtab-envtab-env</p>
    <input type="text" />
  </div>
  `,
});

Vue.component('my-input', {
  props: ['value'],
  template: `
  <label>
    name : <input type="text" :value="value" @input="$emit('input', $event.target.value)" />
  </label>
  `,
});

Vue.component('my-input2', {
  props: ['value'],
  template: `
  <label>
    name : <input type="text" v-model="internalValue" />
  </label>
  `,
  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
});

let app = new Vue({
  el: '#app',
  data: {
    currentBannerIdx: 0,
    bannerList: ['hosono', 'yoshikazu', 'jack'],
    currentTabKey: 'member',
    tabs: {
      member: 'MEMBER',
      new: 'NEW',
      env: 'ENV',
    },
    message: 'message 1',
    message2: 'message 2',
  },
  created() {
    this.interval = setInterval(() => {
      this.currentBannerIdx =
        (this.currentBannerIdx + 1) % this.bannerList.length;
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  computed: {
    currentBanner: function () {
      return 'banner-' + this.bannerList[this.currentBannerIdx];
    },
    tabNames: function () {
      return Object.keys(this.tabs);
    },
    currentBanner: function () {
      return 'banner-' + this.bannerList[this.currentBannerIdx];
    },
    currentTab: function () {
      return 'tab-' + this.currentTabKey;
    },
  },
  methods: {
    onclick(tabkey) {
      this.currentTabKey = tabkey;
    },
  },
});
