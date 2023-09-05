import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as HitTheMoleGame } from './MoleGame/router-data';
import { blockRouterMetaData as MemoGame } from './MemoGame/router-data';
import { blockRouterMetaData as PromisesExercise } from './Promises and API/router-data';

export const blockRouterMetaData = [
  MemoGame,
  PromisesExercise,
  HitTheMoleGame,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
