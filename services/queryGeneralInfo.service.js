import { getJSON } from '../common/service';
import mockData from './queryGeneralInfo.service.mock';
export default function queryGeneralInfo(params) {
  return getJSON('/queryGeneralInfo.json', params, {on: true, mockData});
}