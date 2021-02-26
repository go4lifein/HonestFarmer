import {API_URL, getRequest, postRequest} from '../helpers/utils';

export function getAllFarmers() {
  let url = `${API_URL}/admin/getAllFarmers`;
  return getRequest(url);
}

export function getAllProducts() {
  let url = `${API_URL}/admin/getAllProducts`;
  return getRequest(url);
}

export function addHarvestReport(data) {
  let url = `${API_URL}/admin/addHarvestReport`;
  return postRequest(url, data);
}

export function getAdmin() {
  let url = `${API_URL}/admin/auth/getAdmin`;
  return getRequest(url);
}

export function loginAdmin(data) {
  let url = `${API_URL}/admin/auth/login`;
  return postRequest(url, data);
}