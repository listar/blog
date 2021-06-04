import request from '@/pages/utils/request';



export async function articleList(params: any) {
  return request('/api/article/list', {
    method: 'POST',
    data: params,
  });
}

export async function articleDetail(params: any) {
  return request('/api/article/detail', {
    method: 'POST',
    data: params,
  });
}
