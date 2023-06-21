import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPeliculaComponent } from './editar-pelicula.component';

describe('EditarPeliculaComponent', () => {
  let component: EditarPeliculaComponent;
  let fixture: ComponentFixture<EditarPeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPeliculaComponent]
    });
    fixture = TestBed.createComponent(EditarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
