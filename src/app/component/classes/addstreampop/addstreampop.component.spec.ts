import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstreampopComponent } from './addstreampop.component';

describe('AddstreampopComponent', () => {
  let component: AddstreampopComponent;
  let fixture: ComponentFixture<AddstreampopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddstreampopComponent]
    });
    fixture = TestBed.createComponent(AddstreampopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
