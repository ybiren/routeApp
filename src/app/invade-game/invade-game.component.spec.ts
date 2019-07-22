import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvadeGameComponent } from './invade-game.component';

describe('InvadeGameComponent', () => {
  let component: InvadeGameComponent;
  let fixture: ComponentFixture<InvadeGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvadeGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvadeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
