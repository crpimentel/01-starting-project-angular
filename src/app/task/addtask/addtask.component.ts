import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../../task-individual/task.model';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  @Output() cancellAddTask = new EventEmitter();
  @Output() Add = new EventEmitter<NewTaskData>;
  enteredTitle = '';
  enteredSummary = '';
  enteredDate= '';
  onCancellAddTask(){
    this.cancellAddTask.emit();
  }
  onSubmit(){
    this.Add.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate,
    });

  }
}
