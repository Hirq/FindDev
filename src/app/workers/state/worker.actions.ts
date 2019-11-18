import { Action } from '@ngrx/store';
import { Worker } from '../worker.model';
import { Update } from '@ngrx/entity';

export enum WorkerActionTypes {
    LOAD_WORKERS = "[Worker] Load Workers",
    LOAD_WORKERS_SUCCESS = "[Worker] Load Workers Success",
    LOAD_WORKERS_FAIL = "[Worker] Load Workers Fail",
    LOAD_WORKER = "[Worker] Load Worker",
    LOAD_WORKER_SUCCESS = "[Worker] Load Worker Success",
    LOAD_WORKER_FAIL = "[Worker] Load Worker Fail",
    CREATE_WORKER = "[Worker] Create Worker",
    CREATE_WORKER_SUCCESS = "[Worker] Create Worker Success",
    CREATE_WORKER_FAIL = "[Worker] Create Worker Fail",
    UPDATE_WORKER = "[Worker] Update Worker",
    UPDATE_WORKER_SUCCESS = "[Worker] Update Worker Success",
    UPDATE_WORKER_FAIL = "[Worker] Update Worker Fail",
    DELETE_WORKER = "[Worker] Delete Worker",
    DELETE_WORKER_SUCCESS = "[Worker] Delete Worker Success",
    DELETE_WORKER_FAIL = "[Worker] Delete Worker Fail",
}

export class LoadWorkers implements Action {
    readonly type = WorkerActionTypes.LOAD_WORKERS
}

export class LoadWorkersSuccess implements Action {
    readonly type = WorkerActionTypes.LOAD_WORKERS_SUCCESS

    constructor(public payload: Worker[] ) {}
}

export class LoadWorkersFail implements Action {
    readonly type = WorkerActionTypes.LOAD_WORKERS_FAIL

    constructor(public payload: string) {}
}


export class LoadWorker implements Action {
    readonly type = WorkerActionTypes.LOAD_WORKER

    constructor(public payload: number) {}
}

export class LoadWorkerSuccess implements Action {
    readonly type = WorkerActionTypes.LOAD_WORKER_SUCCESS

    constructor(public payload: Worker) {}
}

export class LoadWorkerFail implements Action {
    readonly type = WorkerActionTypes.LOAD_WORKER_FAIL

    constructor(public payload: string) {}
}

export class CreateWorker implements Action {
    readonly type = WorkerActionTypes.CREATE_WORKER

    constructor(public payload: Worker) {}
}

export class CreateWorkerSuccess implements Action {
    readonly type = WorkerActionTypes.CREATE_WORKER_SUCCESS

    constructor(public payload: Worker) {}
}

export class CreateWorkerFail implements Action {
    readonly type = WorkerActionTypes.CREATE_WORKER_FAIL

    constructor(public payload: string) {}
}

export class UpdateWorker implements Action {
    readonly type = WorkerActionTypes.UPDATE_WORKER

    constructor(public payload: Worker) {}
}

export class UpdateWorkerSuccess implements Action {
    readonly type = WorkerActionTypes.UPDATE_WORKER_SUCCESS

    constructor(public payload: Update<Worker>) {}
}

export class UpdateWorkerFail implements Action {
    readonly type = WorkerActionTypes.UPDATE_WORKER_FAIL

    constructor(public payload: string) {}
}

export class DeleteWorker implements Action {
    readonly type = WorkerActionTypes.DELETE_WORKER;

    constructor(public payload: number) {}
}

export class DeleteWorkerSuccess implements Action {
    readonly type = WorkerActionTypes.DELETE_WORKER_SUCCESS

    constructor(public payload: number) {}
}

export class DeleteWorkerFail implements Action {
    readonly type = WorkerActionTypes.DELETE_WORKER_FAIL

    constructor(public payload: string) {}
}

export type Action = 
| LoadWorkers 
| LoadWorkersSuccess 
| LoadWorkersFail
| LoadWorker
| LoadWorkerSuccess
| LoadWorkerFail
| CreateWorker
| CreateWorkerSuccess
| CreateWorkerFail
| UpdateWorker
| UpdateWorkerSuccess
| UpdateWorkerFail
| DeleteWorker
| DeleteWorkerSuccess
| DeleteWorkerFail;