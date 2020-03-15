import { connect } from 'herculex';
import moment from 'moment';
Component(connect({
  mapStateToProps: ['dateFormat', 'selectedDate', 'activeTab'],
  mapGettersToProps: ['datePickerTitle'],
})({
  data: {
  },
  props: {
  },
  methods: {
    onDatePickPopUp() {
      my.datePicker({
        format: this.data.dateFormat,
        currentDate: this.data.selectedDate[this.data.activeTab],
        startDate: moment().subtract(1, 'year').format('YYYY-MM'),
        endDate: moment().format('YYYY-MM'),
        success: (res) => {
          if (res.date) {
            this.commit('updateSelectedDate', {
              newDate: res.date,
            });
            this.commit('resetData', {
              pageNo: 1,
              flowData: [],
            });
            this.dispatch('queryFlowData', {
              beginDate: res.date,
              pageNo: 1,
            });
          }
        },
      });
    },
  },
}));
