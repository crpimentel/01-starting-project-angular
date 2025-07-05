import { Component,input,Input, signal } from '@angular/core';
import { TaskIndividualComponent } from "../task-individual/task-individual.component";
import { dummyTasks } from '../dummy-tasks';
import { AddtaskComponent } from "./addtask/addtask.component";
import { type NewTaskData } from '../task-individual/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskIndividualComponent, AddtaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) userid! :string;
  @Input({required:true}) name! : string;
  _isVisibleAddTask = false;

 tasks = dummyTasks

 get selectedUserTask(){
  return this.tasks.filter(task=>task.userId == this.userid)
 }
 onCompleteTask(id:string){
  this.tasks = this.tasks.filter(task=>task.id!==id)
 }
 addStartNewTask(){
  this._isVisibleAddTask = true;
 }
 onCancelAddingTask(){
  this._isVisibleAddTask = false
 }
 onAddTask(taskData:NewTaskData){
  this.tasks.unshift(
    {
      id: new Date().getTime().toString(),
      userId:this.userid,
      title:taskData.title,
      summary: taskData.summary,
      dueDate:taskData.date
    });
    this._isVisibleAddTask=false;
 }
}
