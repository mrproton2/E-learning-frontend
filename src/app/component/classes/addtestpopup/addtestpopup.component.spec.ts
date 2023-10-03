import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtestpopupComponent } from './addtestpopup.component';

describe('AddtestpopupComponent', () => {
  let component: AddtestpopupComponent;
  let fixture: ComponentFixture<AddtestpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtestpopupComponent]
    });
    fixture = TestBed.createComponent(AddtestpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
