function TodoController() {
  this.newTodo = '';
  this.addTodo = function() {
     this.list.unshift({
       title: this.newTodo,
       completed: false
     });
     this.newTodo = '';
  }
  this.removeTodo = function(item,index) {
    this.list.splice(index,1);
  }
  this.list = [{
    title: 'First to do item',
    completed: false
  },{
    title: 'Second to do item',
    completed: true
  },{
    title: 'Third to do item',
    completed: false
  }]
}

angular
.module('app')
.controller('TodoController', TodoController);
