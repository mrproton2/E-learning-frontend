import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubjectviewpopComponent } from './addsubjectviewpop.component';

describe('AddsubjectviewpopComponent', () => {
  let component: AddsubjectviewpopComponent;
  let fixture: ComponentFixture<AddsubjectviewpopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsubjectviewpopComponent]
    });
    fixture = TestBed.createComponent(AddsubjectviewpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
