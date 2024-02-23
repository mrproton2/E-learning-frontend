import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetstudnetpasswordComponent } from './resetstudnetpassword.component';

describe('ResetstudnetpasswordComponent', () => {
  let component: ResetstudnetpasswordComponent;
  let fixture: ComponentFixture<ResetstudnetpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetstudnetpasswordComponent]
    });
    fixture = TestBed.createComponent(ResetstudnetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
