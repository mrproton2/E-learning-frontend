import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacultyetcpopupComponent } from './addfacultyetcpopup.component';

describe('AddfacultyetcpopupComponent', () => {
  let component: AddfacultyetcpopupComponent;
  let fixture: ComponentFixture<AddfacultyetcpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfacultyetcpopupComponent]
    });
    fixture = TestBed.createComponent(AddfacultyetcpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
