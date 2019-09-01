import { Component, OnInit } from '@angular/core';
import { products } from '../productos';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos = products;
  productosBuscados = products;

  constructor() { }

  ngOnInit() {
  }

  buscar(event: any){
    let texto = event.target.value;
    this.productosBuscados = this.productos.filter( pro => pro.nombre.toLowerCase().indexOf(texto.toLowerCase()) !== -1 );
  }

}
