import Mock from 'mockjs'
import user from './testUser.js'
// 请求API使用正则表达式，可以让请求中带上参数，否则带参请求不被mock拦截
Mock.mock(/\/testUser[\s\S]*?/, 'get', (options) => {   //JS方式模拟数据
  return user.page1
})
Mock.mock(/\/testStore[\s\S]*?/, 'get',  require('./test'))  //json方式模拟数据
