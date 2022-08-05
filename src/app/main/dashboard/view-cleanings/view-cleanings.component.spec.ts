import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCleaningsComponent } from './view-cleanings.component';

describe('ViewCleaningsComponent', () => {
  let component: ViewCleaningsComponent;
  let fixture: ComponentFixture<ViewCleaningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCleaningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCleaningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
