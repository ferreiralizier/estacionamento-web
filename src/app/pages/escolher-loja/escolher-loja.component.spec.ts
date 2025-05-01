import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherLojaComponent } from './escolher-loja.component';

describe('EscolherLojaComponent', () => {
  let component: EscolherLojaComponent;
  let fixture: ComponentFixture<EscolherLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolherLojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
