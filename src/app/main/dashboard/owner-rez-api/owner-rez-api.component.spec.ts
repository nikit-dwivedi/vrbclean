import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRezAPIComponent } from './owner-rez-api.component';

describe('OwnerRezAPIComponent', () => {
  let component: OwnerRezAPIComponent;
  let fixture: ComponentFixture<OwnerRezAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerRezAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerRezAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
