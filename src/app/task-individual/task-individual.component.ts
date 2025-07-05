import { Component,EventEmitter,Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-task-individual',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task-individual.component.html',
  styleUrl: './task-individual.component.css'
})


export class TaskIndividualComponent {
@Input({required:true}) task !: Task;
@Output() complete = new EventEmitter()
  
  onCompleteTask(){ 
   this.complete.emit(this.task.id)
  }
}

