import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  pedidos = [];
  total: number = 0;

  constructor(private dataService : DataService, private router: Router) { 
   }

  ngOnInit() {  
    this.updatePedidos();    
  }

  updatePedidos(){
    let total = 0;
    this.pedidos = this.dataService.getPedidos();
    this.pedidos.forEach(producto => {
      total += producto.precio*producto.cantidad
    })
    this.total = total;
  }

  pagar(){
    this.pedidos = [];
    this.dataService.pagar();
    this.router.navigate(['catalogo']);
  }

  cancelar(){
    this.router.navigate(['catalogo']);
  }

}
