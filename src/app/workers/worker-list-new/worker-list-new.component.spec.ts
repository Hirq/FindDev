import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerListNewComponent } from './worker-list-new.component';

describe('WorkerListNewComponent', () => {
  let component: WorkerListNewComponent;
  let fixture: ComponentFixture<WorkerListNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerListNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
