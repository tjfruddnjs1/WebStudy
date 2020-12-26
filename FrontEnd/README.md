# WebStudy

## 실습 과정

- ### 두 번째 실습 : MVC 패턴 적용

<img src="https://user-images.githubusercontent.com/41010744/103044624-9d4e6800-45c4-11eb-9ab4-a37a19eb6c81.GIF">

- Storage.js : 데이터베이스와 같은 역할
- Model.js : CRUD(Create, Read, Update, Delete)역할
- Controller.js : 사용자의 요청에 의한 모델과 뷰의 연결
- View.js : Template를 인자로 받아 화면에 데이터를 보여주는 역할 또, controller와 바인딩하여 레코드의 변경을 화면에 바로바로 렌더링
- Template.js : View가 렌더링할 때 넘겨받는 데이터 인자로 html코드 조각의 일부를 치환하여 원하는 형식으로 입력한 데이터를 출력하는 템플릿 엔진 역할
- App.js : 각 MVC 역할을 하는 코드들을 모듈화하기 위한

## 실습 결과물

- ### 첫 번째 실습 : To-do List 구현하기

* 해당 작업을 입력하고 enter를 치면 차례대로 List가 생성된다.
* 수행한 작업에 대해서는 더블 클릭을 통해 done list로 옮겨준다.
* list item에 마우스를 올렸을 때 event를 추가한다.
* list item을 수정하거나 삭제하는 기능도 추가한다.
<div>
<img width="500" src="https://user-images.githubusercontent.com/41010744/102900985-65ee9700-44b0-11eb-958d-0fd4de427f6e.GIF">
<img width="500" src="https://user-images.githubusercontent.com/41010744/102901093-8a4a7380-44b0-11eb-81b3-857dc3f9d454.GIF">
<img width="500" src="https://user-images.githubusercontent.com/41010744/102901098-8c143700-44b0-11eb-9096-4bb086ad209b.GIF">
<img width="500"src="https://user-images.githubusercontent.com/41010744/102901105-8d456400-44b0-11eb-99a9-e2493e5da6ca.GIF">
</div>

## HTML

- ### input : form의 요소 중 하나, 사용자가 정보를 입력하는 부분을 만들어야 할 때 사용
  type에 따라 어떤 형식으로 정보를 받을지 결정된다. id 값을 통해 서로 구분할 수 있다

```html
<input type="유형" 속성="속성값" />
```

**input의 속성**
키워드 | 설명
------- | -------
readonly | 읽기 전용 필드로 만들기
placeholder | 힌트 표시 > 필드 클릭시 내용 사라짐
autofocus | 페이지를 불러오자 마자 특정 부분에 마우스 커서가 표시되도록 하는 것
autocomplete | 자동완성 설정
max/min | input 필드의 최대값과 최소값 지정
maxLength | 텍스트 필드에 최대로 입력할 수 있는 문자의 개수 지정
step | 숫자의 간격 설정, _input이 date, datetime, datetime-local, month, week, time, number, range일 경우만 사용 가능_
required | 필수 입력 필드 지정 > 빈칸일 시 넘어가지 않음

- ### font-awesome
  **https://fontawesome.com/**
  : 사용하고 싶은 아이콘을 가져다 사용 가능
  추가적으로 html 태그에 link 삽입 위의 홈페이지에서 link를 받아서

```html
<div class="scroll-icon-down">
  <a href="#"><i class="fas fa-angle-up"></i></a>
</div>
```

---

## JavaScript

- ### document.getElementById("id")
  : 태그안의 ID값을 이용해서 오브젝트에 접근할 수 있다.

ex. id = btn인 object 가져오기

```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello World</title>
  </head>
  <body>
    <input type="button" id="btn" value="button" />
    <script>
      var btn = document.getElementById("btn");
      alert(btn);
    </script>
  </body>
</html>
```

- ### document.createElment('html 요소')
  : 태그안의 html요소를 문서에 추가할 수 있다.

ex. click이라는 텍스트를 가진 button 요소를 추가하는 예제

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>JavaScript</title>
  </head>
  <body>
    <script>
      var jbBtn = document.createElement("button");
      var jbBtnText = document.createTextNode("Click");
      jbBtn.appendChild(jbBtnText);
      document.body.appendChild(jbBtn);
    </script>
  </body>
</html>
```

- ### innerText
  : div 내부 글 p 태그 내부 등 내부의 글을 가져올 때 사용한다. 또는 입력할 때 사용

ex. innerHTML과의 차이

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <p id="test">안녕하세요 <span>ㅎㅎ</span></p>
    <script type="text/javascript">
      alert(document.getElementById("test").innerText); //hi098123.tistory.com
      alert(document.getElementById("test").innerHTML); //hi098123.tistory.com
    </script>
  </body>
</html>
```

**결과**

```html
innerText : 안녕하세요 ㅎㅎ innerHTML : 안녕하세요 <span>ㅎㅎ</span>
```

- ### appendChild()
  : 새로운 노드를 해당 노드의 자식 노드 리스트의 맨 마지막에 추가합니다.

ex. 자식 노드 리스트에 추가

```javascript
function appendNode() {
  var parent = document.getElementById("list"); // 아이디가 "list"인 요소를 선택함.

  var newItem = document.getElementById("item"); // 아이디가 "item"인 요소를 선택함.

  parent.appendChild(newItem); // 해당 요소의 맨 마지막 자식 노드로 추가함.
}
```

- ### oncblclick, onclick
  : 전자는 더블클릭했을 떄의 후자는 클릭했을 때의 이벤트 처리

```javascript
var listItem = document.createElement("li");
listItem.id = "li_" + id;
listItem.ondblclick = removeItem;

var checkBox = document.createElement("input");
//checkbox has date id
checkBox.type = "checkbox";
checkBox.onclick = updateItemStatus;
checkBox.id = "cb_" + id;
```

- ### onkeyup()
  : 키를 눌렀다가 땠을 때의 이벤트

ex. ENTER 키 눌렀을 때의 동작

```javascript
inputText.onkeyup = function(event) {
    //event.which (13) == ENTER key
    if(event.which == 13){
        var itemText = inputText.value;
        //prevent blank
        if (!itemText || itemText == "" || itemText == " ") return false;
        addNewItem(document.getElementById('todolist'), itemText);
        inputText.focus();
        inputText.select();
    }
```

- ### focus()
  : 해당 요소에 포커스를 부여 > 텍스트 창의 경우 커서를 위치시켜 바로 입력

ex. inputText 변수에 focus method 부여

```javascript
var inputText = document.getElementById("inputText");
inputText.focus();
```

- ### select()

  : 해당 이벤트 코드 안에 포커스를 잡아주기 위한 함수로 그 영역을 다시 선택해준다.

- ### this
  : 모든 함수는 실행할 때마다 this 객체 추가

**case 1. 객체의 메서드를 호출할 때 this 바인딩**
: this는 함수를 실행할 때 함수를 소유하고 있는 객체를 참조
즉, 해당 메서드를 호출한 객체로 바인딩

```javascript
var myObject = {
  name : 'foo';,
  sayName : function(){
    console.log(this);
    console.log(this.name);
  }
}

myObject.sayName();
/* result */
//Object {name:"foo"}
//foo
```

**case 2. 함수를 호출할 때 this 바인딩**
: 함수를 호출하면, 해당 함수 내부 코드에서 사용된 this는 **전역객체**에 바인딩

```javascript
var value = 100;

var MyObject = {
  value : 1;
  func1 : function(){
    this.value += 1;
    console.log(this.value);

    func2 : function(){
      this.value += 1;
      console.log(this.value);

      func3 : function(){
        this.value += 1;
        console.log(this.value);
      }

      func3();
    }
    func2();
  }
};

myObject.func1();
```

**case 3. 생성자 함수를 통해 객체를 생성할 때 this 바인딩**
: 기존 함수에 new 연산자를 붙여서 호출하면 그 함수는 생성자 함수로 동작
기존의 함수와 차이가 없기 때문에, 생성자 함수 맨 앞은 대문자로 지어 사용하여 혼란을 막는다.

```javascript
var Person = function (name) {
  console.log(this);
  this.name = name;
};

var foo = new Person("foo");
console.log(foo.name); //foo
```

- ### String prompt([String message], [String defaultValue])

* 문자열을 입력할 때 사용
* 만약 숫자를 입력 받아야하는 경우 문자열로 입력 받은 뒤 변환
* 첫번째 매개변수는 입력 창에서 띄워줄 메시지
* 두번째 매개변수는 입력 부분의 기본 값

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>prompt</title>
    <script type="text/javascript">
      var inputString = prompt("문자열을 입력하세요", "기본 값 문자열");
      alert(inputString);
    </script>
  </head>

  <body></body>
</html>
```

- ### String.replace('String', 'String2')

  : String에서 String1을 찾아 String2로 바꾼다.

- ### HTML 화면에 보이고 안보이게 하게 하기 위한 이벤트
  _document.getElmentById().style.display = "none"_

```javascript
function removeItem() {
  var listItemId = this.id.replace("li_", "");
  document.getElementById("li_" + listItemId).style.display = "none";
}
```

- ### addEvenListener
  : 특정 이벤트 발생 시 특정 함수를 실행할 수 있게 해주는 기능

**자주 사용하는 이벤트**
이벤트명 | 설명
------- | -------
change | 변동이 있을 때 발생
click | 클릭시 발생
focus | 포커스 얻었을 때 발생
keydown | 키를 눌렀을 때 발생
load | 로드가 완료 되었을 때 발생
mousedown | 마우스를 클릭했을 때 발생
mouseout | 마우스가 특정 객체 밖으로 나갔을 때 발생
mouseover | 마우스가 특정 객체 위로 올려졌을 때 발생
mousemove | 마우스가 움직였을 때 발생
mouseup | 마우스에서 손을 땟을 때 발생
select | option 태그 등에서 선택 했을 때 발생

- ### parentElement

  : 특정 element의 부모 element를 가지고 있는 속성

- ### use strict
  : 코드에 더 나은 오류 검사를 적용하는 방법
  암시적으로 선언한 변수를 사용하거나 읽기 전용 속성에 값을 할당하거나 확장할 수 없는 개체에 속성을 추가할 수 없다.
  전역 컨텍스트에서 선언되는 경우 프로그램의 모든 코드에 strict 모드가 적용되고 함수 내에서 선언되는 경우 함수의 모든 코드에 strict 모드가 적용됩니다.

* 장점

1. 흔히 발생하는 코딩 실수를 잡아내서 예외를 발생 시킵니다.
2. 상대적으로 안전하지 않은 액션이 발생하는 것을 방지합니다.
3. 정확하게 고려되지 않은 기능들을 비활성화 시킵니다.

- ### (function() { })()
  : Immediately-invoked function expression : 즉시 작동하는 함수식 "이안에 들어있는 코드를 바로 실행해라"

ex. 장점 1. 코드 사이의 충돌을 예방

```javascript
(function() {
  var popup;
  var open = function(e) {
  });

  //.....

  open(popup);
})();

(function() {
  var modal;
  var open = function(e) {
  });

  //......

  open(modal);
})();
```

ex. 장점 2. 변수의 값 즉시 할당 및 전역 변수/함수가 되지 않도록 방지

```javascript
var root = (function () {
  return document.documentElement || document.body;
})();
console.log(root); // <html />

var root2 = function () {
  return document.documentElement || document.body;
};
console.log(root2); // function() { return ... }
```

- ### test = test || {};

  : test가 false, undefined, 0, null etc일 때 다음과 같이 표현

- ### $(선택자).동작함수();
  : 달러($)기호는 제이쿼리를 의미하고, 제이쿼리에 접근할 수 있게 해주는 식별자다. 선택자를 이용하여 원하는 HTML 요소를 선택하고, 동작 함수를 정의하여 선택된 요소에 원하는 동작을 설정한다.

```javascript
$(document).ready(function () {
  $("#doc").text("문서가 전부 로드됐어요!");
});

$(window).load(function () {
  $("#win").text("창이 모두 로드됐어요!");
});
```

- ### prototype
  : 자바스크립트에 클래스는 없지만 함수와 new를 통해 클래스를 흉내낼수 있다. 아래의 예시에서 메모리 할당을 클래스처럼 할당하여 줄이기 위한

```javascript
function Person() {}
Person.prototype.eyes = 2;
Person.prototype.nose = 1;
var kim  = new Person();
var park = new Person():
console.log(kim.eyes); // => 2
```

- prototype의 constructor 프로퍼티
  : 개발자가 특별히 할당하지 않더라도 모든 함수는 "prototype"프로퍼티를 가지는데 기본 프로퍼티인 "prototype"은 constructor 프로퍼티 객체를 생성 > 함수 자신을 가리킨다.

- ### JSON.stringify(value, replacer, space)
  : JSON 객체를 String 객체로 반환한다.

1. value(필수) : JSON 문자열로 반환할 값 > (배열, 객체, 숫자/문자) 가능
2. replacer(선택) : 함수/배열 가능 > 이 값이 null이거나 제공되지 않으면 객체의 모든 속성들이 JSON 문자열 결과에 포함

- ### JSON.parse()
  : String 객체를 JSON 객체로 변환시킨다.
