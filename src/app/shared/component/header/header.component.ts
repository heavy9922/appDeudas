import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToLogin(){
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }

  goToHome(){
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000);
  }
}
