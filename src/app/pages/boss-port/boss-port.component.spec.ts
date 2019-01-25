import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BossPortComponent } from './boss-port.component';

describe('BossPortComponent', () => {
  let component: BossPortComponent;
  let fixture: ComponentFixture<BossPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
