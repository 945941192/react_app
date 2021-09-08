import { get, post } from '../service/utils';

// 总览
export async function getSarTableInfo(params) {
  const data = await post('/apj/os/overview/list', params)
  return data
}

// 总览
export async function getsomeTh(params) {
  const data = await get('/apj/os/overview/list', params)
  return data
}