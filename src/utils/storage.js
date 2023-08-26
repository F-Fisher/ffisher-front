// 通用键名
const INFO_KEY = 'fish_info'
export const getInfo = () => {
  const defaultObj = { token: '', uid: '' }
  const res = localStorage.getItem(INFO_KEY)
  return res ? JSON.parse(res) : defaultObj
}
export const setInfo = () => {

}
export const remove = () => {

}
