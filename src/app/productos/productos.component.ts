import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';


@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() producto;
  pedidos = [];


  constructor() { }

  ngOnInit() {    
  }

  addPedido(unidades: number, nuevoProducto){
    //añadir pedido al array pedidos
    if( unidades <= this.producto.unidadesDisponibles){
      nuevoProducto.cantidad = unidades;
      this.pedidos.push(nuevoProducto)
      this.producto.unidadesDisponibles = this.producto.unidadesDisponibles - unidades;
    }
    
  }

}
