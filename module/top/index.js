import { connect } from 'herculex';
/**
 * 首页个人基本信息头部组件
 */

Component(connect({
  mapStateToProps: ['personalGeneralInfo', 'needAuth'],
})({
  data: {
  },
  props: {
  },
  methods: {
    onHrefDetail() {
      my.navigateTo({
        url: '/pages/personaldetail/index',
      });
    },
    onStartAuth() {
      my.getAuthCode({
        scopes: 'auth_user',
        success: (res) => {
          this.dispatch('loadPageData', { authCode: res.authCode });
        },
      });
    },
  },
}));
