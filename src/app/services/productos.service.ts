import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http:HttpClient ) { }
  listproductos: Productos[]=[];
  listadeproductos: Productos[] =[
    {title:'gorra nike', price:27, description:'color blanco para jugar tennis', images:'https://media.istockphoto.com/id/497040301/es/foto/sombrero-blanco-de-b%C3%A9isbol.jpg?s=612x612&w=0&k=20&c=-Jmi2btfmAQXPAfz7-uyvqBFoMXEv5HfD_Hv_9oZNUA=', creationAt:'01/12/2021', updatedAt:'01/12/2021'}
  ];



  //get para consumir de la api rest
  getAllProductos(){
    return this.http.get<Productos[]>('https://api.escuelajs.co/api/v1/products');
  }

  agregarproducto(product:Productos){
    this.listadeproductos.unshift(product);
  }

  //get para administracion
  getProductos(){
    return this.listadeproductos.slice();
    
  }
  eliminarproducto(index:number){
    this.listadeproductos.splice(index,1)
  }
}
