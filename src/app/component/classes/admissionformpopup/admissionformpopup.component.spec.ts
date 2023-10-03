import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionformpopupComponent } from './admissionformpopup.component';

describe('AdmissionformpopupComponent', () => {
  let component: AdmissionformpopupComponent;
  let fixture: ComponentFixture<AdmissionformpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmissionformpopupComponent]
    });
    fixture = TestBed.createComponent(AdmissionformpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
