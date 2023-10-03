import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeespaymentpopComponent } from './feespaymentpop.component';

describe('FeespaymentpopComponent', () => {
  let component: FeespaymentpopComponent;
  let fixture: ComponentFixture<FeespaymentpopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeespaymentpopComponent]
    });
    fixture = TestBed.createComponent(FeespaymentpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
