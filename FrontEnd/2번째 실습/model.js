const { func } = require('prop-types');

(function(exports){
    'use strict';
    function Model(storage){
        console.log('model created');
        this.storage = storage;
    }
    exports.app = exports.app || {};
    exports.app.Model = Model;
})(this);

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