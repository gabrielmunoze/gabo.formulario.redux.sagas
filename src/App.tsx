import React from 'react';
import { Provider } from 'react-redux';
import store from './main/store';
import FormComponent from './main';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <FormComponent />
    </Provider>
  );
};

export default App;
