import request from '@/utils/request'
// 登录有关API调用
export const login = (username, password) => {
  return request.post('/login', {
    username: username,
    password: password
  })
}
