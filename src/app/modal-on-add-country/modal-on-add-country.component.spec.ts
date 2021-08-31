import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOnAddCountryComponent } from './modal-on-add-country.component';

describe('ModalOnAddCountryComponent', () => {
  let component: ModalOnAddCountryComponent;
  let fixture: ComponentFixture<ModalOnAddCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOnAddCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOnAddCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
