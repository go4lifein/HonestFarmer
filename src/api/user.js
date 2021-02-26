import {API_URL, getRequest} from '../helpers/utils';

export function getHarvestReport(encryptedId) {
  let url = `${API_URL}/${encryptedId}/trace`;
  return getRequest(url);
}