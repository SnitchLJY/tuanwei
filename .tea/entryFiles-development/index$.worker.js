if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/mini-ali-ui/es/pagination/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/grid/index?hash=45fe1418d25fc81c09eccb62e0568b7faa62b362');
require('../../module/date-picker/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/badge/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/tabs/index?hash=b998354db5b64281090d8969355b2b3db41cda49');
require('../../module/deposit-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../module/expend-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../component/footer/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../module/quest-item/quest-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../module/flow-detail/index?hash=337e359d85641004fc13874410001268c7596811');
require('../../module/topitem/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../module/top/index?hash=bca63013d2824c0605a0e6ab87ba57468e702523');
require('../../node_modules/mini-antui/es/page-result/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../component/pageresult/index?hash=1a2f341258d23fb33746115b8f2f822c704ea9a4');
require('../../module/icon-list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../module/ins-general-head/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/tabs/tab-content/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../module/detail-list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index_saved/index?hash=d4cca3bd167d5feab8a27f08803161b39d0fcf02');
require('../../pages/index/index?hash=276e5c1ec0bf5e301d717f2156ae640aa42f7bc8');
require('../../pages/detailitem/index?hash=30aa9da126452959b799b7bc81f163733f2433b0');
require('../../pages/personaldetail/index?hash=fc2a0584a6300a17aca0c53aec800b7708b10668');
require('../../pages/assign/assign?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/questUpload/questUpload?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}