
import { all } from 'redux-saga/effects';
import formData from '../main/component/FormComponent/store/sagas';

const sagas = [
    ...formData
]

export default function* rootSaga(): IterableIterator<unknown> {
    yield all([...sagas])
}