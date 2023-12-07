import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDoomComponent } from './shadow-doom.component';

describe('ShadowDoomComponent', () => {
  let component: ShadowDoomComponent;
  let fixture: ComponentFixture<ShadowDoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadowDoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShadowDoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
