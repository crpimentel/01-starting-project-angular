import { Component,Input } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task-individual',
  standalone: true,
  imports: [],
  templateUrl: './task-individual.component.html',
  styleUrl: './task-individual.component.css'
})


export class TaskIndividualComponent {
@Input({required:true}) task !: Task;
}
