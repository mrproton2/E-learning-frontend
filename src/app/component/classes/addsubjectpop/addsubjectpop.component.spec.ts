import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubjectpopComponent } from './addsubjectpop.component';

describe('AddsubjectpopComponent', () => {
  let component: AddsubjectpopComponent;
  let fixture: ComponentFixture<AddsubjectpopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsubjectpopComponent]
    });
    fixture = TestBed.createComponent(AddsubjectpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
