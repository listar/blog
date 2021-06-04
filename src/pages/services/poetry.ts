import request from '@/pages/utils/request';



export async function poetryList(params: any) {
  return request(`${APIUrl}/api/poetry/list`, {
    method: 'POST',
    data: params,
  });
}

export async function poetryDetail(params: any) {
  return request(`${APIUrl}/api/poetry/detail`, {
    method: 'POST',
    data: params,
  });
}
