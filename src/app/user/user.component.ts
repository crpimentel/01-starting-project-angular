import { Component,Input,input,computed,Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
const ramdomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
// interface User {
//     id: String;
//     avatar: String;
//     name:String;
//   } 


@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required:true}) user! : User;
  @Output() select = new EventEmitter();
  @Input({required:true}) selected! : boolean;
  // avatar =input.required<string>();
  // name =input.required<string>();
  get imagePath(){
    return 'assets/users/'+this.user.avatar
  }
  //imagePath = computed(()=>'assets/users/'+this.avatar())
  onSelectedUser(){
   this.select.emit(this.user.id);
   console.log('usuario '+this.user.id)
  }
}
