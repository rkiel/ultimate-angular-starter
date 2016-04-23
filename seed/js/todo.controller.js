function TodoController() {
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
