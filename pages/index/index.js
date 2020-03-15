import store from './store';
import { DevDomain } from '/common/config';
// 获取应用实例
const app = getApp();

Page(store.register({
  onReady() {},
  onShow() {},
  onLoad() {
    this.dispatch('loadPageData');
  },
  navigate_tosaved : function(e){
    dd.navigateTo({
      url: "../index_saved/index",
    });
  }
}));
