import { Component, Input,Output,EventEmitter } from '@angular/core';
import {type IUser} from './user.model'
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone:true,
  imports:[CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required:true}) user!:IUser
  @Output() select = new EventEmitter<string>();
 @Input({required:true}) selected!:boolean;

  get imagePath(){
    return "assets/users/" + this.user.avatar;
  }

  onSelectUser(){    
    this.select.emit(this.user.id);
  }
}

