import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  menu: Menu[] = []; //array inicializado vacio
  constructor(private _menuService: MenuService){}

  ngOnInit(): void {

    this.cargarMenu();
    
  }

  cargarMenu(){
    //accedemos al menu - accedemos al metodo getmnenu - y al retornar un OBSERVABLE nos tenemos
    //que suscribir con suscribe
    this._menuService.getMenu().subscribe(data => {
      this.menu=data;
    })
  }

}
