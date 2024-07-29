import { createAction } from '@reduxjs/toolkit';
import { FormData } from './types';

export const saveValue = createAction<FormData>('SAVE_VALUE');
export const saveValueSuccess = createAction<FormData>('SAVE_VALUE_SUCCESS');
