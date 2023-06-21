import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaFormularioComponent } from './pelicula-formulario.component';

describe('PeliculaFormularioComponent', () => {
  let component: PeliculaFormularioComponent;
  let fixture: ComponentFixture<PeliculaFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculaFormularioComponent]
    });
    fixture = TestBed.createComponent(PeliculaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
