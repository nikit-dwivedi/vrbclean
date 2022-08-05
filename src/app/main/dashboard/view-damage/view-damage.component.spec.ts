import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDamageComponent } from './view-damage.component';

describe('ViewDamageComponent', () => {
  let component: ViewDamageComponent;
  let fixture: ComponentFixture<ViewDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDamageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
