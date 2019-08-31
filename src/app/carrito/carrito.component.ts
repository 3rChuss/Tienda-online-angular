import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() pedidos;

  constructor() { }

  ngOnInit() {
    console.log(this.pedidos);
    
  }

}
