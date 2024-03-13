import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http:HttpClient ) { }
  listproductos: Productos[]=[];

  getAllProductos(){
    return this.http.get<Productos[]>('https://api.escuelajs.co/api/v1/products');
  }

  agregarproducto(product:Productos){
    this.listproductos.unshift(product);

  }
}
