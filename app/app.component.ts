import { Component } from '@angular/core';

@Component({
  selector: 'emo-app',
  template: `
    <h1>Emo app component</h1>
    <nav>
      <a routerLink="/plant" routerLinkActive="active">Plant</a>
      <a routerLink="/Rails" routerLinkActive="active">Rails</a>
    </nav>
    <div><router-outlet></router-outlet></div>'
  
  `
  
})

export class AppComponent { 
    title = 'Emo'
}
