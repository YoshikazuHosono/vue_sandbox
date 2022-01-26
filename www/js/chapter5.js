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

let app = new Vue({
  el: '#app',
  data: {
    currentBannerIdx: 0,
    bannerList: ['hosono', 'yoshikazu', 'jack'],
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
  },
});
