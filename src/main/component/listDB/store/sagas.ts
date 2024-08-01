import { call, put, takeLatest } from 'redux-saga/effects';
import { getItems } from '../../../../indexedDB';
import { fetch_items } from './actions';
import { ActionPayload } from '../../../../store';

function* fetchItemsSaga(action: ActionPayload<''>): IterableIterator<unknown> {
  try {
    const items = yield call(getItems);
    yield put(fetch_items.success(items));
  } catch (error:any) {
    yield put(fetch_items.failure(error));
  }
}

const sagas = [
  takeLatest(fetch_items.START, fetchItemsSaga)
]

export default sagas
