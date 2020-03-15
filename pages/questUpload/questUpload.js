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
        spaceId:'',
        fileId:'',
        hideList: true,
    },
    onReady() {
        dd.getAuthCode({
            success:(res)=>{
                this.setData({
                    authCode:res.authCode
                })
                dd.httpRequest({
                    url: url+'/uploadLogin',
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
                       //dd.alert({content: JSON.stringify(res)});
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
      let that = this;
      let form = e.detail.value;
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
      dd.httpRequest({
                    url: url+'/questUpload',
                    method: 'POST',
                    data: {
                        content:JSON.stringify({
                            originatorUserId: that.data.userId,
                            deptId: that.data.deptId,
                            textForms: [
                              {name: "任务完成情况",value:e.detail.value.isDone},
                              {name: "工作汇报",value:e.detail.value.quest_report},
                              {name: "附件文件地址",value:that.data.fileId},
                        ]})
                    },
                    success: (res) => {
                        // dd.alert({content: "审批实例id：" + JSON.stringify(res)});
                        console.log("任务提交成功： "+JSON.stringify(res));
                        dd.showToast({
                            type: 'success',
                            content: '提交成功',
                            duration: 3000,
                        });  
                    },
                    fail: (res) => {
                        console.log("任务提交成功： ",res);
                        dd.showToast({
                            type: 'success',
                            content: '提交成功',
                            duration: 3000,
                        });  
                    },
                    complete: (res) => {
                        dd.hideLoading();
                    }
                    
                });
    },
    attachFile : function(e){
        console.log("发生了添加附件事件!");
        dd.uploadAttachmentToDingTalk({
    image:{multiple:true,compress:false,max:9,spaceId: "2627053174"},
    space:{spaceId:"2627053174",isCopy:1 , max:9},
    file: {spaceId:"2627053174",max:1},
    types:["photo","camera","file","space"],//PC端仅支持["photo","file","space"]
    success: (res) => {
        dd.alert({content: JSON.stringify(res)});
       /*
       {
          type:'', // 用户选择了哪种文件类型 ，image（图片）、file（手机文件）、space（钉盘文件）
          data: [
             {
               spaceId: "232323",
               fileId: "DzzzzzzNqZY",
               fileName: "审批流程.docx",
               fileSize: 1024,
               fileType: "docx"
            },
            {
               spaceId: "232323",
               fileId: "DzzzzzzNqZY",
               fileName: "审批流程1.pdf",
               fileSize: 1024,
               fileType: "pdf"
            },
            {
               spaceId: "232323",
               fileId: "DzzzzzzNqZY",
               fileName: "审批流程3.pptx",
               fileSize: 1024,
               fileType: "pptx"
             }
          ]
 
       }
        */
    },
    fail: (err) =>{
        dd.alert({
            content:JSON.stringify(err)
        })
    }
})

    },
    onLoad(){

        let _this = this;

        this.setData({
            corpId: app.globalData.corpId
        })
        
        //dd.alert({content: "step1"});
         
        
        
    }
})