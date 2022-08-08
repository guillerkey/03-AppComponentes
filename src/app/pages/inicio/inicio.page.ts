import { Component, OnInit } from '@angular/core';

interface Conmponente {
  icon: string,
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

componentes: Conmponente[] = [
  {
    icon: 'add-circle-outline',
    name: 'Action sheet',
    redirectTo: '/action-sheet'
  },
  {
    icon: 'warning',
    name: 'Alert',
    redirectTo: '/alert'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
