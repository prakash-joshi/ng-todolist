import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-todolist';

  constructor(){

    setTimeout(() => {
      this.title = "Angular - To Do List"
    }, 1500);
    
  }
}
