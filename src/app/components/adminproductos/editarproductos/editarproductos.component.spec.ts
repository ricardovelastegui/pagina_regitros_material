import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarproductosComponent } from './editarproductos.component';

describe('EditarproductosComponent', () => {
  let component: EditarproductosComponent;
  let fixture: ComponentFixture<EditarproductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarproductosComponent]
    });
    fixture = TestBed.createComponent(EditarproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
