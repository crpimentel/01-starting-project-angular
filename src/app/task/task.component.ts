import { Component,input,Input } from '@angular/core';
import { TaskIndividualComponent } from "../task-individual/task-individual.component";
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskIndividualComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) userid! :string;
@Input({required:true}) name! : string;
 tasks = dummyTasks
 get selectedUserTask(){
  return this.tasks.filter(task=>task.userId == this.userid)
 }
}
