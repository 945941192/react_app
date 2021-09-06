import { get, post } from '../routes/OS/os_utils';

// 总览
export async function getOverviewInfo(params) {
  const data = await post('/apj/os/overview/list', params)
  return data
}