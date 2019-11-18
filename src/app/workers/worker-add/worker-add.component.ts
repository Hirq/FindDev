import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
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
  selector: 'app-worker-add',
  templateUrl: './worker-add.component.html',
  styleUrls: ['./worker-add.component.scss']
})
export class WorkerAddComponent implements OnInit {
  levels: Level[] = [
    { value: 'Junior', viewValue: 'Junior'},
    { value: 'Mid', viewValue: 'Mid'},
    { value: 'Senior', viewValue: 'Senior'}
  ];

  remotes: Remote[] = [
    { value: 'Yes', viewValue: 'Yes'},
    { value: 'No', viewValue: 'No'},
  ];


  workerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromWorker.AppState>
  ) {}

  ngOnInit() {
    this.workerForm = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      email: ["", Validators.required],
      city: ["", Validators.required],
      github: ["", Validators.required],
      level: ["", Validators.required],
      describe: ["", Validators.required],
      remote: ["No", Validators.required],
      salary: ["", Validators.required],
      linkedin: ["", Validators.required],
      position: ["", Validators.required],
    });
  }

  createWorker() {
    const newWorker: Worker = {
      first_name: this.workerForm.get("first_name").value,
      last_name: this.workerForm.get("last_name").value,
      email: this.workerForm.get("email").value,
      city: this.workerForm.get("city").value,
      github: this.workerForm.get("github").value,
      level: this.workerForm.get("level").value,
      describe: this.workerForm.get("describe").value,
      remote: this.workerForm.get("remote").value,
      salary: this.workerForm.get("salary").value,
      linkedin: this.workerForm.get("linkedin").value,
      position: this.workerForm.get("position").value,
    };

    this.store.dispatch(new workerActions.CreateWorker(newWorker));

    this.workerForm.reset();
  }

}
