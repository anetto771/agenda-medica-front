import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosUpdateComponent } from './agendamentos-update.component';

describe('AgendamentosUpdateComponent', () => {
  let component: AgendamentosUpdateComponent;
  let fixture: ComponentFixture<AgendamentosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentosUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
