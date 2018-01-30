import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunDetayComponent } from './urun-detay.component';

describe('UrunDetayComponent', () => {
  let component: UrunDetayComponent;
  let fixture: ComponentFixture<UrunDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrunDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
