import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoDetailsComponent } from './agendamento-details.component';

describe('AgendamentoDetailsComponent', () => {
  let component: AgendamentoDetailsComponent;
  let fixture: ComponentFixture<AgendamentoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
