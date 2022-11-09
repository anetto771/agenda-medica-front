import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoDetailsComponent } from './medico-details.component';

describe('MedicoDetailsComponent', () => {
  let component: MedicoDetailsComponent;
  let fixture: ComponentFixture<MedicoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
