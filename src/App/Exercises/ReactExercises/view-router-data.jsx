import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickRouterterMetaData } from '../../Exercises/ReactOnClick/router-data';
export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
