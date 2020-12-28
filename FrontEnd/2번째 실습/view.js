(function(exports){
    'use strict';
    function View(template){
        console.log('View created');
        this.template = template;

        this.$todoList = document.getElementById('todo-list');
        this.$newTodo = document.getElementById('new-todo');
    }


    //bind method 틀 생성
    View.prototype.bind = function(event, handler){
        var self = this;

        if(event == 'newTodo'){
            console.log('View bind newTodo execute');
            var temp = self.$newTodo;
            temp.addEventListener('change',function(){
                handler(self.$newTodo.value);
            });
        /*
            X버튼 클릭시 이벤트 발생
            template.js 파일에 추가된 html X 버튼 요소 destroy click시 해당 list 삭제
            해당 list만 삭제해야하기 때문에 이벤트 발생 list의 id값을 veiw 내부
            _getItemId method를 통해 eventHandler 발생
        */
        }else if(event == 'itemRemove'){
            var todo = self.$todoList;
            todo.addEventListener('click',function(event){
                var target = event.target;
                if(target.className == 'destroy'){
                    handler({id:self._getItemId(target.parentNode,'li')});
                }
            });
        /*
            list를 삭제할 때와 마찬가지로 bind method를 통해 event 등록
            event 일어난 곳이 어느 부분인지 판단하기 위한 if문
            template.js 파일에 추가된 html 코드에 checkbox의 className이 toggle 이므로
            이 checkbox에서 발생한 이벤트에만 반응하도록 설정
            handler에게 전달하는 객체는 id와 completed라는 속성 보유
        */
        }else if(event == 'itemToggle'){
            console.log('View.prototype.bind.itemToggle execute!');
            todo.addEventListener('click', function(event){
                var target = event.target;
                if(target.className == 'toggle'){
                    handler({id : self._getItemId(target), completed:target.checked});
                }
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
            },

            //넘겨받은 parameter에 해당하는 list를 화면상에서 제거하는 method
            removeItem : function(){
                self._removeItem(parameter);
            },

            elementComplete : function(){
                console.log('View.prototype.render.elementComplete execute!');
                self._elementComplete(parameter.id, parameter.complted);
            }
        };
        viewCommands[viewCmd]();
    };

    //View에서 수행되는 프린팅 작업 > innerHTML을 이용하여 template.js를 통해 data가 삽입된 html 코드 조각 삽입
    View.prototype._addItem = function(id){
        this.$todoList.innerHTML = this.template.insert(id);
    };

    //click event가 발생한 list의 id 값을 잡아주는 역할
    View.prototype._getItemId = function(element, tagName){
        var li;
        if(tagName){
            if(element.parentNode.tagName.toLowerCase() == tagName.toLowerCase()){
                li = element.parentNode;
            }
        }else{
            li = element.parentNode.parentNode;
        }

        //HTML data-id=*에서 *이 id인 값을 10진수로 parsing
        return parseInt(li.dataset.id , 10);
    };

    View.prototype._removeItem = function(id){
        var elem = document.querySelector('[data-id=' + id + '"]');
        if(elem){
            this.$todoList.removeChild(elem);
        }
    };

    View.prototype._elementComplete = function(id, completed){
        console.log('View.prototype.render._elementComplete execute!');
        var listItem = document.querySelector('[data-id="'+id+'"]');

        if(listItem){
            listItem.className = completed ? 'completed' : '';
        }
    };

    exports.app = exports.app || {};
    exports.app.View = View;

})(this);
