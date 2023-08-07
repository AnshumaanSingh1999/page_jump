import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidcasesappComponent } from './covidcasesapp.component';

describe('CovidcasesappComponent', () => {
  let component: CovidcasesappComponent;
  let fixture: ComponentFixture<CovidcasesappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidcasesappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidcasesappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
