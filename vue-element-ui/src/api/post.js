// 导入封装好的 axios 请求
import request from '@/utils/request'

// 
export function getAllData(query) {
  return request({
    // 请求地址
    url: '/project/test/',
    // 请求方法 post get put delete
    method: 'post',
    params: query
  })
}