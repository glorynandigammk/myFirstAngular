import { Component, Input } from '@angular/core';
import  {TasksService} from './tasks.service'
import { TaskComponent } from './task/task.component';
import { NewtaskComponent } from './newtask/newtask.component';

@Component({
  selector: 'app-tasks',
  standalone:true,
  imports:[TaskComponent,NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isNewTask=false;

  constructor(private tasksService: TasksService){
    this.tasksService = tasksService;
  }

  get selectedUserTasks(){
    return this.tasksService.GetUserTask(this.userId);
  }

  onCancel(){
    this.isNewTask = false;
  }

  onAddingTask(){
    this.isNewTask = true;
  }

}
