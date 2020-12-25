const { func } = require('prop-types');
const { View } = require('react-native');

(function(exports){
    'use strict';
    function View(template){
        console.log('View created');
        this.template = template;

        this.$todoList = document.getElementById('todo-list');
        this.$newTodo = document.getElementById('new-todo');
    }
    exports.app = exports.app || {};
    exports.app.View = View;
})(this);

View.prototype.bind = function(event, handler){
    var self = this;

    if(event == 'newTodo'){
        console.log('View bind newTodo execute');
        var temp = self.$newTodo;
        temp.addEventListener('change',function(){
            handler(self.$newTodo.value);
        });
    }
};