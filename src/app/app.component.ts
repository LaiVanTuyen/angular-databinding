import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-databinding';
  name ="Tuyen";

  //Example 1
  isDisabled= false;
  //Example 2
  clearName(){
    this.name = "";
  }
}
