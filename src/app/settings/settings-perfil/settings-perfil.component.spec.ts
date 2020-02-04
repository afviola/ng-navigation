import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPerfilComponent } from './settings-perfil.component';

describe('SettingsPerfilComponent', () => {
  let component: SettingsPerfilComponent;
  let fixture: ComponentFixture<SettingsPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
