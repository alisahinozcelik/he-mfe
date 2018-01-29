import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrinComponent } from './vitrin.component';

describe('VitrinComponent', () => {
  let component: VitrinComponent;
  let fixture: ComponentFixture<VitrinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitrinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
