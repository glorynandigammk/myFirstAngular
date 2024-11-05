import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { CardComponent } from './shared/card/card.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap:[AppComponent],
  declarations: [AppComponent,HeaderComponent, UserComponent, TasksComponent,
    TaskComponent,CardComponent,NewTaskComponent],
  imports: [BrowserModule,FormsModule],
})
export class AppModule {}
