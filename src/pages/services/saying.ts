import request from '@/pages/utils/request';



export async function sayingList(params: any) {
  return request(`${APIUrl}/api/saying/list`, {
    method: 'POST',
    data: params,
  });
}

export async function sayingDetail(params: any) {
  return request(`${APIUrl}/api/saying/detail`, {
    method: 'POST',
    data: params,
  });
}
