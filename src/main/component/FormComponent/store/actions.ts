
import { FormDataModel } from './types';
import { formItems, listPeople } from '../../../../api/model/listado';
import { createAction } from '../../../../store';


const ROOT = 'components/main/component/FormComponent';

export const saveValue = createAction<FormDataModel, FormDataModel>(ROOT, 'saveValue');
export const fetchItems = createAction<listPeople, formItems>(ROOT,'fetchItems')
