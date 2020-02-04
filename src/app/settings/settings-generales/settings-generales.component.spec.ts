import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsGeneralesComponent } from './settings-generales.component';

describe('SettingsGeneralesComponent', () => {
  let component: SettingsGeneralesComponent;
  let fixture: ComponentFixture<SettingsGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsGeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
