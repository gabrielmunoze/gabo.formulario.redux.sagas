import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchItems, saveValue, deleteItemRequest } from './actions';
import { ActionPayload, ActionStatus, ActionTracer } from '../../../../store';
import { modelItems } from '../../../../api/model/listado';
import { FormDataModel } from './types';
import { deleteItem } from '../../../../indexedDB';

export interface FormState {
  current: FormDataModel | null;
  items: FormDataModel[]
  actions: {
    saveValue: ActionTracer,
    fetchItems: ActionTracer,
    deleteItemRequest: ActionTracer
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
    },
    deleteItemRequest: {
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
    .addCase(fetchItems.SUCCESS, (state, action: ActionPayload<FormDataModel[]>) => {
      state.actions.fetchItems.status = ActionStatus.SUCCESS;
      state.items = action.payload;
    })
    .addCase(fetchItems.DEFAULT, (state) => {
      state.actions.fetchItems.status = ActionStatus.DEFAULT
    })
    .addCase(deleteItemRequest.START, (state) => {
      state.actions.deleteItemRequest.status = ActionStatus.DEFAULT
    })
    .addCase(deleteItemRequest.SUCCESS, (state) => {
      state.actions.deleteItemRequest.status = ActionStatus.DEFAULT
    })
    .addCase(deleteItemRequest.DEFAULT, (state) => {
      state.actions.deleteItemRequest.status = ActionStatus.DEFAULT
    })
    ;
});

export default reducer;
