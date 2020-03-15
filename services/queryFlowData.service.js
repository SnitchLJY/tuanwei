/*
** 获取某类险种基础信息
*/
import { getJSON } from '../common/service';
import filteredMockData from './queryFlowData.service.mock';
export default function queryFlowData(params) {
  const mockData = filteredMockData(params);
  return getJSON('/queryFlowData.json', params, { on: true, mockData });
}
