import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FormComponent from './FormComponent';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <FormComponent />
    </Provider>
  );
};

export default App;
