import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTodosService {
  items = [
    {id:1, title:"Сделать пять отжиманий", completed:false, important:false, category:'Личные дела'},
    {id:2, title:"Купить новую приору", completed:false, important:false, category:'Покупки'},
    {id:3, title:"Купить фотоаппарат до свадьбы", completed:false, important:false, category:'Покупки'},
    {id:4, title:"Встретиться", completed:false, important:false, category:'Личные дела'},
    {id:5, title:"Прочитать 52 книги до конца года", completed:false, important:false, category:'Чтение'}
  ];

  toggleCompleted(id){
    this.items = this.items.map(item => {
      if (item.id === id){
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })
  }
  toggleImportant(id){
    this.items = this.items.map(item => {
      if (item.id === id){
        return {
          ...item,
          important: !item.important
        };
      }
      return item;
    })
  }
  removeCompletedItems(){
   this.items = this.items.filter(item => !item.completed);
  }
  getCategories() {
    const categories = [];

    this.items.forEach(item => {
      if(categories.indexOf(item.category) === -1){
       categories.push(item.category);
    }
    });

    return categories;
  }

  selectedCategory = null;

  onlyImportant = false;

   toggleOnlyImportant(){
     this.onlyImportant = !this.onlyImportant;
   }

  selectCategory(category){
    this.selectedCategory = category;
  }

  getItems() {
    let items;
    if(this.onlyImportant){
      items = this.items.filter(item => item.important);
    } else {
      items = this.items;
    }

    if (this.selectedCategory !== null) {
      return this.items.filter(item => item.category === this.selectedCategory);
    }
    return items;
  }
  getOnlyImportant(){
    return this.onlyImportant;
  }
  constructor() { }
}
