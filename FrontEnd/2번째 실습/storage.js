const { func } = require('prop-types');

(function(exports){
    'use strict';
    function Storage(){
        console.log('store created');
    }

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
    
    /*
        localStorage에 있는 데이터의 값을 추가/변경을 위해
        자바스크립트가 조작할 수 있는 데이터 형식으로 변환
        그렇기에 storage에 dat를 조작하는 과정 전에
        localstorage로부터 값을 꺼내 parsing
        그리고 넘어온 data배열에 넘겨받은 id 값과 일치하는 list객체를 찾아
        삭제를 위해 splice method 사용
    */
    Storage.prototype.remove = function(id, callback){
        var data = JSON.parse(localStorage[this._dbName]);
        var todos = data.todos;

        for(var i=0;i<todos.length;i++){
            if(todos[i].id == id){
                todos.splice(i,1);
                break;
            }
        }

        localStorage[this._dbName] = JSON.stringify(data);
        callback.call(this, todos);
    };

    exports.app = exports.app || {};
    exports.app.Storage = Storage;
})(this);