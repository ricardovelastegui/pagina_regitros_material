import { Component, OnInit, ViewChild } from '@angular/core';
import { Productos } from 'src/app/interfaces/productos';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductosService } from 'src/app/services/productos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adminproductos',
  templateUrl: './adminproductos.component.html',
  styleUrls: ['./adminproductos.component.css']
})
export class AdminproductosComponent implements OnInit {

  listadeproductos: Productos[] =[];
  listproductos: Productos[]=[];

  displayedColumns: string[] =['title', 'price', 'description','creationAt', 'acciones'];

  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _productosService: ProductosService, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.cargarProductos();

  }
  cargarProductos(){
    this.listadeproductos = this._productosService.getProductos();
    this.dataSource = new MatTableDataSource(this.listadeproductos);

  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

  eliminarproducto(index: number){
    console.log(index);
    this._productosService.eliminarproducto(index);
    this.cargarProductos();

    this._snackBar.open('el producto fue eliminado con exito','', {
      duration:1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });

  }

}
