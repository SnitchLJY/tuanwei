let app = getApp();

//替换成开发者后台设置的安全域名
let url = "http://193.112.8.111/GetTrainInfo.asmx";

Page({
    data:{
        corpId: '',
        authCode:'',
        userId:'',
        userName:'',
        deptId:'',
        hideList: true,
        selected_time:'',
    },
    onReady() {
        dd.getAuthCode({
            success:(res)=>{
                this.setData({
                    authCode:res.authCode
                })
                dd.httpRequest({
                    url: url+'/login',
                    method: 'POST',
                    data: {
                        code: res.authCode
                    },
                    dataType: 'json',
                    success: (res) => {
                        // dd.alert({content: "step2"});
                        console.log('success----',res)
                        let userId = res.data.userId;
                        let userName = res.data.userName;
                        let deptId = res.data.deptId;
                        this.setData({
                            userId:userId,
                            userName:userName,
                            deptId:deptId
                        })
                    },
                    fail: (res) => {
                        console.log("httpRequestFail---",res)
                       dd.alert({content: "httpRequestFail---"+JSON.stringify(res)});
                    },
                    complete: (res) => {
                        dd.hideLoading();
                    }
                    
                });
            },
            fail: (err)=>{
                dd.alert({content: "step3"});
                dd.alert({
                    content: JSON.stringify(err)
                })
            }
        })
    },
    formSubmit: function(e) {
      console.log('form发生了submit事件，携带数据为：',e.detail.value);
      dd.httpRequest({
                    url: url+'/assign',
                    method: 'POST',
                    data: {content:JSON.stringify({
                        originatorUserId: this.data.userId,
                        deptId: this.data.deptId,
                        textForms: [
                          {name: "任务标题",value:e.detail.value.quest_title},
                          {name: "任务要求",value:e.detail.value.quest_requirement},
                          {name: "截止时间",value:this.data.selected_time},
                        ]})
                    },
                    // headers:{'Content-Type': 'application/json'},
                    // dataType: 'json',
                    success: (res) => {
                        // dd.alert({content: "审批实例id：" + JSON.stringify(res)});
                        console.log("任务发布成功： " + JSON.stringify(res))
                        dd.showToast({
                            type: 'success',
                            content: '发布成功',
                            duration: 3000,
                        });                      
                    },
                    fail: (res) => {
                        console.log("任务发布失败： ",res);
                        dd.showToast({
                            type: 'success',
                            content: '发布成功',
                            duration: 3000,
                        });  
                    },
                    complete: (res) => {
                        dd.hideLoading();
                    }
                    
                });
    },

    selectTime : function(){
      dd.datePicker({
        format: 'yyyy-MM-dd HH:mm',
        success: (res) => {
          console.log(res.date);
          this.setData({
            selected_time:res.date,
          })
          },
      });
    },

    onLoad(){



        this.setData({
            corpId: app.globalData.corpId
        })
        
        //dd.alert({content: "step1"});
         
        
        
    }
})