import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MideasComponent } from './mideas.component';

describe('MideasComponent', () => {
  let component: MideasComponent;
  let fixture: ComponentFixture<MideasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MideasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
