import request from '@/pages/utils/request';



export async function articleList(params: any) {
  return request(`${APIUrl}/api/article/list`, {
    method: 'POST',
    data: params,
  });
}

export async function articleDetail(params: any) {
  return request(`${APIUrl}/api/article/detail`, {
    method: 'POST',
    data: params,
  });
}
