/*
    초기에 생성되자마자 모든 list를 보여주기 위해 controller prototype에 있는 showAll method 호출
    생성자 함수에는 각종 bind를 통해 view와 communication
    controller에서 view를 통제하고, model을 통제하는데 수월
    이벤트 발생시 발생한 이벤트에 해당하는 function이 호출되고,
    view에 있는 handler라는 인자를 통해 controller prototype에 저장되어 있는 method 호출
*/

const { func } = require('prop-types');

(function(exports){
    'use strict';
    function Controller(model,view){
        console.log('controller created');
        this.model = model;
        this.view = view;

        var self = this;
        //bind를 통해 레코드 변경을 자동적으로 view에 반영
        this.view.bind('newTodo', function(title){
            self.addItem(title);
        });

        //initializing
        this.showAll();
    }
    exports.app = exports.app || {};
    exports.app.Controller = Controller;
})(this);

/*
    Controller의 prototype에 있는 메소드들은 모두 model에 data 조작을 위임하는 method
    또한, callback 구조를 통해 변경된 data에 대한 정보를 view에 전달하여 rendering 하도록 한다.
*/
Controller.prototype.showAll = function(){
    console.log('Controller.showAll method execute');
    var self = this;
    this.model.read(function(data){
        self.view.render('showEntries', data);
    });
};

/*
    addItem method 역시 model에게 data 변경(추가/삭제)를 요청하고, callback으로 넘어온 값을 view에 전달
    view, bind 로부터 넘어온 title 값이 비어있는 값인지 확인하는 코드가 추가되었다.
    this.showAll()은 추가한 다음 바로 list를 출력하기 위한 method
    self.view.render함수는 아직 수행되지 않았다. model에게 callback function으로 넘어간다
*/
Controller.prototype.addItem = function(title){
    console.log('Controller.addItem method execute!');
    var self = this;
    if(title.trim() == ''){
        return;
    }
    self.model.create(title,function(){
        self.view.render('clearNewTodo', title);
    });
    this.showAll();
};