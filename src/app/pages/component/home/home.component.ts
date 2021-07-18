import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mouths = [
    {
      mouth:'Marzo',
      Salary:2200000,
      valueTotal: 1000000,

    },
    {
      mouth:'Abril',
      Salary:2200000,
      valueTotal: 1200000
    },
    {
      mouth:'Mayo',
      Salary:2200000,
      valueTotal: 1300000
    },
    {
      mouth:'Junio',
      Salary:2000000,
      valueTotal: 1400000
    },
    {
      mouth:'Julio',
      Salary:2000000,
      valueTotal: 800000
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
  salaryTotal(){
    let total:number = 0
    this.mouths.forEach(row => {
      total += row.Salary
    });
    return total
  }

  EgresonTotal(){
    let total:number = 0
    this.mouths.forEach(row => {
      total += row.valueTotal
    });
    return total
  }

}
