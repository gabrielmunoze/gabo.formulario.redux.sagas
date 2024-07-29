import { combineReducers } from 'redux';
import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { FormData, FormState } from './types';


export const saveValue = createAction<FormData>('SAVE_VALUE');
export const saveValueSuccess = createAction<FormData>('SAVE_VALUE_SUCCESS');

const initialFormState: FormState = {
  value: null,
  status: 'idle',
};

const formReducer = createReducer(initialFormState, (builder) => {
  builder
    .addCase(saveValue, (state) => {
      state.status = 'loading';
    })
    .addCase(saveValueSuccess, (state, action: PayloadAction<FormData>) => {
      state.status = 'succeeded';
      state.value = action.payload;
    });
});

const rootReducer = combineReducers({
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
