import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFunctionalityComponent } from './import-functionality.component';

describe('ImportFunctionalityComponent', () => {
  let component: ImportFunctionalityComponent;
  let fixture: ComponentFixture<ImportFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportFunctionalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
