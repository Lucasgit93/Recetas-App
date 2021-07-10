import { Component, OnInit } from '@angular/core';


interface Routes{
  text: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  routes: Routes[] = [
    {
      text: 'Pasteleria',
      route: '/recipes/pastry'
    },
    {
      text: 'Panaderia',
      route: '/recipes/bakery'
    },
    {
      text: 'Chocolateria',
      route: '/recipes/chocolatier'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
