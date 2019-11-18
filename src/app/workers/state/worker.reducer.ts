import * as workerActions from "./worker.actions";
import { Worker } from "../worker.model";
import * as fromRoot from "../../state/app-state";

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface WorkerState extends EntityState<Worker> {
  selectedWorkerId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  workers: WorkerState
}

export const workerAdapter: EntityAdapter<Worker> = createEntityAdapter<Worker>();

export const defaultWorker: WorkerState = {
  ids: [],
  entities: {},
  selectedWorkerId: null,
  loaded: false,
  loading: false,
  error: ""
};

export const initialState = workerAdapter.getInitialState(defaultWorker);

export function workerReducer(
  state = initialState,
  action: workerActions.Action
): WorkerState {
  switch(action.type) {

    case workerActions.WorkerActionTypes.LOAD_WORKERS_SUCCESS: {
      return workerAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case workerActions.WorkerActionTypes.LOAD_WORKERS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case workerActions.WorkerActionTypes.LOAD_WORKER_SUCCESS: {
      return workerAdapter.addOne(action.payload, {
        ...state,
        selectedWorkerId: action.payload.id
      });
    }
    case workerActions.WorkerActionTypes.LOAD_WORKER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case workerActions.WorkerActionTypes.CREATE_WORKER_SUCCESS: {
      return workerAdapter.addOne(action.payload, state);
    }
    case workerActions.WorkerActionTypes.CREATE_WORKER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case workerActions.WorkerActionTypes.UPDATE_WORKER_SUCCESS: {
      return workerAdapter.updateOne(action.payload, state);
    }
    case workerActions.WorkerActionTypes.UPDATE_WORKER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case workerActions.WorkerActionTypes.DELETE_WORKER_SUCCESS: {
      return workerAdapter.removeOne(action.payload, state);
    }
    case workerActions.WorkerActionTypes.DELETE_WORKER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

const getWorkerFeatureState = createFeatureSelector<WorkerState>(
  "workers"
);

export const getWorkers = createSelector(
  getWorkerFeatureState,
  workerAdapter.getSelectors().selectAll
);

export const getWorkersLoading = createSelector(
  getWorkerFeatureState,
  (state: WorkerState) => state.loading
);

export const getWorkersLoaded = createSelector(
  getWorkerFeatureState,
  (state: WorkerState) => state.loaded
);

export const getError = createSelector(
  getWorkerFeatureState,
  (state: WorkerState) => state.error
);

export const getCurrentWorkerId = createSelector(
  getWorkerFeatureState,
  (state: WorkerState) => state.selectedWorkerId
);

export const getCurrentWorker = createSelector(
  getWorkerFeatureState,
  getCurrentWorkerId,
  state => state.entities[state.selectedWorkerId]
);