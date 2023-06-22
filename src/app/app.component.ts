import { Component } from '@angular/core';


@Component({ //Decorateur Component
  selector: 'app-root', //Le nom de la balise dans 'index.html'
  templateUrl: './app.component.html', //partie Html
  styleUrls: ['./app.component.css'] //Partie Css
})

export class AppComponent {

  actions : Array<any> = [
    {title :"Home", "route":"/home", icon : "house"},
    {title :"Products", "route":"/products", icon : "search"},
    {title :"New Product", "route":"/newProduct", icon : "safe"},
  ];
  currentAction :any;

  setCurrentACtion(action: any) {
    this.currentAction = action;
  }
}
