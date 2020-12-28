(function(exports){
    'use strict';
    function Model(storage){
        console.log('model created');
        this.storage = storage;
    }


    Model.prototype.create = function(title, callback){
        console.log("Model.create method execute!");
        title = title || '';
        callback = callback || function(){};

        var newItem = {
            title : title.trim(),
            completed : false
        };

        this.storage.save(newItem, callback);
    };

    Model.prototype.read = function(callback){
        this.storage.findAll(callback);
    };
    // remove , callback(view의 render함수) 그대로 전달
    Model.prototype.remove = function(id, callback){
        this.storage.remove(id, callback);
    };

    Model.prototype.update = function(id, data, callback){
        //controller로부터 전달받은 변동사항을 storage에게 전달하여 데이터 수정
        console.log('Model.prototype.update execute!');
        this.storage.save(data,callback, id);
    };

    exports.app = exports.app || {};
    exports.app.Model = Model;
})(this);