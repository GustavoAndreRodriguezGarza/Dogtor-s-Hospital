import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptarPage } from './adoptar.page';

describe('AgregarMovimientoPage', () => {
  let component: AdoptarPage;
  let fixture: ComponentFixture<AdoptarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
