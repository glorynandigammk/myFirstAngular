import { Component,Input, Output,EventEmitter, inject } from '@angular/core';

import { TasksService } from '../tasks.service';
import { FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-newtask',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Input({required:true}) userId!:string;
  
  enteredTitle='';
  enteredSummary='';
  enteredDate='';
private tasksService = inject(TasksService);

  @Output() close = new EventEmitter();
 
  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },this.userId)
    this.close.emit();
  }

}
