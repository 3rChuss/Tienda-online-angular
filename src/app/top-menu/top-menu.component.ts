import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  
  badge: boolean = true;

  constructor(private dataService: DataService, private route: Router) {
    
   }

  ngOnInit() {      
  }

  cantidad(){
    if(this.badge){
      return this.dataService.getBadge();
    }
  }

  hideBadge(){
    this.badge = false;
  }

  showBadge(){
    this.badge = true;
  }

}
