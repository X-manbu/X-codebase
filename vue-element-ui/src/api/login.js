import request from '@/utils/request'

// 测试接口
export function getLogin() {
  return request({
    url: '/public/login',
    method: 'post'
  })
}