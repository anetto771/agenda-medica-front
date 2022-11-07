import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosCreateComponent } from './agendamentos-create.component';

describe('AgendamentosCreateComponent', () => {
  let component: AgendamentosCreateComponent;
  let fixture: ComponentFixture<AgendamentosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentosCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
