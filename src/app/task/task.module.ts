import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TaskComponent } from "./task.component";
import { TaskIndividualComponent } from "../task-individual/task-individual.component";
import { AddtaskComponent } from "./addtask/addtask.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
        declarations:
          [
           TaskComponent,
           TaskIndividualComponent,
           AddtaskComponent],
         exports:
         [ 
            TaskComponent
         ],
         imports:[CommonModule,FormsModule,SharedModule]
        }
    )
export class TaskModule{
    
}