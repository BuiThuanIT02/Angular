import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-worl',
  templateUrl: './hello-worl.component.html',
  styleUrls: ['./hello-worl.component.css']
})
export class HelloWorlComponent {
 nameChild ="Đây là HelloWordl";
  fruits =[
    {
      id:1,
      name:"Apple",
      price:500,
      image:"/apple.png"
    },
    {
      id:2,
      name:"Lemon",
      price:600,
      image:"/lemon.png"
    },
    {
      id:3,
      name:"Origince",
      price:700,
      image:"/origin.png"
    }
  ]
}
