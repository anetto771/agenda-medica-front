import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoCreateComponent } from './medico-create.component';

describe('MedicoCreateComponent', () => {
  let component: MedicoCreateComponent;
  let fixture: ComponentFixture<MedicoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
