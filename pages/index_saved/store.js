import Store from 'herculex';
import moment from 'moment';
import queryInsGeneralInfo from '../../services/queryInsGeneralInfo.service';
import queryFlowData from '../../services/queryFlowData.service';
export default new Store({
  state: {
    insCode: '', // 险种代号1：养老保险，2：医疗保险，3：工伤保险，4：生育保险，5：失业保险
    headData: {},
    flowTypeList: [{
      title: '缴存明细',
      flowType: 'deposit',
    }, {
      title: '支出明细',
      flowType: 'expend',
    },{
      title: '团干考核',
      flowType: 'quest',
    }],
    flowData: [],
    activeTab: 1,
    dateFormat: 'yyyy-MM', // 日期选择的格式，若为年份筛选，则格式为 'yyyy'
    selectedDate: [moment().format('YYYY-MM'), moment().format('YYYY-MM')], // 若为年份筛选，则格式为 'YYYY'
    hasNextPage: true,
    pageNo: 1,
    pageSize: 15,
    errMsg: '',
  },
  plugins: ['logger'],
  mutations: {
    updateSelectedDate(state, payload) {
      console.log('----!!!!----', payload);
      state.selectedDate[state.activeTab] = payload.newDate;
    },
  },
  getters: {
    datePickerTitle: (state) => {
      if (state.dateFormat === 'yyyy-MM') {
        return '月份';
      } else if (state.dateFormat === 'yyyy') {
        return '年份';
      }
    },
  },
  actions: {
    // 获取参保总览信息
    async loadInsGeneralData({ commit, state, dispatch }, payload) {
      if (payload && payload.insCode) {
        try {
          const res = await queryInsGeneralInfo({
            insCode: payload.insCode,
          });
          const { headData = {} } = res.data;
          commit('updateInsDetailInfo', {
            headData,
            insCode: payload.insCode,
          });
          dispatch('queryFlowData', {
            pageNo: 1,
          });
        } catch (err) {
          commit('updateInsDetailInfo', {
            errorMsg: err.errorMsg || '请求出错，请稍后重试',
          });
        }
      } else {
        my.showToast({ content: '参数错误，请重试' });
      }
    },
    // 获取参保详细信息
    async queryFlowData({ commit, state }, payload) {
      const selectedFlowItem = state.flowTypeList[state.activeTab] || {};
      const selectedFlowType = selectedFlowItem.flowType || '';
      if (selectedFlowType && state.insCode) {
        try {
          const res = await queryFlowData({
            insCode: state.insCode,
            flowType: state.flowTypeList[state.activeTab].flowType,
            beginDate: state.selectedDate[state.activeTab],
            pageNo: payload.pageNo,
            pageSize: state.pageSize,
          });
          const { flowData = {}, hasNextPage } = res.data;
          commit('updateFlowData', {
            flowData: state.flowData.concat(flowData),
            pageNo: payload.pageNo,
            hasNextPage,
          });
        } catch (err) {
          commit('updateFlowData', {
            errorMsg: err.errorMsg || '请求出错，请稍后重试',
          });
        }
      } else {
        my.showToast({ content: '参数错误，请重试' });
      }
    },
  },
});