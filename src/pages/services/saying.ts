import request from '@/pages/utils/request';



export async function sayingList(params: any) {
  return request('/api/saying/list', {
    method: 'POST',
    data: params,
  });
}

export async function sayingDetail(params: any) {
  return request('/api/saying/detail', {
    method: 'POST',
    data: params,
  });
}
