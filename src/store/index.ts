import {
    createAction as createActionReduxToolkit,
    createReducer as createReducerReduxToolkit,
    PayloadActionCreator
  } from '@reduxjs/toolkit';
  import {combineReducers as combineReducersRedux} from 'redux';
  
  /**
   * Para monitorear las acciones.
   */
  export type ActionTracer = {
    status: ActionStatus;
    message: string;
  };
  
  /**
   * Constantes para el estado de las acciones monitoreadas.
   */
  export enum ActionStatus {
    DEFAULT = 'default',
    START = 'start',
    SUCCESS = 'success',
    FAILURE = 'failure'
  }
  
  /**
   * Helper para tipear acciones en reducers y sagas.
   */
  export type ActionPayload<T> = {
    type: string;
    payload: T;
  };
  
  /**
   * Crea una acción extendida que posee acciones y constantes para
   * controlar los datos. Recibe <Start, Success> como tipo de dato para los payloads de
   * las acciones de inicio y éxito.
   *
   * @typeParam Start - Payload para la acción START. Si no posee usar undefined.
   * @typeParam Success - Payload para la acción SUCCESS. Si no posee usar undefined.
   * @param root Prefijo para las acciones, compartido entre
   * acciones del mismo componente.
   * @param type - El nombre de la acción.
   * @returns Un objeto con las acciones obj.default() obj.start() obj.success()
   * obj.failure() y las constantes obj.FAILURE obj.START obj.SUCCESS obj.FAILURE
   */
  export const createAction = <Start, Success>(
    root: string,
    type: string
  ): {
    default: PayloadActionCreator<undefined>;
    start: PayloadActionCreator<Start>;
    success: PayloadActionCreator<Success>;
    failure: PayloadActionCreator<Error>;
    DEFAULT: string;
    START: string;
    SUCCESS: string;
    FAILURE: string;
  } => {
    const upperSnakeCaseType = type.replace(/([A-Z])/g, (g) => `_${g[0]}`).toUpperCase();
    const action = {
      default: createActionReduxToolkit<undefined>(`${root}/${upperSnakeCaseType}_DEFAULT`),
      start: createActionReduxToolkit<Start>(`${root}/${upperSnakeCaseType}_START`),
      success: createActionReduxToolkit<Success>(`${root}/${upperSnakeCaseType}_SUCCESS`),
      failure: createActionReduxToolkit<Error>(`${root}/${upperSnakeCaseType}_FAILURE`),
      DEFAULT: `${root}/${upperSnakeCaseType}_DEFAULT`,
      START: `${root}/${upperSnakeCaseType}_START`,
      SUCCESS: `${root}/${upperSnakeCaseType}_SUCCESS`,
      FAILURE: `${root}/${upperSnakeCaseType}_FAILURE`
    };
  
    return action;
  };
  
  /**
   * Crea un reducer por medio de un builder.
   */
  export const createReducer = createReducerReduxToolkit;
  
  /**
   * Crea un reducer combinado.
   */
  export const combineReducers = combineReducersRedux;
  