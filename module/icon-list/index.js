import { connect } from 'herculex';
/**
 * 首页个人参保信息列表组件
 */
Component(connect({ mapStateToProps: ['insGeneralInfo'],
})({
  methods: {
    onHandleItem(e) {
      const { item } = e.target.dataset;
      const { insCode = '', insName = '', hasDetail = '' } = item;
      if (hasDetail.toString() !== 'true') {
        return;
      }
      my.navigateTo({
        url: `/pages/detailitem/index?insCode=${insCode}&title=${insName}`,
      });
    },
  },
}));
