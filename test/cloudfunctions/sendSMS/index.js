// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    try{
  const result = await cloud.openapi.cloudbase.sendSMS({
      env:'shaky-2gd38t77a0797611',
      content:'Verification code isL '+event.code,
      //path:'/index.html',
      phoneNumberList:[
          "+86"+event.phone
      ]
  })
  return result
    }catch (err){
        return err
    }
    
}