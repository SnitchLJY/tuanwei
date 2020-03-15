import { getJSON } from '../common/service';
import mockData from './queryPersonalDetailInfo.service.mock';
export default function queryGeneralInfo(params) {
  return getJSON('/queryPersonalDetailInfo.json', params, {on: true, mockData});
}