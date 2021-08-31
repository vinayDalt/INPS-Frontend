import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOnWowRatingComponent } from './modal-on-wow-rating.component';

describe('ModalOnWowRatingComponent', () => {
  let component: ModalOnWowRatingComponent;
  let fixture: ComponentFixture<ModalOnWowRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOnWowRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOnWowRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
