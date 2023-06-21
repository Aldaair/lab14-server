import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinesconpeliculaComponent } from './cinesconpelicula.component';

describe('CinesconpeliculaComponent', () => {
  let component: CinesconpeliculaComponent;
  let fixture: ComponentFixture<CinesconpeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinesconpeliculaComponent]
    });
    fixture = TestBed.createComponent(CinesconpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
