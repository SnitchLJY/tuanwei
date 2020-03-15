import Store from 'herculex';
import queryGeneralInfo from '../../services/queryGeneralInfo.service';

export default new Store({
  state: {
    needAuth: true,
    personalGeneralInfo: {}, // 个人总览信息
    insGeneralInfo: [], // 参保总览信息列表
    errorMsg: '',
  },
  plugins: ['logger'],
  getters: {
  },
  mutations: {
  },
  actions: {
    async loadPageData({ commit }, payload) {
      try {
        const res = await queryGeneralInfo();
        const { personalGeneralInfo = {}, insGeneralInfo = [] } = res.data;
        if (res.needAuth.toString() === 'true') {
          commit('updateGeneralInfo', {
            needAuth: true,
            personalGeneralInfo,
            insGeneralInfo,
          });
        } else {
          commit('updateGeneralInfo', {
            personalGeneralInfo,
            insGeneralInfo,
            needAuth: false,
          });
        }
      } catch (err) {
        commit('updateGeneralInfo', {
          errorMsg: err.errorMsg || '请求出错，请稍后重试',
        });
      }
    },
  },
});
