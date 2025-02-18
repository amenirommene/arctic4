import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arctic4Angular';
  name ="bonjour";
  name2 ="bonjour";
  f(){
    alert ("Event-binding");
  }
}
