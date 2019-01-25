import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachPortComponent } from './teach-port.component';

describe('TeachPortComponent', () => {
  let component: TeachPortComponent;
  let fixture: ComponentFixture<TeachPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
