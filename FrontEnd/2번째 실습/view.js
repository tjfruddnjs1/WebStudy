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

//bind method 틀 생성
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

//View의 핵심 역할 > viewCmd를 통해 실행
View.prototype.render = function(viewCmd,data){
    var self = this;
    //data로 넘어오는 값이 storage에 있는 모든 data, 모든 데이터를 출력해주는 method
    var viewCommands = {
        showEntries : function(){
            console.log('View.render.showEntries execute!');
            self._addItem(parameter);
        },

    //입력을 마치고 나면 input tag안을 비워주는 역할을 하는 method
    clearNewTodo : function(){
        console.log('View.render.clearNewTodo.execute!');
        self.$newTodo.value = '';
        }
    };
    viewCommands[viewCmd]();
};

//View에서 수행되는 프린팅 작업 > innerHTML을 이용하여 template.js를 통해 data가 삽입된 html 코드 조각 삽입
View.prototype._addItem = function(id){
    this.$todoList.innerHTML = this.template.insert(id);
}
