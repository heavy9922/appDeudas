import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersInter } from 'src/app/shared/model/users.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email!:string
  password!:string;
  loginUser!: UsersInter
  
  loginUsers = {
    email: 'yefersoncasti@gmail.com',
    password: 'Skills2020',
  }

  constructor(private router: Router,) { }
  
  ngOnInit(): void {
  }

  goToHome(){
    if(this.loginUsers.email == this.email && this.loginUsers.password == this.password ){
      this.router.navigate(['home'])
    }else{
      alert('el usuario o el password son incorecctos')
    }
  }

}
