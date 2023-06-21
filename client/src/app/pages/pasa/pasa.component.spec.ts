import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasaComponent } from './pasa.component';

describe('PasaComponent', () => {
  let component: PasaComponent;
  let fixture: ComponentFixture<PasaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasaComponent]
    });
    fixture = TestBed.createComponent(PasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
