import { applyMiddleware, combineReducers, compose, configureStore, createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducer';
import { createLogger } from 'redux-logger';


const sagaMiddleware = createSagaMiddleware();

const middleware = compose(applyMiddleware(sagaMiddleware, createLogger()))


const store = createStore(combineReducers(rootReducer), middleware);

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export default store;


// // src/store.ts
// // src/store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import formReducer from './reducer';
// import rootSaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: {
//     form: formReducer,
//   },
//   middleware: [sagaMiddleware],
// });

// sagaMiddleware.run(rootSaga);

// export type RootState = ReturnType<typeof store.getState>;
// export default store;

