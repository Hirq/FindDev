import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { WorkerService } from '../worker.service'
import * as workerActions from "./worker.actions";
import { Worker } from "../worker.model";

@Injectable()
export class WorkerEffect {
  constructor(
    private actions$: Actions,
    private workerService: WorkerService 
) {}
    
  @Effect()
  loadWorkers$: Observable<Action> = this.actions$.pipe(
      ofType<workerActions.LoadWorkers>(
          workerActions.WorkerActionTypes.LOAD_WORKERS
      ),
      mergeMap((actions: workerActions.LoadWorkers) =>
      this.workerService.getWorkers().pipe(
          map(
              (workers: Worker[]) =>
              new workerActions.LoadWorkersSuccess(workers)
          ),
          catchError(err => of(new workerActions.LoadWorkersFail(err)))
      ))
  );

  @Effect()
  loadWorker$: Observable<Action> = this.actions$.pipe(
      ofType<workerActions.LoadWorker>(
          workerActions.WorkerActionTypes.LOAD_WORKER
      ),
      mergeMap((action: workerActions.LoadWorker) =>
      this.workerService.getWorkerById(action.payload).pipe(
          map(
              (worker: Worker) =>
              new workerActions.LoadWorkerSuccess(worker)
          ),
          catchError(err => of(new workerActions.LoadWorkerFail(err)))
      ))
  );

  @Effect()
  createWorker$: Observable<Action> = this.actions$.pipe(
      ofType<workerActions.CreateWorker>(
          workerActions.WorkerActionTypes.CREATE_WORKER
      ),
      map((action: workerActions.CreateWorker) => action.payload),
      mergeMap((worker: Worker) =>
      this.workerService.createWorker(worker).pipe(
          map(
              (newWorker: Worker) =>
              new workerActions.CreateWorkerSuccess(newWorker)
          ),
          catchError(err => of(new workerActions.CreateWorkerSuccess(err)))
      ))
  );

  @Effect()
  updateWorker$: Observable<Action> = this.actions$.pipe(
      ofType<workerActions.UpdateWorker>(
          workerActions.WorkerActionTypes.UPDATE_WORKER
      ),
      map((action: workerActions.UpdateWorker) => action.payload),
      mergeMap((worker: Worker) =>
      this.workerService.updateWorker(worker).pipe(
          map(
              (updateWorker: Worker) =>
              new workerActions.UpdateWorkerSuccess({
                id: updateWorker.id,
                changes: updateWorker
              })
          ),
          catchError(err => of(new workerActions.UpdateWorkerFail(err)))
      ))
  );

  @Effect()
  deleteWorker$: Observable<Action> = this.actions$.pipe(
      ofType<workerActions.DeleteWorker>(
          workerActions.WorkerActionTypes.DELETE_WORKER
      ),
      map((action: workerActions.DeleteWorker) => action.payload),
      mergeMap((id: number) =>
      this.workerService.deleteWorker(id).pipe(
          map(() => new workerActions.DeleteWorkerSuccess(id)),
          catchError(err => of(new workerActions.DeleteWorkerFail(err)))
      ))
  );
}