import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { deleteItemRequest, fetchItems, saveValue } from './actions';


import { FormDataModel, id } from './types';
import { addValue, getItems, deleteItem } from '../../../../indexedDB';
import { ActionPayload } from '../../../../store';
import { formItems } from '../../../../api/model/listado';



function* saveValueSaga(action: ActionPayload<FormDataModel>): IterableIterator<unknown> {
  try {
    yield call(addValue as (formData: FormDataModel) => Promise<void>, action.payload);
    yield put(fetchItems.start())
    yield put(saveValue.success(action.payload));
    
  } catch (e) {
    console.error('Error saving value to IndexedDB', e);
  }
}

function* fetchItemsSaga(action: ActionPayload<''>): IterableIterator<unknown> {
  try {
    const items = yield call(getItems);
    if(items){
      yield put(fetchItems.success(items as FormDataModel[]));
    }
    
  } catch (error:any) {
    yield put(fetchItems.failure(error));
  }
}

function* deleteItemsSaga(action: ActionPayload<id>): IterableIterator<unknown> {
  try {
    yield call(deleteItem, action.payload);
    yield put(fetchItems.start())
    yield put(deleteItemRequest.success(action.payload));
    
  } catch (error:any) {
    
  }
}

const sagas = [
  takeLatest(saveValue.START, saveValueSaga),
  takeLatest(fetchItems.START, fetchItemsSaga),
  takeLatest(deleteItemRequest.START, deleteItemsSaga)
]

export default sagas;
