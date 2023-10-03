import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesstatusComponent } from './feesstatus.component';

describe('FeesstatusComponent', () => {
  let component: FeesstatusComponent;
  let fixture: ComponentFixture<FeesstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeesstatusComponent]
    });
    fixture = TestBed.createComponent(FeesstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
