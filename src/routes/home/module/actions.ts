import { createAction } from '@helpers/action';

export namespace ActionTypes {
  export const UPDATE_TITLE = '[home] UPDATE_TITLE';
  export const CLEAR_TITLE = '[home] CLEAR_TITLE';
}

export const Actions = {
  updateTitle: (title: string) => createAction(ActionTypes.UPDATE_TITLE, title),
  clearTitle: () => createAction(ActionTypes.CLEAR_TITLE)
};
