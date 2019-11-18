import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { workerReducer } from "./state/worker.reducer";
import { WorkerEffect } from "./state/worker.effects";

import { WorkerComponent } from './worker/worker.component';
import { WorkerAddComponent } from './worker-add/worker-add.component';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';
import { WorkerListComponent } from './worker-list/worker-list.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';




const workerRoutes: Routes = [
  { path: "", component: WorkerComponent },
  { path: "list", component: WorkerListComponent },
  { path: "add", component: WorkerAddComponent },
  { path: "edit", component: WorkerEditComponent },

]

@NgModule({
  declarations: [WorkerComponent, WorkerAddComponent, WorkerEditComponent, WorkerListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(workerRoutes),
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature("workers", workerReducer),
    EffectsModule.forFeature([WorkerEffect]),

    
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
  ]
})
export class WorkersModule { }
