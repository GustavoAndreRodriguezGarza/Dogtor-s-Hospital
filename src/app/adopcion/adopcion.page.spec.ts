import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionPage } from './adopcion.page';

describe('MovimientosPage', () => {
  let component: AdopcionPage;
  let fixture: ComponentFixture<AdopcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdopcionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
