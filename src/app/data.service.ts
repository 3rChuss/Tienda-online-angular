import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private pedidos: any[] = [];
 
  newPedido(productos){
    this.pedidos.push(productos);
  }

  getPedidos(){
    return this.pedidos;
  }

  getBadge(){
    return this.pedidos.length;
  }

  pagar(){
    this.pedidos = [];
  }

}
