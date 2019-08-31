import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {


  constructor(private dataService: DataService) {
    
   }

  ngOnInit() {  
  }

  cantidad(){
    return this.dataService.getBadge();
  }

}
