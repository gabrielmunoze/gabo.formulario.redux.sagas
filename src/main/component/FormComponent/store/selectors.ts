import { ActionTracer } from "../../../../store"
import { FormState } from "./reducer"
import { FormDataModel } from "./types"

type BaseState = {
    web: {
        form: FormState
    }
}

export const formSelector = (state: BaseState): FormDataModel | null => state.web.form.current;
export const itemsSelector = (state: BaseState): [] => state.web.form.items;

export const saveValueActionSelector = (state: BaseState): ActionTracer => state.web.form.actions.saveValue;
export const fetchItemsActionSelector = (state: BaseState): ActionTracer => state.web.form.actions.fetchItems;