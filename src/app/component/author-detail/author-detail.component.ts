import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Author } from 'src/app/authors.model';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent {
@Input() author ={id:0,
  firstName:"",
  email:"",
  gender:"",
  ipAddress:"",};

@Output() select = new EventEmitter<Author>();

}
