import { combineReducers } from 'redux';
import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { listPeople, modelItems } from '../../../../api/model/listado';
import { fetch_items } from './actions';
import { ActionPayload, ActionStatus, ActionTracer } from '../../../../store';

export type State = {
  items: [],
  actions: {
    fetch_items: ActionTracer
  }
}



const initialState: State = {
  items: [],
  actions: {
    fetch_items: {
      status: ActionStatus.DEFAULT,
      message: ''
    }
  }
}


const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase(fetch_items.START, (state) => {
    state.actions.fetch_items.status = ActionStatus.START
  })
  .addCase(fetch_items.START, (state, action: ActionPayload<modelItems>) => {
    state.actions.fetch_items.status = ActionStatus.SUCCESS
  })
  .addCase(fetch_items.START, (state) => {
    state.actions.fetch_items.status = ActionStatus.DEFAULT
  })
})

//export type RootState = ReturnType<typeof rootReducer>;
export default reducer;
