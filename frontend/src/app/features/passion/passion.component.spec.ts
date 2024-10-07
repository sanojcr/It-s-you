import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassionComponent } from './passion.component';

describe('PassionComponent', () => {
  let component: PassionComponent;
  let fixture: ComponentFixture<PassionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
