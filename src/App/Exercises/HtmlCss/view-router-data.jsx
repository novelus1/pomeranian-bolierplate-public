import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { TablesMetaData } from './Tables/router-data';
import { FigmaFloatDesignMetaData } from './FigmaFloatDesign/router-data';

export const blockRouterMetaData = [
  TablesMetaData,
  FigmaFloatDesignMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
