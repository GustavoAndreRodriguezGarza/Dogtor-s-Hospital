import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarPage } from './side-bar.page';

describe('SideBarPage', () => {
  let component: SideBarPage;
  let fixture: ComponentFixture<SideBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
