import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectoHomeComponent } from './projecto-home.component';

describe('ProjectoHomeComponent', () => {
  let component: ProjectoHomeComponent;
  let fixture: ComponentFixture<ProjectoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
