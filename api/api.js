'use strict';

var _wxRequest = require('./../utils/wxRequest.js');


// var textApi ="https://www.easy-mock.com/mock/5bc692f3e6f1f6491a3fb625/" //mock数据地址
// var api2 = 'https://mini3.pinecc.cn/';//测试库r
var api2 = 'https://recruit.czucw.com/'; //正式库
// appId ="wx75055d972d69a26f" //测试
// appId = "wxdff1a01c3575172c" //正式库
// var api2 = 'https://recruit.pinecc.cn/'; // 测试库
var getUrl = function getUrl(){
  var api1 = api2;
  return api1;
};
//登录 注册

var login = function login(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Login/login.html');
}; //登录
var getUserInfo = function getUserInfo(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Login/getUserInfo.html');
}; //获取用户信息接口
var webInfo = function webInfo(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/webInfo.html');
}; //获取小程序信息
var disttrictList = function disttrictList(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Addr/disttrictList.html');
}; //筛选城市
var blList = function blList(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/blList.html');
}; //伯乐
var workList = function workList(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Work/workList.html');
}; //职位列表
var recWorkList = function recWorkList(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Work/recWorkList.html');
}; //职位列表
var workTypeList = function workTypeList(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Work/workTypeList.html');
}; //职位分类列表

var updateUserInfo = function updateUserInfo(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/updateUserInfo.html');
}; //完善信息
var sendProfileSms = function sendProfileSms(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Sms/sendProfileSms.html');
}; //短信验证码
var advance = function advance(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Salary/advance.html');
}; //预支工资
var cityList = function cityList(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Addr/cityList.html');
}; //在招城市
var applyWork = function applyWork(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Work/applyWork.html');
}; //申请工作
var collectWork = function collectWork(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Work/collectWork');
}; //收藏工作
var unCollectWork = function unCollectWork(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Work/unCollectWork');
}; //收藏工作
var applyWorkList = function applyWorkList(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Work/applyWorkList.html');
}; //申请工作记录
var collectWorkList = function collectWorkList(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Work/collectWorkList.html');
}; //收藏的工作记录


var applyTrain = function applyTrain(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Train/applyTrain.html');
}; //报名培训
var addTrainWill = function addTrainWill(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Train/addTrainWill.html');
}; //培训需求申请

//投诉建议  我的二维码
var shareQrPic = function shareQrPic(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/shareQrPic');
}; //二维码
var complain = function complain(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/complain.html');
}; //投诉建议

var teamUserList = function teamUserList(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/teamUserList.html');
}; //我的邀请团队列表
var teamUserGroupList = function teamUserGroupList(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/teamUserGroupList.html');
}; //我的邀请团队列表
var teamUserGroup = function teamUserGroup(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + '/api/User/teamUserGroup.html');
}; //我的邀请
var SalaryTeamPrizeList = function SalaryTeamPrizeList(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Salary/teamPrizeList.html');
}; //薪资组成
var salaryList = function salaryList(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Salary/salaryList.html');
}; //薪资列表
var salaryDetailByMonth = function salaryDetailByMonth(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Salary/salaryDetailByMonth.html');
}; //薪资组成（查询）
var withdraw = function withdraw(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/withdraw.html');
}; //申请提现
var withdrawList = function withdrawList(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/withdrawList.html');
}; //提现记录
var resumeFill = function resumeFill(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api//User/resumeFill.html');
}; //身份认证提交
var workDetailSharePic = function workDetailSharePic(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/workDetailSharePic');
}; //生成岗位详情页分享图片
var advanceCompany = function advanceCompany(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Salary/advanceCompany');
}; //预支工资页面对应公司列表

var defaultDistrict = function defaultDistrict(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Addr/defaultDistrict');
}; //地址列表
var uploadimg = function uploadimg(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + '/api/User/bindPic2UserInfo');
};//上传身份证
var prov = function prov(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Addr/prov');
}; //三级联动选择省份返回市/区数据---三级联动选择城市返回区数据
var city = function city(params) {
    return (0, _wxRequest.wxRequest)(params, api2 + 'api/Addr/city');
}; //三级联动选择省份返回市/区数据---三级联动选择城市返回区数据


//mock数据
// 获取跳转页面

var userBelong = function userInfo(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/userBelong.html');
};
//个人资料
var userInfo = function userInfo(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/userInfo.html');
};
//报名支付
var miniPay = function wxpay(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/weixinpay/miniPay.html');
};
//小时工
var miniWorkList = function miniWorkList(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Work/miniWorkList.html');
};
//职位详情获取广告图
var Adv = function Adv(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Index/Adv.html');
}; 


 //职位详情
var workDetail = function workDetail(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Work/workDetail.html');
};
//培训列表
var trainList = function trainList(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Train/trainList.html');
}; 
//培训详情
var trainDetail = function trainDetail(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Train/trainDetail.html');
}; 
//活动列表
var activityList = function activityList(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Train/activityList.html');
};
//活动详情
var activityDetail = function activityDetail(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Train/activityDetail.html');
}; 
//活动分类列表
var ActivityTypeList = function ActivityTypeList(params){
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Train/activityTypeList.html');
};
//我的报名培训列表
var applyTrainList = function applyTrainList(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Train/applyTrainList.html');
};


//简历列表
var resumeList = function resumeList(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Resume/resumeList.html');
};

//修改简历状态及备注
var changeResume = function changeResume(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Resume/changeResume.html');
};
//我的钱包概览-佣金
var purseInfo = function purseInfo(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Cash/purseInfo.html');
}; 
//资金明细
var Cashdetail = function Cashdetail(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Cash/detail.html');
}; 
//新进款项
var CashnewIn = function CashnewIn(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Cash/newIn.html');
}; 
//带入款项
var CashWillIn = function CashWillIn(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Cash/WillIn.html');
}; 

//消息通知列表
var noticeList = function noticeList(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Notice/noticeList.html');
};
//公司信息
var companyInfo = function companyInfo(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Work/companyInfo.html');
};

//公司职位列表
var companyworkList = function companyworkList(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Work/companyWorkList.html');
}; 
//我的奖励
var UserTeamPrizeList = function UserTeamPrizeList(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/teamPrizeList.html');
}; 

//获取用户的formid
var getUserFormId = function UserTeamPrizeList(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/getUserFormId.html');
}; 
//读取消息
var noticeRead = function noticeRead(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/Notice/noticeRead.html');
}; 
//分享活动图片
var trainDetailSharePic = function noticeRead(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/trainDetailSharePic');
}; 
//检查是否验证过身份信息
var checkUserIdnum = function checkUserIdnum(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/checkUserIdnum');
}; 
// 申请成为工头
var applyHead = function applyHead(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/applyHead.html');
}; 
// 申请发布岗位
var applyRecruit = function applyRecruit(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/User/applyRecruit.html');
}; 
// 上传执照
var upload = function applyRecruit(params) {
  return (0, _wxRequest.wxRequest)(params, api2 + 'api/File/uploadImagesBase64.html');
}; 
//评价
module.exports = {
    login: login, getUserInfo: getUserInfo, webInfo: webInfo, workList: workList, workTypeList: workTypeList, disttrictList: disttrictList, blList: blList, workDetail: workDetail, userInfo: userInfo,
    updateUserInfo: updateUserInfo, sendProfileSms: sendProfileSms, advance: advance, applyWork: applyWork, applyWorkList: applyWorkList, collectWorkList: collectWorkList, trainList: trainList,
  trainDetail: trainDetail, addTrainWill: addTrainWill, Cashdetail: Cashdetail, CashnewIn: CashnewIn, CashWillIn: CashWillIn, teamUserList: teamUserList, teamUserGroup: teamUserGroup, teamUserGroupList: teamUserGroupList, applyRecruit: applyRecruit, applyHead: applyHead, upload: upload,
    UserTeamPrizeList: UserTeamPrizeList, SalaryTeamPrizeList: SalaryTeamPrizeList, salaryList: salaryList, complain: complain, recWorkList: recWorkList, withdraw: withdraw, withdrawList: withdrawList,
    collectWork: collectWork, cityList: cityList, applyTrain: applyTrain, shareQrPic: shareQrPic, resumeFill: resumeFill, salaryDetailByMonth: salaryDetailByMonth, unCollectWork: unCollectWork,
    workDetailSharePic: workDetailSharePic, advanceCompany: advanceCompany, defaultDistrict:defaultDistrict, prov:prov, city: city,
    // mock数据
  Adv: Adv, activityList: activityList, ActivityTypeList: ActivityTypeList, activityDetail: activityDetail, applyTrainList: applyTrainList, resumeList: resumeList, changeResume: changeResume, purseInfo: purseInfo, noticeList: noticeList, companyInfo: companyInfo, companyworkList: companyworkList, getUserFormId: getUserFormId, miniPay: miniPay, miniWorkList: miniWorkList, noticeRead: noticeRead, trainDetailSharePic: trainDetailSharePic, userBelong: userBelong, checkUserIdnum: checkUserIdnum, getUrl: getUrl

};
