import Marionette from 'backbone.marionette';
import formTemp from '../templates/form.jst'

var FormView = Marionette.View.extend({
    tagName: 'form',
    template: formTemp,
  
    triggers: {
      submit: 'add:todo:item'
    },
  
    modelEvents: {
      change: 'render'
    },
  
    ui: {
      assignee: '#id_assignee',
      text: '#id_text'
    }
  });
  
  
  module.exports = FormView;