import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproductosComponent } from './adminproductos.component';

describe('AdminproductosComponent', () => {
  let component: AdminproductosComponent;
  let fixture: ComponentFixture<AdminproductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminproductosComponent]
    });
    fixture = TestBed.createComponent(AdminproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
