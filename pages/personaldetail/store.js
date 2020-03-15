import Store from 'herculex';
import queryPersonalDetailInfo from '../../services/queryPersonalDetailInfo.service';
export default new Store({
  state: {
    personalDetailInfo: [],
    errorMsg: '',
  },
  plugins: ['logger'],
  mutation: {
    updateState(state, payload) {
      Object.assign(state, payload);
    },
  },
  actions: {
    async loadPersonalDetailInfo({ commit }, payload) {
      try {
        const res = await queryPersonalDetailInfo();
        console.log('----personal----', res);
        const { personalDetailInfo = {} } = res.data;
        commit('updatePersonalDetailInfo', {
          personalDetailInfo: personalDetailInfo.extendData || [],
        });
      } catch (err) {
        commit('updatePersonalDetailInfo', {
          errorMsg: err.errorMsg || '请求出错，请稍后重试',
        });
      }
    },
  },
});
