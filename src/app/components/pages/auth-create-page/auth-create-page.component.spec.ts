import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCreatePageComponent } from './auth-create-page.component';

describe('AuthCreatePageComponent', () => {
  let component: AuthCreatePageComponent;
  let fixture: ComponentFixture<AuthCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
