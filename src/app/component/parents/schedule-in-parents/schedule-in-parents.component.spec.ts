import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleInParentsComponent } from './schedule-in-parents.component';

describe('ScheduleInParentsComponent', () => {
  let component: ScheduleInParentsComponent;
  let fixture: ComponentFixture<ScheduleInParentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleInParentsComponent]
    });
    fixture = TestBed.createComponent(ScheduleInParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
