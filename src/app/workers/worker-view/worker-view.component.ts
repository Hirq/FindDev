import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as workerActions from "../state/worker.actions";
import * as fromWorker from "../state/worker.reducer";
import { Worker } from "../worker.model";

export interface Level {
  value: string;
  viewValue: string;
}

export interface Remote {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-worker-view',
  templateUrl: './worker-view.component.html',
  styleUrls: ['./worker-view.component.scss']
})
export class WorkerViewComponent implements OnInit {
  workers$: Observable<Worker[]>;
  error$: Observable<string>;

  levels: Level[] = [
    { value: 'Junior', viewValue: 'Junior'},
    { value: 'Mid', viewValue: 'Mid'},
    { value: 'Senior', viewValue: 'Senior'}
  ];
  
  remotes: Remote[] = [
    { value: 'Yes', viewValue: 'Yes'},
    { value: 'No', viewValue: 'No'},
  ];

  constructor(private store: Store<fromWorker.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new workerActions.LoadWorkers());
    this.workers$ = this.store.pipe(select(fromWorker.getWorkers));
    this.error$ = this.store.pipe(select(fromWorker.getError));
    
  }
  
  editWorker(worker: Worker) {
    this.store.dispatch(new workerActions.LoadWorker(worker.id));
  }
}
