import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapExampleComponent } from './bootstrap-example.component';

describe('BootstrapExampleComponent', () => {
  let component: BootstrapExampleComponent;
  let fixture: ComponentFixture<BootstrapExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
