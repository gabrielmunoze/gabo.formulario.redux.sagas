import { combineReducers } from ".";

import form from '../main/component/FormComponent/store/reducer';

const web = combineReducers({
    form
})

const rootReducer = {web}

export default rootReducer;