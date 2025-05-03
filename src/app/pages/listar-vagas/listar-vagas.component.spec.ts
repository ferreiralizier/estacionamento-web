import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVagasComponent } from './listar-vagas.component';

describe('ListarVagasComponent', () => {
  let component: ListarVagasComponent;
  let fixture: ComponentFixture<ListarVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
