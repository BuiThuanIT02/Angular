import { Component } from '@angular/core';
import { authors,Author } from 'src/app/authors.model';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
    authors = authors;
    currentAuthor = authors[0].firstName;
    onSelectChild(event:Author){
      this.currentAuthor = event.firstName
    }
}
