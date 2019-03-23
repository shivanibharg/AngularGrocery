import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css']
})
export class AppGroceryComponent {

  task: string;
  tasks = [];
 
  onClick(){
    if(this.task!=''){
    this.tasks.push({name: this.task});
    this.task = '';
    }
    
  }

}
