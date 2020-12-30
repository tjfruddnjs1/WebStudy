# FrontEnd

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

- ### parseInt(string, n)

  : string을 n진법일 때의 값으로 바꿔준다 > 문자열을 정수로

- ### Array.prototype.slice(start[, end])
  : start부터 end전까지의 복사본을 새로운 배열 객체로 반환 즉, 원본 배열은 수정되지 않는다.

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr1 = arr.slice(3, 5); // [4, 5]
var arr2 = arr.slice(undefined, 5); // [1, 2, 3, 4, 5]
var arr3 = arr.slice(-3); // [8, 9, 10]

console.log(arr1); // [4, 5]
console.log(arr2); // [1, 2, 3, 4, 5]
console.log(arr3); // [8, 9, 10]
```

- ### Array.prototype.splice(start[, deleteCount[, item1[, item2]]])
  : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다 즉, 원본 배열을 수정한다.

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(10, 2, "a", "b", "c");
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c"]
console.log(arr1); // [11, 12]

/*
  splice() 함수를 사용하면 원본 배열인 arr이 변경된다.
  10번째 인덱스부터 2개의 요소를 삭제하고 'a', 'b', 'c'를 추가했으므로
  11과 12가 삭제되고 이 삭제된 요소들의 배열은 arr1 변수에 담긴다.
*/
```

- ### Array.prototype.forEach()
  : 주어진 함수를 배열 요소 각각에 대해 실행

```javascript
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

- ### fucntion.prototype.apply()
  : 주어진 this값과 배열로 제공되는 arguments로 함수를 호출한다.

```javascript
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2
```

- ### callback fucntion
  : 파라미터로 함수를 전달받아 내부에서 실행하는 함수

**콜백함수 (Callback function) 사용 원칙**

1. 익명의 함수 사용
   : 이름이 없는 '익명의 함수'를 사용 > 함수 내부에서 실행되기 때문에 이름을 붙이지 않아도 된다.

```javascript
let number = {1,2,3,4,5};

number.forEach(function(x){
  console.log(x * 2);
});
```

2. 함수의 이름(만) 넘기기
   : 자바스크립트는 null과 undefined 타입을 제외하고 모든 것을 객체로 다룬다. 함수를 변수/다른 함수의 변수처럼 사용할 수 있다. 함수를 콜백함수로 사용할 경우, 함수의 이름만 넘겨주면 된다. 아래의 예제에서 함수를 인자로 사용할 때 callback, finishFunc처럼 ()를 붙일 필요가 없다.

```javascript
function whatYourName(name, callback){
  console.log('name :', name);
  callback();
}

fucntion finishFunc(){
  console.log('finish function');
}

WhatYourName('seol', finishFunc);
// output : name : seol
//finsih Function
```

3. 전역변수, 지역변수 콜백함수의 파라미터로 전달 가능

```javascript
let fruit = "apple"; //전역 변수

function callbackFunc(callback) {
  let vegetable = "tomato"; //지역 변수
  callback(vegetable);
}

function eat(vegetable) {
  console.log(`fruit : ${fruit} / vegetable : ${vegetable}`);
}

callbackFunc(eat);

//output> fruit : apple / vegetatble : tomato
```

**콜백 함수 주의할 점**

- this를 사용한 콜백 함수

```javascript
let userData = {
  signUp: "2020-10-06 15:00:00",
  id: "minidoo",
  name: "Not Set",
  setName: function (firstName, lastName) {
    this.name = firstName + " " + lastName;
  },
};

function getUserName(firstName, lastName, callback) {
  callback(firstName, lastName);
}

getUserName("PARK", "MINIDDO", userData.setName);

console.log("1: ", userData.name);
console.log("2: ", window.name);

/*
<output>
1: Not Set
2: PARK MINIDDO
*/
```

첫 번째 콘솔의 값이 PARK MINIDOO 이기를 기대했지만 Not set이 출력되는데 setName() 함수가 실행되기 전의 name 값이 나오는 것인데, 이는 getUserName()이 전역 함수이기 때문이다.
즉, setName()에서 사용된 this 객체가 window라는 글로벌 객체를 가리킨다.
따라서 this를 보호할 수 있도록 콜백함수를 만들어야한다.

**해결 방안**
call()과 apply()를 사용하여 this를 보호할 수 있다.

- call() : 첫번째 인자로 this 객체 사용 나머지 인자들은 ,로 구분
- apply() : 첫번째 인자로 this 객체 사용 나머지 인자들은 배열 형태로 전달

ex. call()

```javascript
let userData = {
    signUp: '2020-10-06 15:00:00',
    id: 'minidoo',
    name: 'Not Set',
    setName: function(firstName, lastName) {
        this.name = firstName + ' ' + lastName;
    }
}

function getUserName(firstName, lastName, callback, obj) {
    callback.call(obj, firstName, lastName); //	- (1)
}

getUserName('PARK', 'MINIDDO', userData.setName, userData);	// - (2)

console.log(userData.name);

<output>
PARK MINIDDO
```

-(2) 에서 마지막 인자에 담긴 userData는 -(1) 에서 call 함수의 첫번째 인자로 전달된다. 즉, call()에 의해 userData에 this 객체가 매핑된다.

apply()도 인자로 배열로 전달한다는 점만 다르고 동일하게 작동한다.

```javascript
let userData = {
    signUp: '2020-10-06 15:00:00',
    id: 'minidoo',
    name: 'Not Set',
    setName: function(firstName, lastName) {
        this.name = firstName + ' ' + lastName;
    }
}

function getUserName(firstName, lastName, callback, obj) {
    callback.apply(obj, [firstName, lastName]);
}

getUserName('PARK', 'MINIDDO', userData.setName, userData);

console.log(userData.name);

<output>
PARK MINIDDO
```

# BackEnd(Node.js)

## 교재 : Node.js 교과서

### 2. 알아두어야 할 자바 스크립트

1. const, let, var

- var은 함수 스코프로 if문의 블록과 관계없이 접근 가능
- const와 let은 블록 스코프이고 둘의 차이는,
- const는 초기화시 값 할당 필요 & 값 변경 불가, let은 값 변경 가능
  const와 let을 사용함으로써 **호이스팅 문제 해결 및 코드관리** 하는데 수월 해짐
  _호이스팅_ : 함수 안에 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것

ex. 함수 스코프 vs 블록 스코프

```javascript
if (true) {
  var x = 3;
}
console.log(x); //3

if (ture) {
  const y = 3;
  console.log(y); // uncaught referenceError : y is not defined
}
```

2. 템플릿 문자열

- 큰/작은 따옴표로 감싸는 기존 문자열과 다르게 백틱(`)으로 감싼다.
- 특이점은 문자열 안에 변수를 넣을 수 있다.
- 백틱을 사용하므로 큰/작은 따옴표도 문자열 내에 넣을 수 있다.

ex. 기존 문자열 VS 템플릿 문자열

```javascript
var string1 = num1 + "더하기" + num2 + "는 '" + result + "'";

const string2 = `${num3} 더하기 ${num4} 는 '${result2}'`;
```

3. 객체 리터럴

- 객체의 메서드에 함수를 연결할 때 더는 콜론(:)과 function을 붙이지 않아도 된다.
- 속성명과 변수명이 동일한 경우 한번만 써도 되게 바뀌었다.
- 객체의 속성명은 동적으로 생성 가능 , 이전에는 객체 리터럴 바깥에서 해야했다.

ex. 이전 VS 현재

```javascript
var sayNode = function () {
  console.log("Node");
};
var es = "ES";
var oldObject = {
  sayJS: function () {
    console.log("JS");
  },
  sayNode: sayNode,
};
oldObject[es + 6] = "fantastic";
oldObject.sayNode(); //Node
oldObject.sayJS(); //JS
console.log(oldObject.ES6); //fantasic

const newObject = {
  sayJS() {
    console.log("JS");
  },
  sayNode,
  [es + 6]: "fantastic",
};
oldObject.sayNode(); //Node
oldObject.sayJS(); //JS
console.log(oldObject.ES6); //fantasic
```

4. 화살표 함수
   : 기존의 function(){}가 아닌 => 을 사용하여 간편하게 사용 가능하다. 화살표는 함수 내부에 return문밖에 없는 경우 return문을 줄일 수 있고 중괄호 대신 add3, add4처럼 return할 식을 바로 적으면 된다.

ex. 같은 기능을 하는 함수의 '=>'사용 예시

```javascript
function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => x + y;

function not1(x) {
  return !x;
}

const not2 = (x) => !x;
```

ex. 기존 function과 다른점 : this 바인딩

```javascript
var rel1 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logfriends: function () {
    var that = this;
    this.friends.forEach(function (friend) {
      console.log(that.name, friend);
    });
  },
};
rel1.logfriends();

const rel2 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logfriends() {
    this.friends.forEach((friend) => {
      console.log(this.name, friend);
    });
  },
};
rel2.logfriends();
```

5. 구조분해 할당
   : 객체와 배열로부터 속성이나 요소를 쉽게 꺼낼수 있다.

ex. 기존의 객체 속성에 같은 이름의 변수 대입 코드 VS 변경 후

```javascript
/*
  candyMachine 객체 안의 속성을 찾아 변수와 매칭 , count처럼 여러 단계 안의 속성도 찾을 수 있음
*/
//이전
var candyMachine = {
  status: {
    name: "node",
    count: 5,
  },
  getCandy: function () {
    this.status.count--;
    return this.status.count;
  },
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count--;

//이후
const {
  getCandy,
  status: { count },
} = candyMachine;
```

ex. 배열에 대한 구조분해 할당 분법

```javascript
var array = ["nodejs", {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

const [node, obj, , bool] = array;
```

6. 클래스
   : 클래스 문법이 추가되었지만 다른 언어처럼 클래스 기반으로 동작하는 것이 아닌 프로토타입 기반으로 동작 > 프로토타입 기반 문법을 보기 좋게 클래스로 바꾼 것

ex. 프로토타입 상속 예제 코드 vs Class 사용

```javascript
var Human = function(type){
  this.type = type || 'human';
};

Human.isHuman = function(human){
  return human instanceof Human;
}

Human.prototype.breathe = function(){
  alert('h-a-a-m');
};

var Zero = function(type,firstName, lastName){
  Human.apply(this, arguments);
  this.firstName = firstName;
  this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero; //상속하는 부분
Zero.prototype.sayName = fucntion(){
  alert(this.firstName + ' ' + this.lastName);
};
var oldZero = new Zero('human','Zero','Cho');
Human.isHuman(oldZero);

//class 사용하여 상속
class Human{
  constructor(type = 'human'){
    this.type = type;
  }

  static isHuman(human){
    return human instanceof Human;
  }

  breathe(){
    alert('h-a-a-m');
  }
}

class Zero extends Human{
  constructor(type, firstName, lastName){
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName(){
    super.breathe();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero('human','Zero','cho');
Human.isHuman(newZero); //true
```

7. 프로미스
   : 자바스크립트와 노드에서는 주로 비동기, 특히 이벤트 리스너를 사용할 때 콜백 함수를 자주 사용 ES2015부터는 자바스크립트와 노드의 API들이 콜백 대신 프로미스 기반으로 재구성되며, 악명 높은 *콜백 지옥(callback hell)*현상을 극복 실행은 바로 하되 결괏값은 나중에 받는 객체

_callback hell_ : 비동기 호출이 자주 일어나는 프로그램의 경우 발생하는 현상으로 함수의 매개변수로 넘겨지는 콜백 함수가 반복되어 코드의 들여쓰기 수준이 감당하기 힘들어질 정도로 깊어지는 현상

<br>

_비동기_ : 특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성
프로미스는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용, 일반적으로 웹 애플리케이션을 구현할 때 서버에서 데이터를 요청하고 받아오기 위해 아래와 같은 API를 사용

```javascript
$.get("url 주소/products/1", function (response) {
  ///...
});
```

위 API가 실행되면 서버에다가 '데이터 하나를 보내주세요'라는 요청을 보내는데 데이터를 받아오기도 전에 마치 데이터를 다 받아온 것마냥 화면에 데이터를 표시하려고 하면 오류가 발생하거나 빈화면이 뜬다. 이와 같은 문제점을 해결하기 위한 방법 중 하나가 프로미스이다.

**프로미스 코드**

- 규칙 1. 먼저 프로미스 객체를 생성
- 규칙 2. 기존 callback함수들을 매개변수로 대입
- 규칙 3. 이렇게 생성한 프로미스 객체에 예제의 then과 catch와 같은 메서드를 붙일 수 있다.

```javascript
const condition = true; //true면 resoleve, false면 reject
const promise = new Promise((resolve, reject) => {
  if(condition){
    resolve('성공');
  }else{
    reject('실패);
  }
});
//다른 코드가 들어갈 수 있음

promise
  .then((message) => {
    console.log(message); //성공(resoleve)한 경우 실행
  })
  .catch((error)=>{
    console.error(error); //실패(reject)한 경우 실행
  })
  .finally(()=>{
    console.log('무조건'); //끝나고 무조건 실행
  });
```

**콜백을 프로미스로 변경**

ex. 기존 콜백 > Promise로 변경

```javascript
function findAndSaveUser(Users) {
  Users.findOne({}, (err, user) => {
    //첫 번째 콜백
    if (err) {
      return console.error(err);
    }
    user.name = "zero";
    user.save((err) => {
      //두 번째 콜백
      if (err) {
        return console.error(err);
      }
      Users.findOne({ gender: "m" }, (err, user) => {
        //세 번째 콜백
        //생략
      });
    });
  });
}

function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = "zero";
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: "m" });
    })
    .then((user) => {
      //생략
    })
    .catch((err) => {
      console.error(err);
    });
}
```

then 메서드들은 순차적으로 실행되고 콜백에서 매번 따로 처리해야 했던 에로도 마지막 catch에서 한번에 처리 가능하다. 하지만 모든 콜백 함수를 위와 같이 바꿀수 있는 것이 아니라 메서드가 프로미스 방식을 지원하야 합니다.

- Promise.resolve : 즉시 resolve하는 프로미스를 만드는 방법
- Promise.reject : 즉시 reject하는 프로미스를 만드는 방법
- Promise.all : 프로미스 여러 개를 한번에 실행

```javascript
const promise1 = Promise.resolve("성공1");
const promise2 = Promise.resolve("성공2");
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); //성공1 성공2
  })
  .catch((error) => {
    console.error(error);
  });
```

8. async/await
   : 프로미스가 콜백 지옥을 해결했다지만, 여전히 코드가 장황하여 async/await 문법을 사용하여 프로미스를 사용한 코드를 더 깔끔하게 줄입니다.

ex. 프로미스 코드를 async/await을 사용하여 변경

```javascript
function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = "zero";
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: "m" });
    })
    .then((user) => {
      //생략
    })
    .catch((err) => {
      console.error(err);
    });
}

async function finadAndSaveUser(Users) {
  let user = await Users.findOne({});
  user.name = "zero";
  user = await user.save();
  user = await Users.findOne({ gender: "m" });
  //생략
}
```

함수 선언부를 일반 함수 대신 async function으로 교체한 후, 프로미스 앞에 await을 붙여 해당 함수는 resolve될 때까지 기다린 후 다음 로직으로 넘어갑니다.
하지만 에러를 처리하는 부분(프로미스가 reject된 경우)가 없으므로 다음과 같은 추가 작업이 필요합니다.

```javascript
async function finadAndSaveUser(Users) {
  try {
    let user = await Users.findOne({});
    user.name = "zero";
    user = await user.save();
    user = await Users.findOne({ gender: "m" });
    //생략
  } catch (error) {
    console.error(error);
  }
}
```

for문과 async/await을 같이 사용하여 프로미스를 순차적으로 실행할 수도 있습니다.

```javascript
const promise1 = Promise.resolve("성공1");
const promise2 = promise.resolve("성공2");
(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise);
  }
})();
```

앞으로 중첩되는 콜백 함수가 있다면 프로미스를 거쳐 async/await 문법으로 바꾸는 연습을 하여 코드를 간결하게 하는 습관이 중요

### AJAX : axios

- 웹 통신 기능을 제공하는 라이브러리 중 하나
- jquery와 비교하면, 타입스크립트도 사용이 가능하고 요청 취소도 가능하며 통신 기능만을 전담하므로 가볍다는 것이 장점
- 약간의 단점은 ES6버전의 자바스크립트 문법을 사용하므로 낮은 버전의 브라우저에서는 고동하지 않을수도 있다.

ex. GET요청 > axios.get 함수의 인수로 요청을 보낼 주소를 넣으면 된다.

```javascript
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
  axios.get('https://www.zerocho.com/api/get')
    .then((result) => {
      console.log(result);
      console.log(result.data); // {}
    })
    .catch((error) => {
      console.error(error);
    });
</script>
```

axios.get 내부에 new Promise가 있기 때문에 then과 catch사용 가능
result.data에는 서버로부터 보낸 데이터가 들어 있다 이는 개발자 도구 _console_ 탭에서 확인 가능하다.

ex. 위의 promise를 async/await 방식으로 변경

```javascript
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
  (async () => {
    try {
      const result = await axios.get('https://www.zerocho.com/api/get');
      console.log(result);
      console.log(result.data); // {}
    } catch (error) {
      console.error(error);
    }
  })();
</script>
```

익명 함수이기 때문에 즉시 실행을 위해 코드를 소괄호로 감싸 호출

ex. POST요청 > 데이터를 서버로 전송

```javascript
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
  (async () => {
    try {
      const result = await axios.post('https://www.zerocho.com/api/post/json', {
        name: 'zerocho',
        birth: 1994,
      });
      console.log(result);
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  })();
</script>
```

전체적인 구조는 비슷하지만 두 번째 인수로 데이터를 넣어 보내는 것이 다르다.

### FormData

- HTML form 태그의 데이터를 동적으로 제어할 수 있는 기능 주로 AJAX와 함께 사용
- 생성 객체의 append 메서드로 key-value 형식의 데이터를 저장 가능
- has('key') : 주어진 key에 해당하는 값이 있는지 ?
- get('key') : 주어진 key에 해당하는 value 출력
- getAll('key') : 주어진 key에 해당하는 모든 value 출력
- delete('key') : 해당 key 삭제
- set('key', '수정 value') : 현재 키를 수정
  formData를 통해 axios를 통해 서버로 전송

### encodeURIComponent, decodeURIComponent

: AJAX 요청을 보낼 때 'http://localhost:4000/search/노드' 처럼 주소에 한글이 들어가는 경우 서버 종류에 따라 한글 주소를 이해하지 못하는 경우가 있는데, 이럴 때 window객체의 메서드인 encodeURIComponent method 사용

ex. 한글 주소부분만 encodeURIComponent method로 감싼다.

```javascript
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
  (async () => {
    try {
      const result = await axios.get(`https://www.zerocho.com/api/search/${encodeURIComponent('노드')}`);
      console.log(result);
      console.log(result.data); // {}
    } catch (error) {
      console.error(error);
    }
  })();
</script>
```

노드라는 한글 주소가 %EB%85%B8%EB%93%9C 라는 문자열로 변환되는데 받는 쪽에서는 *decodeURIComponent*를 사용하면 된다.

```javascript
decodeURIComponent("%EB%85%B8%EB%93%9C");
```

### 데이터 속성과 dataset

- 노드를 사용하는 경우, 클라이언트(프런트엔드)와 빈번하게 데이터를 주고받게되는데 고려해야할 점이 보안이다.
- 프런트엔드에 민감한 데이터를 내려받는 것은 실수이다.
- 보안과 무관한 데이터들은 자유롭게 프런트엔드에 보내도 되는데, 자바스크립트 변수에 저장해도 되지만 HTML과 관련 데이터를 저장하는 공식적인 방법이 있는데 그것이 데이터 속성이다.

ex. 데이터 속성의 사용 예시

```javascript
<ul>
  <li data-id="1" data-user-job="programmer">Zero</li>
  <li data-id="2" data-user-job="designer">Nero</li>
  <li data-id="3" data-user-job="programmer">Hero</li>
  <li data-id="4" data-user-job="ceo">Kero</li>
</ul>
<script>
  console.log(document.querySelector('li').dataset);
  // { id: '1', userJob: 'programmer' }
</script>
```

- 위와 같이 HTML 태그의 속성으로 data- 로 시작하는 것들을 넣고 이것이 데이터 속성이다.
- 화면에 나타나진 않지만 웹 애플리케이션 구동에 필요한 데이터이다. 나중에 이 데이터들을 사용해 서버에 요청을 보낸다.
- 데이터 속성의 장점은 자바스크립트로 쉽게 접근할 수 있다는 점이다.
- 위의 script 태그를 보면 dataset 속성을 통해 첫 번째 li 태그의 데이터 속성에 접근한다.
- 단 데이터 속성 이름이 변형되는데 앞의 data- 접두어는 사라지고 - 뒤에 위치한 글자는 대문자가 된다
  ex. data-id > id, data-user-job > userJob
- 반대로 datset에 데이터를 넣어도 HTML 태그에 반영된다.
- dataset.monthSalary = 1000;을 넣으면 data-month-salary = "10000" 이라는 속성이 생긴다.

### 3. 노드 기능 알아보기

**REPL(Read Eval Print Loop)** : 입력한 코드를 읽고 해석하고 결과물을 반환하고 종료할 때까지 반복한다 > 컴파일하지 않아도 즉석에서 코드 실행 가능

- 콘솔(터미널) : ctrl + `
- REPL로 들어가는 명령어 : node
- JS 파일 실행 : node [자바스크립트 파일 경로]

**노드의 코드 모듈화** : 특정한 기능을 하는 함수/변수의 집합으로 부품화 가능 > 재사용성 > 관리의 용이성

- require 함수 안에 불러올 모듈의 경로를 적습니다. **BackEnd\3. 노드 기능 알아보기\모듈화 실습**에서는 같은 폴더 안에 파일을 만들었지만, 다른 폴더에 있는 파일도 모듈로 사용 가능합니다.
- 파일 경로내에 js나 json과 같은 확장자는 생략 가능하다.
- **BackEnd\3. 노드 기능 알아보기\모듈화 실습**의 *func.js*의 module.exports 처럼 다른 모듈(var.js)을 사용하는 파일을 다시 모듈(func.js)해서 module.exports에 모듈화하고자 하는 객체/함수를 만들수도 있습니다.
  <br>
  <img width="700" src ="https://user-images.githubusercontent.com/41010744/103329844-0b51ce00-4aa2-11eb-842d-aee967b8cd39.jpg">
- ES2015가 도입되면서 자바스크립트도 자체 모듈 시스템 문법이 생겼는데 이 문법은 노드의 모듈시스템과 조금 다릅니다.
  ex. func.js를 ES2015 모듈 스타일로 변경

```javascript
import { odd, even } from "./var";

function checkOddOrEven(num) {
  if (num % 2) {
    // 홀수면
    return odd;
  }
  return even;
}

export default checkOddOrEven;
```

- require과 module.exports가 import, export default로 변경
- 파일 확장자 js > mjs

#### **node 내장 객체**

: 따로 설치하지 않아도 바로 사용가능하며 브라우저의 window 객체와 비슷하다고 생각

##### global : window와 같은 전역 객체로 모든 파일에서 접근 가능하다.

- 전역 객체라는 점을 이용하여 파일 간에 간단한 데이터를 공유할 때 사용하기도 한다.

- ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 객체 알아보기** globalA, globalB

- global 객체의 속성에 값을 대입하여 데이터를 공유할 수 있지만, 남용시 프로그램 규모가 커질수록 어떤 파일에서 global 객체에 값을 대입했는지 찾기 힘들어 유지 보수에 어려움을 겪을 수 있다. _다른 파일의 값을 사용하고 싶다면 모듈 형식으로 만들어 명시적으로 값을 불러와 사용하는 것이 좋다._

##### console :

- global 객체 안에 있으며 브라우저의 console과 유사
- 보통 debugging을 위해 사용
- console의 다른 기능들은 **BackEnd\3. 노드 기능 알아보기\노드 내장 객체 알아보기\console.js**

_결과 사진_
<img src="https://user-images.githubusercontent.com/41010744/103330456-ead74300-4aa4-11eb-80fc-d8a0ab89bdab.png">

- console의 다른 기능 정리

1. console.time(레이블) : console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정
2. console.log(내용) : 평범한 로그를 콘솔에 표시
3. console.error(에러내용) : 에러를 콘솔에 표시
4. console.table(배열) : 배열의 요소로 객체 리터럴을 넣으며, 객체의 속성들이 테이블 형식으로 표시
5. console.dig(객체, 옵션) : 객체를 콘솔에 표시할 때 사용한다. 첫번째 인수로 객체를 두번째 인수로 옵션을 넣는데 colors: true 시 콘솔에 색이 추가 depth는 객체 안의 몇단계까지 보여줄지 결정 default : 2
6. console.trace(레이블) : 에러가 어디서 발생했는지 추적할 수 있게 한다.

##### 타이머 :

_타이머 기능을 제공하는 함수_

- setTimeout(콜백 함수, 밀리초) : 주어진 밀리초 이후에 콜백 함수를 실행합니다.
- setInterval(콜백 함수, 밀리초) : 주어진 밀리초마다 콜백 함수를 반복 실행합니다.
- setImmediate(콜백 함수) : 콜백 함수를 즉시 실행
  _이 타이머 함수들은 모두 아이디를 반환합니다. 아이디를 사용하여 타이머를 취소할 수 있습니다._
- clearTimeout(아이디) : setTimeout을 취소합니다.
- clearInterval(아이디) : setInterval을 취소합니다.
- clearImmediate(아이디) : setImmediate를 취소합니다.
- ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 객체 알아보기\timer.js**
  _코드 실행 순서_
  <br>
  <img height="400" width="400" src="https://user-images.githubusercontent.com/41010744/103330971-28d56680-4aa7-11eb-8e0b-b05c6dc271f7.png">
  <br>
  <img src="https://user-images.githubusercontent.com/41010744/103331040-61754000-4aa7-11eb-8161-8997dcf94f93.png">
