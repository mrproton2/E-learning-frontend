import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbatchpopupComponent } from './addbatchpopup.component';

describe('AddbatchpopupComponent', () => {
  let component: AddbatchpopupComponent;
  let fixture: ComponentFixture<AddbatchpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddbatchpopupComponent]
    });
    fixture = TestBed.createComponent(AddbatchpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
