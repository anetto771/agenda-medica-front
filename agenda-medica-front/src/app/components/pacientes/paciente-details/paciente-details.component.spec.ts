import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteDetailsComponent } from './paciente-details.component';

describe('PacienteDetailsComponent', () => {
  let component: PacienteDetailsComponent;
  let fixture: ComponentFixture<PacienteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
