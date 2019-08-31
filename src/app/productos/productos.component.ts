import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() producto;
  pedidos = [];

  constructor(private dataService : DataService) { }

  ngOnInit() {    
  }

  addPedido(unidades: number, nuevoProducto){
    if( unidades <= this.producto.unidadesDisponibles){
      nuevoProducto.cantidad = unidades;
      this.producto.unidadesDisponibles = this.producto.unidadesDisponibles - unidades;
      this.dataService.newPedido(nuevoProducto);
    }
  }

}
