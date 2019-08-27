import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DProductoComponent } from './d-producto.component';

describe('DProductoComponent', () => {
  let component: DProductoComponent;
  let fixture: ComponentFixture<DProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
