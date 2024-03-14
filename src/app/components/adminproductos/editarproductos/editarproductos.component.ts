import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Productos } from 'src/app/interfaces/productos';
import { ProductosService } from 'src/app/services/productos.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-editarproductos',
  templateUrl: './editarproductos.component.html',
  styleUrls: ['./editarproductos.component.css'],
  
})
export class EditarproductosComponent implements OnInit {

  form:FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private _productosService: ProductosService ){
    this.form=this.fb.group({
      id:['', Validators.required],
      title:['', Validators.required],
      price:['', Validators.required],
      description:['', Validators.required],
      images:[''],
      creationAt:['', Validators.required],
      updateAt:['', Validators.required]

    })
  }

  ngOnInit(): void {
  }

  agregarproducto(){
    const product: Productos ={

      title:this.form.value.title,
      price:this.form.value.price,
      description:this.form.value.description,
      images:this.form.value.images,
      creationAt:this.form.value.creationAt,
      updatedAt:this.form.value.updateAt
    }
    this._productosService.agregarproducto(product);
    this.router.navigate(['dashboard/editarproductos'])
    this._snackBar.open('el producto fue agregado con éxito','', {
      duration:1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }
}
