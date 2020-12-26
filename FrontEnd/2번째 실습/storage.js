const { func } = require('prop-types');

(function(exports){
    'use strict';
    function Storage(){
        console.log('store created');
    }
    exports.app = exports.app || {};
    exports.app.Storage = Storage;
})(this);

/*
 이번 프로젝트에서는 DB가 아닌 localstorage를 통해 데이터 저장
 localStorage에도 name을 지정해줘서 접근하도록
*/
function Storage(name, callback){
    console.log('storage created!');
    callback = callback || function(){};

    this._dbName = name;
    //applcation 실행 1회 때만 생성
    if(!localStorage[name]){
        var data = {
            todos:[] //배열로 생성하여, index로 접근 가능하도록
        };
        localStorage[name] = JSON.stringify(data);
    }
}

Storage.prototype.findAll = function(callback){
    console.log('Storage.findAll method execute!');
    callback = callback || function() {};
    callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
};

/*
    else부분이 새로운 값을 추가하는 부분인데 새로운 객체를 data 배열에 추가해주기 위해
    기존 localStorage에 저장되어 있는 data를 JSON.parse method를 통해 파싱하여 push method 통해 저장
    복잡한 id 보다 data().getTime()을 통해 현재 시간에 기반한 id 값 부여
*/
Storage.prototype.save = function(updateData, callback, id){
    console.log('Storage.save method execute!');
    var data = JSON.parse(localStorage[this._dbName]);
    var todos = data.todos;

    callback = callback || function(){};

    if(id){
        for(var i=0;i<todos.length;i++){
            if(todos[i].id == id){
                for(var key in updateData){
                    todo[i][key] = updateData[key];
                }
                break;
            }
        }
        localStorage[this._dbName] = JSON.stringify(data);
        callback.call(this, todos);
    }else{
        updateData.id = new Data().getTime();

        todos.push(updateData);
        localStorage[this._dbName] = JSON.stringify(data);
        callback.call(this, [updateData]);
    }   
};