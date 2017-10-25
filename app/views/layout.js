import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import ToDoModel from '../models/todo';
//import TodoTemp from '../templates/todoitem.jst'
/* import formTemp from '../templates/form.jst'
import layoutTemp from '../templates/layout.jst' */

import layoutTemp from '../templates/layout.jst'

import FormView from './form'
import ListView from './list'



var Layout = Marionette.View.extend({
  el: '#app-hook',

  template: layoutTemp,

  regions: {
    form: '.form',
    list: '.list'
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  onShow: function() {
    var formView = new FormView({model: this.model});
    var listView = new ListView({collection: this.collection});

    this.showChildView('form', formView);
    this.showChildView('list', listView);
  },

  onChildviewAddTodoItem: function(child) {
    this.model.set({
      assignee: child.ui.assignee.val(),
      text: child.ui.text.val()
    }, {validate: true});

    var items = this.model.pick('assignee', 'text');
    this.collection.add(items);
  },

  itemAdded: function() {
    this.model.set({
      assignee: '',
      text: ''
    });
  }
});

module.exports = Layout;