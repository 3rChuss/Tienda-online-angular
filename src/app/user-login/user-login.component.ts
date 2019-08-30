import { Component, OnInit } from '@angular/core';
import { users } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  users = users;
  error = "";

  constructor(private router : Router) { }

  ngOnInit() {
    console.log(users);
  }


  login(user:string, passwd:string){
    let userValido = false;
    for(let usrs of users){
      if (usrs.email === user && usrs.passwd === passwd){
        console.log(usrs.email === user);
        userValido = true;
      }
    }
    userValido ? this.router.navigate(['catalogo']) : this.error = "Alguno de los campos no es valido"; 
  }

}
