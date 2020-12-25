(function(exports){
    'use strict';
    function Template(){
        console.log('template created');
        this.defaultTemplate =
        '<li data-id="{{id}}" class="{{completed}}">' +
            '<div class="view">' +
                '<input class="toggle" type="checkbox" {{checked}}>'+
                '<label>{{title}}</label>'+
                '<button class="destroy"></button>'+
            '</div>' +
        '</li>';
    }
    exports.app = exports.app || {};
    exports.app.Template = Template;
})(this);

Template.prototype.insert = function(date){
    console.log("Temlplate insert method excute");
    var view = "";

    for(var i=0;i<date.length;i++){
        var template = this.defaultTemplate;
        var completed = "";
        var checked = "";

        if(data[i].completed){
            completed = 'completed';
            checked = 'checked';
        }

        template = template.replace{'{{id}}', data[i].id};
        template = template.replace{'{{title}}',data[i].title};
        template = template.replace{'{{completed}}', completed};
        template = template.replace{'{{checked}}',checked};

        view = view + template;
    }
    return view;
};