import { ActionsUnion } from '@helpers/action';

import { Actions as HomeActions } from '@routes/home/module/actions';

export type RootActions = ActionsUnion<
  typeof HomeActions>;