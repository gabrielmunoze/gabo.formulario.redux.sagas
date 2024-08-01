import { createAction } from '../../../../store';
import { listPeople, formItems } from '../../../../api/model/listado';

const ROOT = 'components/main/component/listDB';

export const fetch_items = createAction<listPeople, formItems>(ROOT,'fetch_items')
