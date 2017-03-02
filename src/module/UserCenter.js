
//无缓存数据
import JSONPAsyncData from '../lib/JSONPAsyncData'
//优先读取缓存数据
import JSONPCacheAsyncData from '../lib/JSONPCacheAsyncData'
import {API_DOMAIN,PROTOCOL} from '../config'

//账单list
const API_BILL_LIST = "/user-web/restapi/pay/query/billlist";
//账单详情
const API_BILL_DETAIL = "/user-web/restapi/pay/query/billdetail"

function getAPIUri( path ){
  return PROTOCOL+API_DOMAIN+path
}

export default {
  myBills( pageSize, currentPage, unionId ){
    console.log('load')
    return new JSONPAsyncData(getAPIUri(API_BILL_LIST), {currentPage, pageSize, unionId});
  },
  billDetail( id, corpId, unionId ){
    return new JSONPAsyncData(getAPIUri(API_BILL_DETAIL), {id, corpId, unionId});
  },
  //获取预约详情
  reginfodetail( id, corpId ){
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/reservation/reginfodetail"), {id, corpId});
  },
  //获取当前支持的支付方式
  getPayTypes( corpId,optType,patientId){
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/pay/type"), {corpId,optType,patientId});
  },
  //服务端生成支付订单
  /**
    feeChannel 支付方式  //1、支付宝 2、微信 3、余额 5、到院支付
    optType 业务类型 //1、充值 2、缴费 3、挂号 5、预约
    optParam 业务参数
  */
  preCharge(feeChannel, optType, corpId, optParam){
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/account/preCharge"), Object.assign({}, optParam, {feeChannel,optType, corpId}));
  },
  //获取订单的支付状态
  getPayStatus(id, corpId){
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/pay/query/status"), {id, corpId})
  },
  //通过长ID获取支付状态
  getPayStatusByOutId(outTradeNo, corpId, unionId){
    // return new Promise((reslove, reject)=>{
    //   reslove({
    //     success:true,
    //     data:{
    //       id:"123",
    //       status:"300"
    //     }
    //   })
    // });
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/pay/query/statusByOutTradeNo"), {outTradeNo, corpId, unionId})
  },

  //获取号院
  /**
    corpId:corpId,
    regType:regType,
    deptCode:deptCode,
    parentDeptCode:deptCode,
    doctCode:doctCode,
    regMode:regMode,
    medAmPm:medAmPm,
    medDate:medDate,
    scheduleId:scheduleId,
  **/
  getNumbersource(corpId, regType, deptCode,doctCode, regMode, medAmPm, medDate, scheduleId){
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/common/reservation/numbersource"), {
      corpId,
      regType,
      deptCode,
      // parentDeptCode,
      doctCode,
      regMode,
      medAmPm,
      medDate,
      scheduleId
    })
  },
  //获取就诊人列表
  getPatientList(corpId, unionId){
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/patient/getList"), {corpId, unionId})
  },
  saveMyHealthyData(weight, bloodPressureDiastolic, bloodPressureSystolic, bloodGlucose, bloodLipid, idNo, unionId) {
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/ytUsers/saveMyHealthyData"), {
      weight,
      bloodPressureDiastolic,
      bloodPressureSystolic,
      bloodGlucose,
      bloodLipid,
      idNo,
      unionId
    })
  },
  //获取预约挂号优惠信息
  ///user-web/restapi/reservation/getAppointRegBenefit
  getAppointRegBenefit(corpId, regType, deptCode,doctCode, regMode, medAmPm, medDate, scheduleId, patientId, regAmount){
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/reservation/getAppointRegBenefit"), {
      corpId,
      regType,
      deptCode,doctCode,
      regMode,
      medAmPm,
      medDate,
      scheduleId,
      patientId,
      regAmount
    })
  },
  //预约 挂号

  appointCreateOrder(regMode,scheduleId,corpId,regType,deptCode,doctCode,medDate,appoNo,medAmPm,patientId,medBegTime,medEndTime, optType, feeChannel){
    // regMode == 1
    if (regMode == 1) {
      let url = "/user-web/restapi/reservation/appointCreateOrder";
      return new JSONPAsyncData(getAPIUri(url), {regMode,scheduleId,corpId,regType,deptCode,doctCode,medDate,appoNo,medAmPm,patientId,medBegTime,medEndTime, optType, feeChannel})
    }
    if(regMode == 2) {
      let url = "/user-web/restapi/reservation/regCreateOrder";
      return new JSONPAsyncData(getAPIUri(url), {regMode,scheduleId,corpId,regType,deptCode,doctCode,medDate,appoNo,medAmPm,patientId,medBegTime,medEndTime})
    }
  },

  //获取全局提示语
  getTopTips(corpId){
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/common/corp/getGuideCopy"), {corpId});
  },

  //取消预约
  cancelAppoint(id, corpId){
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/reservation/cancelappoint"), {id, corpId})
  },

  //获取法律须知，隐私声明，关于我们
  getLawInfo(unionId) {
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/common/corpNews/unionNotes"), {unionId})
  },

  //获取问题列表
  getQuestionList(corpId, unionId, type, channel) {
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/common/corpNews/newsInfo"), {corpId, unionId, type, channel})
  },

  //获取资讯详情
  getNewsDetail(unionId, id) {
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/common/corpNews/newsDetail"), {unionId, id})
  },

  cancelAppoint(id){
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/reservation/cancelappoint"), {id})
  },
  // 获取搜索结果
  getSearchResult(corpId, likeName) {
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/common/doct/searchDoctSch"), {corpId, likeName})
  },
	//添加预约挂号评价
	addEvaluate(corpId,regId,doctSkill,hospitalEnvironment,serviceAttitude,evaluate){
		return new JSONPAsyncData(getAPIUri("/user-web/restapi/corpEvaluate/addAppointRegLogEvaluate"),{corpId,regId,doctSkill,hospitalEnvironment,serviceAttitude,evaluate})
	},
	getEvaluate(corpId,sourceId,type){
		return new JSONPAsyncData(getAPIUri("/user-web/restapi/corpEvaluate/getEvaluate"),{corpId,sourceId,type})
	},
	//获取医生基本信息
	getDoctorInfo(corpId,deptCode,doctCode){
		return new JSONPAsyncData(getAPIUri("/user-web/restapi/common/doctor/getDoctAccountInfo"),{corpId,deptCode,doctCode})
	},

	//获取科室基本信息
	getDeptInfo(corpId,deptCode){
		return new JSONPAsyncData(getAPIUri("/user-web/ws/query/deptInfo"),{corpId,deptCode});
	},
	//获取病人列表
	getPatientList(corpId,unionId,patientType){
		return new JSONPAsyncData(getAPIUri("/user-web/restapi/patient/getList"),{corpId,unionId,patientType})
	},
	//获取病人信息
	getBaseInfo(corpId,unionId,patientId){
		return new JSONPAsyncData(getAPIUri("/user-web/restapi/patient/getbaseinfo"),{corpId,unionId,patientId})
	},
	//删除病人信息
	deletePatient(corpId,unionId,patientId){
		return new JSONPAsyncData(getAPIUri("/user-web/restapi/patient/del"),{corpId,unionId,patientId})
	},
	//修改或者增加病人信息
	updatePatient(corpId,unionId,date){

		if(date.id){//修改病人信息
			console.log("updatePatient==>",date)
			return new JSONPAsyncData(getAPIUri("/user-web/restapi/patient/update"),{corpId,unionId,...date})
		}else{//增加病人信息
			console.log("addPatient==>",date)
			return new JSONPAsyncData(getAPIUri("/user-web/restapi/patient/add"),{corpId,unionId,...date})
		}

	},
	//增加病人信息
	// addPatient(corpId,unionId,date){
	// 	return new JSONPAsyncData(getAPIUri("/user-web/restapi/patient/add"),{corpId,unionId,...date})
	// },
	//根据corpId,unionId判断是否需要绑卡
	isNeedCard(corpId,unionId){
		if(unionId){
			return new JSONPAsyncData(getAPIUri("/user-web/restapi/card/isNeedCardByUnionId"),{unionId})
		}else{
			return new JSONPAsyncData(getAPIUri("/user-web/restapi/card/isNeedCardByCorpId"),{corpId})
		}

	},
	//获取病人的卡列表
	getCardList(corpId,unionId,patientId){
		return new JSONPAsyncData(getAPIUri("/user-web/restapi/card/list"),{corpId,unionId,patientId})
	},
  //获取病人住院信息
  getInhosPatientInfo(unionId, corpId,patientId){
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/inhos/patientinfo"),{unionId, corpId, patientId});
  },

  //获取病人住院每日清单列表
  getInhosBillList(unionId, corpId,patientId, pageSize, pageNum){
    var visitId = 1;
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/inhos/inhosbilllist"), {unionId, patientId, corpId,pageSize, pageNum, visitId})
  },

  //获取病人住院每日清单列表
  getInhosBillDetail(unionId, corpId,patientId, date ){
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/inhos/inhosbilldetail"), {unionId, corpId, patientId, date })
  },

  //获取二级科室（改版）
  getMultiDeptsList(corpId, type) {
	  return new JSONPAsyncData(getAPIUri("/user-web/restapi/common/reservation/multiDeptsList"), {corpId, type});
  },

  //获取科室排班信息
  getSchedule(corpId, deptCode, doctCode) {
    return new JSONPAsyncData(getAPIUri("/user-web/ws/query/doct/schedule"), {corpId, deptCode, doctCode});
  },
  //医院挂号首页-获取医院信息
  getHospitalInfo(corpId, id) {
	  return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/common/reservation/hospitalinfo"), { corpId, id });
  },
  //获取科室、医生排班
  getScheduleInfoNew(corpId, type, deptCode, parentDeptCode, doctCode, id) {
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/common/reservation/scheduleinfonew"), {corpId, type, deptCode, parentDeptCode, doctCode, id});
  },
  getIndexArea(unionId) {
	  return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/common/corp/unionHome"), {unionId});
  },

  // 获取检查报告单
  getPatientInspect(unionId, corpId) {
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/ytUsers/viewPatientInspect"), {unionId, corpId})
  },
  // 获取影像报告单
  getPatientPacs(unionId, corpId) {
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/ytUsers/viewPatientPacs"), {unionId, corpId})
  },
  // 获取检查报告单详情
  getMyInspectDetail(repId, corpId) {
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/ytUsers/viewMyInspectDetail"), {repId, corpId})
  },
  // 获取影像报告单详情
  getPacsDetail(checkNo, corpId) {
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/ytUsers/viewPacsDetail"), {checkNo, corpId})
  },
  // 获取健康信息
  getMyHealthyData(currentPage, pageSize, unionId) {
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/ytUsers/viewMyHealthyData"), {currentPage, pageSize, unionId})
  },
  // 获取健康信息-2
  // http://api.daily.yuantutech.com/user-web/restapi/ytUsers/healthDataList
  healthDataList(beginTime = '', endTime = '', unionId) {
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/ytUsers/healthDataList"), {beginTime, endTime, unionId})
  },
  // 获取健康档案的详情
  getMyHealthyDataDetail(id, unionId) {
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/ytUsers/viewMyHealthyDataDetail"), {id, unionId})
  },
  // 获取健康档案的详情2
  // http://api.daily.yuantutech.com/user-web/restapi/ytUsers/healthDataDetail
  healthDataDetail(id, sourceType, unionId) {
    return new JSONPCacheAsyncData(getAPIUri("/user-web/restapi/ytUsers/healthDataDetail"), {id, sourceType, unionId})
  },
  // 保存健康档案信息2
  // https://api.daily.yuantutech.com/user-web/restapi/ytUsers/saveHealthData
  saveHealthData(data, unionId) {
    return new JSONPAsyncData(getAPIUri("/user-web/restapi/ytUsers/saveHealthData"), {
      data, unionId
    })
  }

}