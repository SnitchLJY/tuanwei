import store from './store';
import { INS_CODE_QUERY } from '../../common/constant';
// 获取应用实例
const app = getApp();

Page(store.register({
  onReady() {},
  onShow() {},
  onLoad() {
    const title = INS_CODE_QUERY['0'];
    my.setNavigationBar({
      backgroundColor: '#fff',
      title,
    });
    this.dispatch('loadPersonalDetailInfo');
  },
}));
