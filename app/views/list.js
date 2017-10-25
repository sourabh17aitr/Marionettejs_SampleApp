import Marionette from 'backbone.marionette';
import TodoTemp from '../templates/todoitem.jst'


var ToDo = Marionette.View.extend({
  tagName: 'li',
  template: TodoTemp
});


var TodoList = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: ToDo
});


module.exports = TodoList;