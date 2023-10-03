import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryformComponent } from './inquiryform.component';

describe('InquiryformComponent', () => {
  let component: InquiryformComponent;
  let fixture: ComponentFixture<InquiryformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiryformComponent]
    });
    fixture = TestBed.createComponent(InquiryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
