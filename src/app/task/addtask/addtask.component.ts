import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter();
  private tasksService = inject(TasksService)
  enteredTitle = '';
  enteredSummary = '';
  enteredDate= '';
  onCancellAddTask(){
    this.close.emit();
  }
  onSubmit(){
  this.tasksService.addTask(
    {
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },this.userId)
  this.close.emit();
  }
}
