import { Component,inject,Input } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../task/tasks.service';

@Component({
  selector: 'app-task-individual',
  templateUrl: './task-individual.component.html',
  styleUrl: './task-individual.component.css'
})

export class TaskIndividualComponent {
@Input({required:true}) task !: Task;
tasksService = inject(TasksService);
  
  onCompleteTask(){ 
   this.tasksService.removeTask(this.task.id) 
  }
}

