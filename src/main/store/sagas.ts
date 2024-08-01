import { all, call, put, takeEvery } from 'redux-saga/effects';
import { saveValue } from './actions';
import { saveValueSuccess } from './actions';
import { addValue } from '../../indexedDB';
import { FormData } from './types';

function* saveValueSaga(action: ReturnType<typeof saveValue>): Generator {
  try {
    yield call(addValue as (formData: FormData) => Promise<void>, action.payload);
    yield put(saveValueSuccess(action.payload));
  } catch (e) {
    console.error('Error saving value to IndexedDB', e);
  }
}

function* watchSaveValue() {
  yield takeEvery(saveValue.type, saveValueSaga);
}

export default function* rootSaga() {
  yield all([watchSaveValue()]);
}
