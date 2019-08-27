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

  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('nombre')]
    })
    console.log(this.product);
    
  }

}
