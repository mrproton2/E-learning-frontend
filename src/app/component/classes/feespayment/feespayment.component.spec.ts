import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeespaymentComponent } from './feespayment.component';

describe('FeespaymentComponent', () => {
  let component: FeespaymentComponent;
  let fixture: ComponentFixture<FeespaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeespaymentComponent]
    });
    fixture = TestBed.createComponent(FeespaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
