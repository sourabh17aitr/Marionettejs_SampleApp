///import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
/* import ItemView from './ItemView';
import FormView from './FormView'; */

/* Views */
import TodoView from '../views/layout';
/* Models */
import TodoModel from '../models/todo.js'


/* Templates */
/* import template from '../templates/layout.jst'
import TodoTemp from '../templates/todoitem.jst' */

var initialData = [
  {assignee: 'Scott', text: 'Write a book about Marionette'},
  {assignee: 'Andrew', text: 'Do some coding'}
];

export default Marionette.Application.extend({
  //region: '#app',

  onStart: function(options) {
    console.log(options.initialData)
    var todo = new TodoView({
      collection: new Backbone.Collection(options.initialData),
      model: new TodoModel()
    });
    todo.render();
    todo.triggerMethod('show');
  }

 /*  onStart() {
    this.showView(new ItemView());
    //this.showView(new FormView());
    console.log(this) 
  } */
});



    /* var HelloWorld = Marionette.View.extend({  // 2
      el: '#app-hook',  // 3
      template: '#book-template' // 4
    });

    var hello = new HelloWorld();  // 5
    
    hello.render();  // 6 */


     /* var ToDo = Marionette.View.extend({
      tagName: 'li',
      template: TodoTemp
    });

    var TodoList = Marionette.CompositeView.extend({
      el: '#app-hook',
      template: TodoListTemp,

      childView: ToDo,
      childViewContainer: 'ul',

      ui: {  // 1
        assignee: '#id_assignee',
        form: 'form',
        text: '#id_text'
      },

      triggers: {  // 2
        'submit @ui.form': 'add:todo:item'
      },

      collectionEvents: {  // 3
        add: 'itemAdded'
      },

      onAddTodoItem: function () {  // 4
        console.log(this)
        this.model.set({
          assignee: this.ui.assignee.val(),
          text: this.ui.text.val()
        });

        if (this.model.isValid()) {
          var items = this.model.pick('assignee', 'text');
          this.collection.add(items);
        }
      },

      itemAdded: function () {  // 6

        this.model.set({
          assignee: '',
          text: ''
        });

        this.ui.assignee.val('');
        this.ui.text.val('');
      }

    }); */

    /* var todo = new TodoList({
      collection: new Backbone.Collection([
        { assignee: 'Scott', text: 'Write a book about Marionette' },
        { assignee: 'Andrew', text: 'Do some coding' }
      ]),
      model: new TodoModel()
    });

    todo.render(); */