import request from '../utils/request';

export function getNavs() {
  return request('/api/v1/navs');
}