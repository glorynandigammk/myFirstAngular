import { Component, Input } from '@angular/core';

import { TasksService } from './tasks.service';
import { TaskComponent } from './task/task.component';
import { NewtaskComponent } from './newtask/newtask.component';

@Component({
  selector: 'app-tasks',
  standalone:true,
  imports:[TaskComponent,NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
