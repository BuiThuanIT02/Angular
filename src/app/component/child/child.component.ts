import { Component, Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
@Input() userName ="";
age=[
{
  id:1,
  name:"Xuân",
  age:15
},
{
  id:2,
  name:"Hạ",
  age:17
},
{
  id:3,
  name:"Thu",
  age:19
}
];





}

