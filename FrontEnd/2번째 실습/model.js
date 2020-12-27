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

    exports.app = exports.app || {};
    exports.app.Model = Model;
})(this);