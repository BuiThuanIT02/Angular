import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { HelloWorlComponent } from './component/hello-worl/hello-worl.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { AuthorListComponent } from './component/author-list/author-list.component';
import { AuthorDetailComponent } from './component/author-detail/author-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HelloWorlComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
