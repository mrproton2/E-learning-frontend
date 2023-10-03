import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacultyetcComponent } from './addfacultyetc.component';

describe('AddfacultyetcComponent', () => {
  let component: AddfacultyetcComponent;
  let fixture: ComponentFixture<AddfacultyetcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfacultyetcComponent]
    });
    fixture = TestBed.createComponent(AddfacultyetcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
