import { Component,Input } from '@angular/core';
import { type NewTaskData } from '../task-individual/task.model';
import {TasksService} from './tasks.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) userid! :string;
  @Input({required:true}) name! : string;
  _isVisibleAddTask = false;
  constructor(private tasksService : TasksService){}

 get selectedUserTask(){
  return this.tasksService.getUserTasks(this.userid)
 }
 addStartNewTask(){
  this._isVisibleAddTask = true;
 }
 onCloseAddingTask(){
  this._isVisibleAddTask = false
 }
 onAddTask(taskData:NewTaskData){

    this._isVisibleAddTask=false;
 }
}
