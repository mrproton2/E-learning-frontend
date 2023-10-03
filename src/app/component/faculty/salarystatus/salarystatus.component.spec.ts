import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarystatusComponent } from './salarystatus.component';

describe('SalarystatusComponent', () => {
  let component: SalarystatusComponent;
  let fixture: ComponentFixture<SalarystatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalarystatusComponent]
    });
    fixture = TestBed.createComponent(SalarystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
