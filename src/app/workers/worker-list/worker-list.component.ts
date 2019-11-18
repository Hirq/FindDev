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
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent implements OnInit {
  displayedColumns = ['first_name', 'last_name','position', 'email', 'city', 'github','linkedin', 'level','salary', 'describe', 'remote', 'actions'];
  selectedValueCity = 'All';
  selectedValueLevel = 'All';
  selectedValueRemote = 'All';
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

  deleteWorker(worker: Worker) {
    if(confirm("Delete the offer?")) {
      this.store.dispatch(new workerActions.DeleteWorker(worker.id));
    }
  }

  editWorker(worker: Worker) {
    this.store.dispatch(new workerActions.LoadWorker(worker.id));
  }


}
