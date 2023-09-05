import { getParsedRouterDataList } from '../../router-data/parseRouterData';


import { blockRouterMetaData as ToDoList } from './ToDoWithServer/router-data';
import { blockRouterMetaData as Forms } from './Forms/router-data';


export const blockRouterMetaData = [
  ToDoList,
  Forms,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
