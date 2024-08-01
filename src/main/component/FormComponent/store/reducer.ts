import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchItems, saveValue } from './actions';
import { ActionPayload, ActionStatus, ActionTracer } from '../../../../store';
import { modelItems } from '../../../../api/model/listado';
import { FormDataModel } from './types';

export interface FormState {
  current: FormDataModel | null;
  
  items: []
  actions: {
    saveValue: ActionTracer,
    fetchItems: ActionTracer
  }
}

const initialFormState: FormState = {
  current: null,
  items:[],
  actions: {
    saveValue: {
      status: ActionStatus.DEFAULT,
      message: ''
    },
    fetchItems: {
      status: ActionStatus.DEFAULT,
      message: ''
    }
  }

};

const reducer = createReducer(initialFormState, (builder) => {
  builder
    .addCase(saveValue.START, (state) => {
      state.actions.saveValue.status = ActionStatus.START;
    })
    .addCase(saveValue.SUCCESS, (state, action: ActionPayload<FormDataModel>) => {
      state.actions.saveValue.status = ActionStatus.SUCCESS;
      state.current = action.payload;
    })
    .addCase(fetchItems.START, (state) => {
      state.actions.fetchItems.status = ActionStatus.START
    })
    .addCase(fetchItems.SUCCESS, (state, action: ActionPayload<modelItems>) => {
      state.actions.fetchItems.status = ActionStatus.SUCCESS
    })
    .addCase(fetchItems.DEFAULT, (state) => {
      state.actions.fetchItems.status = ActionStatus.DEFAULT
    })
    ;
});

export default reducer;
