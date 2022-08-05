import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCleanersComponent } from './manage-cleaners.component';

describe('ManageCleanersComponent', () => {
  let component: ManageCleanersComponent;
  let fixture: ComponentFixture<ManageCleanersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCleanersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCleanersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
