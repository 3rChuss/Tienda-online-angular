import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() producto;

  constructor() { }

  ngOnInit() {
  }

}
