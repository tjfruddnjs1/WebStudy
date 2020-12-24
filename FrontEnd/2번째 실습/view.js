const { func } = require('prop-types');

(function(exports){
    'use strict';
    function View(template){
        console.log('View created');
        this.template = template;
    }
    exports.app = exports.app || {};
    exports.app.View = View;
})(this);