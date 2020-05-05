import { Component, OnInit } from '@angular/core';
import { StoreTodosService } from '../store-todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todosStore: StoreTodosService ) { }
  getItems(){
    return this.todosStore.getItems();
  }
   
   isOnlyImportant(){
     return this.todosStore.onlyImportant;
   }
  toggleCompleted(id){
    this.todosStore.toggleCompleted(id);
  }
  toggleImportant(id){
    this.todosStore.toggleImportant(id);
  }
  removeCompletedItems(){
    this.todosStore.removeCompletedItems();
  }
  toggleOnlyImportant() {
    this.todosStore.toggleOnlyImportant();
  }
  ngOnInit(): void {
  }

}
