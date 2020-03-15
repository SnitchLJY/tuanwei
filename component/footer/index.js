import { ABOUT_COPY } from '../../common/constant';
/**
 * 底部组件
 */
Component({
  data: {
  },
  props: {
    footerData: ABOUT_COPY,
  },
  methods: {
    onHandleCall() {
      // 拨打电话
      const { aboutCopy = {} } = this.data;
      if (!aboutCopy.tel) {
        return;
      }
      const { tel } = aboutCopy;
      my.makePhoneCall({ number: tel });
    },
  },
});
