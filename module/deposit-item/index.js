Component({
  data: {
    arrowDirection: 0, // 0：箭头向下，不展示详情，1：箭头向上，展示详情
    downArrow: 'https://gw.alipayobjects.com/zos/rmsportal/RfnQebAOvqIQyLIYalPB.png',
    upArrow: 'https://gw.alipayobjects.com/zos/rmsportal/HMOCvzpPhuubenzxOXed.png',
  },
  props: {
    flowItemData: {},
  },
  didUpdate() {
  },
  methods: {
    // 翻转箭头方向
    onSwitchDirection() {
      this.setData({
        arrowDirection: !this.data.arrowDirection,
      });
    },
  },
});
