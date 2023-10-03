import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryformpopupComponent } from './inquiryformpopup.component';

describe('InquiryformpopupComponent', () => {
  let component: InquiryformpopupComponent;
  let fixture: ComponentFixture<InquiryformpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiryformpopupComponent]
    });
    fixture = TestBed.createComponent(InquiryformpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
