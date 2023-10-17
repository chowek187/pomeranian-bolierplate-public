import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickRouterterMetaData } from '../../Exercises/ReactOnClick/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { UseEffectsRouterterMetaData } from './UseEffects/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { ReactUseRefMetaData } from './ReactUseRef/router-data';
export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterterMetaData,
  MaterialUIBasicElementsMetaData,
  UseEffectsRouterterMetaData,
  ToDoWithServerMetaData,
  ReactUseRefMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
