import { Component, OnInit } from '@angular/core';
import { products } from'../productos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dproducto',
  templateUrl: './d-producto.component.html',
  styleUrls: ['./d-producto.component.css']
})
export class DProductoComponent implements OnInit {

  product;
  nombre: string;

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.producto(params.get('nombre'));
    })
  }

  producto(nombre: string){
    let producto;
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      if (element.nombre === nombre) this.product = element;
    }    
  }

}
