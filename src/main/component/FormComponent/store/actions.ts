
import { FormDataModel, id } from './types';
import { createAction } from '../../../../store';


const ROOT = 'components/main/component/FormComponent';

export const saveValue = createAction<FormDataModel, FormDataModel>(ROOT, 'saveValue');
export const fetchItems = createAction<undefined, FormDataModel[]>(ROOT,'fetchItems')
export const deleteItemRequest = createAction<id, id>(ROOT, 'deleteItemRequest')
