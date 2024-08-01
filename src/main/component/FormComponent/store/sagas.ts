import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchItems, saveValue } from './actions';


import { FormDataModel } from './types';
import { addValue, getItems } from '../../../../indexedDB';
import { ActionPayload } from '../../../../store';
import { formItems } from '../../../../api/model/listado';

function* saveValueSaga(action: ActionPayload<FormDataModel>): IterableIterator<unknown> {
  try {
    yield call(addValue as (formData: FormDataModel) => Promise<void>, action.payload);
    yield put(saveValue.success(action.payload));
  } catch (e) {
    console.error('Error saving value to IndexedDB', e);
  }
}

function* fetchItemsSaga(action: ActionPayload<''>): IterableIterator<unknown> {
  try {
    const items = yield call(getItems);
    if(items){
      yield put(fetchItems.success(items as formItems));
    }
    
  } catch (error:any) {
    yield put(fetchItems.failure(error));
  }
}

const sagas = [
  takeLatest(saveValue.START, saveValueSaga)
]

export default sagas;
