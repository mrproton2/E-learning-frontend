import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulepopupComponent } from './schedulepopup.component';

describe('SchedulepopupComponent', () => {
  let component: SchedulepopupComponent;
  let fixture: ComponentFixture<SchedulepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulepopupComponent]
    });
    fixture = TestBed.createComponent(SchedulepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
