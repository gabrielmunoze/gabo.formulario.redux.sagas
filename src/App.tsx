import React from 'react';
import { Provider } from 'react-redux';

import FormComponent from './main/component/FormComponent';
import store from './store/config';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <FormComponent />
    </Provider>
  );
};

export default App;
