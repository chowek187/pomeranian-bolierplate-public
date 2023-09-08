import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickRouterterMetaData } from '../../Exercises/ReactOnClick/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterterMetaData,
  MaterialUIBasicElementsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
