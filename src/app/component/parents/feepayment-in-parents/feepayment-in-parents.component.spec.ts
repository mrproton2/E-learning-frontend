import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeepaymentInParentsComponent } from './feepayment-in-parents.component';

describe('FeepaymentInParentsComponent', () => {
  let component: FeepaymentInParentsComponent;
  let fixture: ComponentFixture<FeepaymentInParentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeepaymentInParentsComponent]
    });
    fixture = TestBed.createComponent(FeepaymentInParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
