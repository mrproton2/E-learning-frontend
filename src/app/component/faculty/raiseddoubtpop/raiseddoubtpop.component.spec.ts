import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseddoubtpopComponent } from './raiseddoubtpop.component';

describe('RaiseddoubtpopComponent', () => {
  let component: RaiseddoubtpopComponent;
  let fixture: ComponentFixture<RaiseddoubtpopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaiseddoubtpopComponent]
    });
    fixture = TestBed.createComponent(RaiseddoubtpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
