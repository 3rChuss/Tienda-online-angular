import { Component, OnInit } from '@angular/core';
import { products } from '../productos';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos = products;

  share (){
    console.log('Productos cargados');
  }

  constructor() { }

  ngOnInit() {
    console.log(this.productos);
  }

}
