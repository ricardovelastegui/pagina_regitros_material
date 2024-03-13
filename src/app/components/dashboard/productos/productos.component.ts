import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Productos } from 'src/app/interfaces/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Productos[] =[];

  constructor(private productosService:ProductosService){}

  ngOnInit(): void {
    this.fetchProduct();
      
  }

  clickProduct(id:number){
    console.log('producto')
    console.log(id)
  }

  fetchProduct(){
    this.productosService.getAllProductos().subscribe( productos => {
      this.productos = productos;
    } );
  }

}

