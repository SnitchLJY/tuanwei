import { connect } from 'herculex';
Component(connect({
  mapStateToProps: ['flowData', 'hasNextPage'],
})({
  data: {
  },
  props: {
    flowType: '',
  },
  methods: {
    didMount() {
      console.log('hasNextPage');
    },
  },
}));
