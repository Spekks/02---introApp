import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimaNoticiaGuardadaComponent } from './ultima-noticia-guardada.component';

describe('UltimaNoticiaGuardadaComponent', () => {
  let component: UltimaNoticiaGuardadaComponent;
  let fixture: ComponentFixture<UltimaNoticiaGuardadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimaNoticiaGuardadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimaNoticiaGuardadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
