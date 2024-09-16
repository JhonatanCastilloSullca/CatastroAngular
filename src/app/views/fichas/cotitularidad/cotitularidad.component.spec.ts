import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotitularidadComponent } from './cotitularidad.component';

describe('CotitularidadComponent', () => {
  let component: CotitularidadComponent;
  let fixture: ComponentFixture<CotitularidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotitularidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotitularidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
