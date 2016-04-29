function TodoController(TodoService) {
  var ctrl = this;
  ctrl.list = [];
  ctrl.newTodo = '';

  function getTodos() {
     TodoService
     .retrieve()
     .then(function success(response) {
       ctrl.list = response;
     });
  }

  ctrl.addTodo = function() {
    if (!ctrl.newTodo) {
      return;
    }
    TodoService
    .create({
       title: ctrl.newTodo,
       completed: false
     })
     .then(function success(response) {
       ctrl.list.unshift(response);
       ctrl.newTodo = '';
     });
  }

  ctrl.removeTodo = function(item,index) {
    TodoService
    .remove(item)
    .then(function success(response) {
      ctrl.list.splice(index,1);
    })
  }

  ctrl.updateTodo = function (item,index) {
    if (!item.title) {
      ctrl.removeTodo(item,index);
    }
    TodoService
    .update(item);
  }
  ctrl.getRemaining = function() {
    return ctrl.list.filter(function(item) {
      return !item.completed;
    });
  }

  ctrl.toggleState = function(item) {
    TodoService
    .update(item)
    .then(function success() {

    }, function error() {
      item.completed = !item.completed;
    })
  }

  getTodos();
}

angular
.module('app')
.controller('TodoController', TodoController);
