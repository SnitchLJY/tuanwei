import store from './store';
// 获取应用实例
const app = getApp();
Page(store.register({
  data: {
  },
  onLoad(options) {
    // insCode 代表不同参保险种
    const { insCode = '', title = '' } = options;
    my.setNavigationBar({
      title,
      backgroundColor: '#29ab91',
    });
    if (insCode && insCode.toString()) {
      this.dispatch('loadInsGeneralData', {
        insCode,
      });
    } else {
      my.showToast({
        content: '参数错误，请重试',
        duration: 2000,
      });
    }
  },
  onChangeTab(data) {
    this.commit({
      activeTab: data.index,
      flowData: [],
      pageNo: 1,
    });
    this.dispatch('queryFlowData', {
      pageNo: 1,
    });
  },
  onReachBottom() {
    if (!this.state.hasNextPage) {
      return;
    }
    this.dispatch('queryFlowData', { pageNo: this.state.pageNo + 1 });
  },
}));

