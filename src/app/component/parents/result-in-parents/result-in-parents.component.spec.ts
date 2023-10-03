import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultInParentsComponent } from './result-in-parents.component';

describe('ResultInParentsComponent', () => {
  let component: ResultInParentsComponent;
  let fixture: ComponentFixture<ResultInParentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultInParentsComponent]
    });
    fixture = TestBed.createComponent(ResultInParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
