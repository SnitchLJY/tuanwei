import store from './store';
import { DevDomain } from '/common/config';
Page(store.register({
  data: {
    list:[
      {
        icon:'/image/biz_dropdown.png',
        text:'发布任务',
        page:'assign' 
      },
      {
        icon:'/image/navigator.png',
        text:'提交任务', 
        page:'questUpload'         
      },
      {
        icon:'/image/logo.png',
        text:'功能三'          
      },
      {
        icon:'/image/biz_collapse.png',
        text:'功能四'          
      },
    ]
  },
  onLoad(options) {
    // insCode 代表不同参保险种
    //const { insCode = '', title = '' } = options;
    const insCode=1;
    const title = "团干考核";
    my.setNavigationBar({
      title,
      backgroundColor: '#fff',
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
  onItemClick(ev) {
    let index = ev.detail.index;
    let dirList = ['../assign/assign','../questUpload/questUpload'];
    console.log(index);
    dd.navigateTo({
      url: dirList[index],
    });
  },
}));
