import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Worker } from "./worker.model";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private workersUrl = "http://localhost:3000/workers";

  constructor(private http: HttpClient) {}

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.workersUrl);
  }

  getWorkerById(payload: number): Observable<Worker> {
    return this.http.get<Worker>(`${this.workersUrl}/${payload}`);
  }

  createWorker(payload: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.workersUrl, payload);
  }

  updateWorker(worker: Worker): Observable<Worker> {
    return this.http.patch<Worker>(
      `${this.workersUrl}/${worker.id}`,
      worker
    );
  }

  deleteWorker(payload: number) {
    return this.http.delete(`${this.workersUrl}/${payload}`);
  }
}