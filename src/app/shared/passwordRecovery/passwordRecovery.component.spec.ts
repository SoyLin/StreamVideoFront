import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryComponent } from './passwordRecovery.component';

describe('PasswordRecoveryComponent', () => {
  let component: PasswordRecoveryComponent;
  let fixture: ComponentFixture<PasswordRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordRecoveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
