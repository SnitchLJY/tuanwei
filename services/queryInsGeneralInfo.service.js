/*
** 获取某类险种基础信息
*/
import { getJSON } from '../common/service';
import mockData from './queryInsGeneralInfo.service.mock';
export default function queryInsGeneralInfo(params) {
  return getJSON('/queryInsGeneralInfo.json', params, {on: true, mockData});
}