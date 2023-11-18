import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';// quản lý các thuộc tính
  isDanger = false;
  isWarning =false;
  curentProgress=70;


  users =[
    {
      id:1,
      name: "Linh",
      age: 18
    },
    {
      id:2,
      name: "Nam",
      age: 19
    },
    {
      id:3,
      name: "Tuấn",
      age: 10
    }
  ]
}
