import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOldRecordComponent } from './schedule-old-record.component';

describe('ScheduleOldRecordComponent', () => {
  let component: ScheduleOldRecordComponent;
  let fixture: ComponentFixture<ScheduleOldRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleOldRecordComponent]
    });
    fixture = TestBed.createComponent(ScheduleOldRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
