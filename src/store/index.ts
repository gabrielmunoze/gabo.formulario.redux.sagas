import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

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

