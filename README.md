# Front-End

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

# Back-End(Node.js)

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
  _실행 결과_
  <img src="https://user-images.githubusercontent.com/41010744/103331040-61754000-4aa7-11eb-8161-8997dcf94f93.png">

#### **filename, **dirname

: 노드에는 파일 사이에 모듈 관계가 있는 경우가 많으므로 때로는 현재 파일의 경로나 파일명을 알아야 하는데, 위의 키워드를 통해 경로에 대한 정보를 제공한다.

ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 객체 알아보기\filename.js**

#### module, exports

: 지금까지 모듈을 만들 때 module.exports를 사용했는데, module 객체 말고 exports 객체로도 묘듈을 만들 수 있습니다. 3.3절의 var.js를 아래와 같이 수정해도 index.js에서는 동일하게 불러올 수 있습니다.

```javascript
exports.odd = "홀수 입니다";
exports.even = "짝수 입니다";
```

module.exports로 한번에 대입하는 대신, 각각의 변수를 exports 객체에 하나씩 넣었습니다. 동일하게 동작하는 이유는 module.exports와 exports가 같은 객체를 참조하기 때문입니다. 실제로 console.log(module.exports == exports) 시 true를 반환합니다.

- exports 객체 사용 시 반드시 객체처럼 속성명과 속성값을 대입해야 합니다.
- exports 사용할 때 객체만 사용할 수 있으므로 func.js와 같이 module.exports에 함수를 대입한 경우 exports로 변경이 불가능 합니다.
- exports와 module.exports는 참조 관게에 있으므로 한 모듈에 동시에 사용하지 않는 것이 좋습니다.

#### node에서의 this

```javascript
console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
  console.log("function", this === exports, this === global);
}
whatIsThis();
/*
  console :
  {}
  true
  true
  function false true
*/
```

- 노드에 this의 다른 부분은 javascript와 동일하지만 최상이 스코프에 존재하는 this는 module.exports(or exports)를 가리킵니다. 또한, 함수 선언문 내부의 this는 global 객체를 가리킵니다.

#### require

: 모듈을 불러오는 require 함수, 함수는 객체이므로 require는 객체로서 몇가지 속성을 갖고 있습니다. 그중 require.cache와 require.main에 대해 알아보겠습니다.

ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 객체 알아보기\require.js**

- require가 반드시 파일 최상단에 위치할 필요가 없고, module.exports도 최하단에 위치할 필요가 없다. 아무곳에서나 사용 가능
- require.cache 객체에 require.js나 var.js 같은 파일 이름이 속성명으로 들어가 있는데 속성 값으로는 각 파일의 모듈 객체가 들어 있습니다. 한번 require한 파일은 require.cache에 저장되므로 다음 require할 때 재사용 한다
- require.cache에는 module.exports했던 부분 + 로딩 여부(loaded) + 부모(parent) + 자식(children) 모듈 관계를 찾을 수 있습니다.
- require.main에는 노드 실행 시 첫 모듈을 가리킵니다. 예제에서는 require.js가 require.main이 됩니다. 현재 파일이 첫 모듈인지 알아보려면 require.main == module 실행
- 만약 두 모듈이 서로 require한다면 ? **BackEnd\3. 노드 기능 알아보기\노드 내장 객체 알아보기\dep1,2.js &dep-run.js**
- 순환 참조(circular dependency) : 먼저 실행되는 dep1.js > dep2.js > dep1.js 다음과 같이 참조 과정이 반복

#### process

: 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있다. process 객체 안에는 다양한 속성이 존재

- process.version : 설치된 노드의 버전
- process.arch : 프로세서 아키텍처 정보, arm, ia32 등의 값일 수 있습니다
- process.platform : 운영체제 플랫폼 정보, linux나 farwin 등의 값일 수 있습니다
- process.pid : 현재 프로세스의 아이디
- process.uptime() : 프로세스가 시작된 후 흐른 시간, 단위는 초입니다
- process.execPath : 노드의 경로입니다.
- process.cwd() : 현재 프로세스가 실행되는 위치입니다.
- process.cpuUsage() : 현재 cpu 사용량입니다.
  사용 빈도가 높지는 않지만 일반적으로 OS나 실행 환경별로 다른 동작을 하고 싶을 때 사용합니다. process.env, process.nextTick, process.exit()은 중요하니 따로 설명합니다.
- **process.env** : REPL에 입력시 매우 많은 정보가 출력됩니다. 시스템의 환경 변수를 출력하는데 노드에 직접적인 영향을 미칩니다. 대표적으로 *UV_THREADPOOL_SIZE*와 *NODE_OPTIONS*가 있습니다. 또, 서비스의 중요한 키를 저장하는 공간으로 사용됩니다. ex. 데이터베이스의 비밀번호, 각종 API key
- NODE_OPTIONS : 노드를 실행할 때의 옵션들을 입력받는 환경 변수
- UV_THREADPOOL_SIZE : 노드에서 기본적으로 사용하는 스레드 풀의 스레드 갯수를 조절할 수 있게합니다.

```javascript
const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;
```

- **process.nextTick(콜백)**
  : 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선으로 처리하도록 만듭니다.

- process.nextTick은 setImmediata, setTimeout보다 먼저 실행됩니다.
- resolve된 Promise도 nextTick처럼 다른 콜백보다 우선 실행됩니다.
- 따라서 process.nextTick과 Promise를 마이크로태스크(microtask)로 구분지어 부릅니다.

- **process.exit(코드)**
  : 실행중인 노드 프로세스를 종료합니다. 서버 환경에서 이 함수를 사용하면 서버가 멈추므로 특수한 경우를 제외하고는 서버에서 잘 사용하지 않습니다. 하지만 서버외의 독립적인 프로그램에서는 수동으로 노드를 멈추기 위해 사용합니다.

- process.exit의 인수를 주지않거나 0을 주면 정상종료, 1을 주면 비정상 종료를 뜻합니다. 만약 에러 발생시 종료하는 경우 1을 넣으면 됩니다.

### 노드 내장 모듈 사용하기

: 노드는 웹 브라우저에서 사용되는 자바스크립트보다 더 많은 기능을 제공합니다. 운영체제 정보에도 접근할 수 있고, 클라이언트가 요청한 주소에 대한 정보도 가져올 수 있습니다.

#### OS

: 웹 브라우저에 사용되는 자바스크립트는 운영체제의 정보를 가져올 수 없지만, 노드는 os 모듈에 정보가 담겨 있어 정보를 가져올 수 있습니다.

ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\os.js**

- os.arch() : process.arch와 동일합니다.
- os.platform() : process.platform과 동일합니다
- os.type() : 운영체제의 종류를 보여줍니다.
- os.uptime() : 운영체제 부팅 이후 흐른 시간(초)를 보여줍니다. process.uptime()은 노드의 실행 시간
- os.hostname() : 컴퓨터의 이름을 보여줍니다.
- os.release() : 운영체제의 버전을 보여줍니다.
- os.homedir() : 홈 디렉터리 경로를 보여줍니다.
- os.tmpdir() : 임시 파일 저장 경로를 보여줍니다.
- os.cpus() : 컴퓨터의 코어 정보를 보여줍니다.
- os.freemem() : 사용 가능한 메모리(RAM)을 보여줍니다.
- os.totalmem() : 전체 메모리 용량을 보여줍니다.
  일반적인 웹 서비스를 제작할 때는 사용 빈도가 높지 않지만 운영체제별로 다른 서비스를 제공하고 싶을 때 os 모듈이 유용하다.

#### path

: 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈, 크게 윈도 타입과 POSIX 타입으로 구분되는 POSIX은 유닉스 기반의 운영체제를 의미(mac, linux)

- **윈도 : C:\users\.. 처럼 \으로 구분**
- POSIX : /home/... 처럼 /으로 구분
  <br>
- path.sep : 경로의 구분자입니다. 윈도는 \, POSIX는 /입니다.
- path.delimiter : 환경 변수의 구분자입니다. process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 구분되어 있습니다. 윈도는 세미콜론(;)이고, POSIX는 콜론(:)입니다.
- path.dirname(경로) : 파일이 위치한 폴더 경로를 보여줍니다.
- path.extname(경로) : 파일의 확장자를 보여줍니다.
- path.basename(경로, 확장자) : 파일의 이름(확장자 포함)을 표시합니다. 파일의 이름만 표시하고 싶다면 basename의 두 번째 인수로 파일의 확장자를 넣으면 됩니다.
- path.parse(경로) : 파일 경로를 root, dir, base, ext, name으로 분리합니다.
- path.format(객체) : path.parse() 한 객체를 파일 경로로 합칩니다.
- path.normalize(경로) : /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환합니다.
- path.isAbsolute(경로) : 파일의 경로가 절대경로인지 상대경로인지를 true, false로 알립니다.
- path.relative(기준경로, 비교경로) : 경로를 두 개 넣으면 첫 번째 경로에서 두번째 경로로 가는 방법을 알려줍니다.
- path.join(경로, ...) : 여러 인수를 넣으면 하나의 경로로 합칩니다. 상대경로인 ..(부모 디렉터리)과 .(현 위치)도 알아서 처리합니다.
- path.resolve(경로, ...) : path.join()과 비슷하지만 차이가 있습니다.
- **join vs resolve**
  : /를 만나면 path.resolve는 절대 경로로 인색해서 앞의 경로를 무시하고, path.join은 상대경로로 처리합니다.

```javascript
path.join("/a", "/b", "c");
path.resolve("/a", "/b", "c");
/*
  결과 : /a/b/c/
  결과 : /b/c
*/
```

**절대 경로와 상대경로**
: 절대경로는 루트 폴더(윈도의 C:\)나 노드 프로세스가 실행되는 위치가 기준
상대경로는 현재 파일이 기준이 됩니다. 현재 파일과 같은 경로면 점 하나(.)를 현재 파일보다 한 단계 상위 경로면 점 두개(..)를 사용해 표현합니다.

- ex. C:\users\zerocho\path.js에서 C:\로가고 싶다면 절대경로에서는 C:\를, 상대경로에서는 ..\..을 해야 두 디렉터리 위로 올라가 C:\가 됩니다.
- 노드는 require.main 파일 기준으로 상대 경로를 인식

**어떤 때 \\를 사용하고 어떤 때 \를 사용?**
: 기본적으로 \ 하나를 사용해서 표시하지만 C:\node와 같이 \n은 자바스크립트에서 줄바꿈을 뜻하는데 다음과 같이 사용시 의도치 않은 오류 발생할 수 있다. 따라서 이때는 C:\\node처럼 표시해야한다.

- path 모듈은 위와 같은 발생 문제를 알아서 처리하므로 꼭 사용하는 것이 필요

#### url

: 인터넷 주소를 쉽게 조작하도록 도와주는 모듈, url처리에는 크게 두가지
방식이 있는데 두가지 다 알아두면 좋다
ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\url.js**

- _노드 버전 7에 추가된 WHATWG 방식의 url :_
- url 모듈 안에 URL 생성자가 있는데 이 생성자에 주소를 넣어 객체로 만들면 주소가 부분별로 정리됩니다. 이 방식이 WHATWG의 url 입니다. WHATWG에만 있는 username, password, origin, searchParams 속성이 존재합니다.
  <img src="https://user-images.githubusercontent.com/41010744/103436129-bfe31f80-4c5b-11eb-8808-8421e7d01380.png">

- _예전부터 노드에서 사용하던 방식의 url :_
  url.parse(주소), url.format(객체) 메서드를 주로 사용
- url.parse(주소) : 주소를 분해합니다. WHATWG 방식과 비교하면 username, password 대신 auth 속성이 있고, searchParams 대신 query가 있습니다.
- url.format(객체) : WHATWG 방식 url과 기존 노드의 url을 모두 사용할 수 있습니다. 분해되었던 url 객체를 다시 원래 상태로 조립합니다.

**WHATWG방식의 URL, 기존 방식의 URL**
<img src="https://user-images.githubusercontent.com/41010744/103436264-efdef280-4c5c-11eb-9d84-7ba2df7bae48.png">

- WHATWG와 노드의 url은 취향에 따라 사용하면 되지만, 노드의 url 형식을 꼭 사용해야 하는 경우가 있습니다. **host 부분 없이 pathname 부분만 오는 주소인 경우**(ex. /book/booklist.apsx)에는 WHATWG 방식이 처리할 수 없습니다.

- WHATWG방식은 search 부분을 **searchParams**라는 특수한 객체로 반환하므로 유용합니다. search 부분은 보통 주소를 통해 데이터를 전달할 때 사용됩니다. search는 물음표(?)로 시작하고, 그 뒤에 **key=value** 형식으로 데이터를 전달합니다. 여러 키가 있을 경우 **&**로 구분합니다.
  ex. http://www.gilbut.co.kr/?page=3&limit=10&category=bodejs&category=javascript 와 같은 주소에서 ?page=3&limit=10&category=bodejs&category=javascript 부분이 search 입니다.

**searchParams 예시**
ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\searchParams.js**
<img src="https://user-images.githubusercontent.com/41010744/103436475-fff7d180-4c5e-11eb-9afd-633dfeae85c2.png">

- getAll(키) : 키에 해당하는 모든 값들을 가져옵니다. category키에는 nodejs와 javascript라는 두 가지 값이 들어 있습니다.
- get(키) : 키에 해당하는 첫 번째 값만 가져옵니다.
- has(키) : 해당 키가 있는지 없는지를 검사합니다.
- keys() : searchParams의 모든 키를 반복기(iterator)객체로 가져옵니다.
- values() : searchParams의 모든 값을 반복기 객체로 가져옵니다.
- append(키, 값) : 해당 키를 추가합니다. 같은 키의 값이 있다면 유지하고 하나 더 추가합니다.
- set(키, 값) : append와 비슷하지만, 같은 키의 값들을 모두 지우고 새로 추가합니다.
- delete(키) : 해당 키를 제거합니다.
- toString() : 조작한 searchParams 객체를 다시 문자열로 만듭니다. 이 문자열을 search에 대입하면 주소 객체에 반영됩니다.

query같은 문자열보다 searchParams가 유용한 이유는 query의 경우 다음에 배우는 queryString 모듈을 한 번 더 사용해야 하기 때문입니다.

#### querystring

: WHATWG 방식의 url 대신 기존 노드의 url을 사용할 때, search 부분을 사용하기 쉽게 객체로 만드는 모듈입니다. \*_querystring 예시_

ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\querystring.js**
<img src="https://user-images.githubusercontent.com/41010744/103436632-2f0f4280-4c61-11eb-9cda-4fe1711a145c.png">

- querystring.parse(쿼리) : url의 query 부분을 자바스크립트 객체로 분해합니다.
- querystring.stringify(객체) : 분해된 query 객체를 문자열로 다시 조립합니다.

#### crypto

: 다양한 방식의 암호화를 도와주는 모듈입니다. 몇 가지 메서드를 익혀두면 실제 서비스에도 적용할 수 있어 정말 유용합니다. ex. 고객의 비밀번호를 암호화

1. 단방향 암호화 :

- 보통 비밀번호를 암호화
- 복호화(암호화된 문자열을 원래 문자열로 되돌려 놓는 것)할 수 없는 암호화 방식
- 한 번 암호화하면 원래 문자열을 찾을 수 없습니다.
- 해시 기법 : 어떠한 문자열을 고정된 길이의 다른 문자열로 바꿔버리는 방식

ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\hash.js**

- createHash(알고리즘) : 사용할 해시 알고리즘을 넣는다. md5, sha1, sha256, sha512등이 가능하지만, md5와 sha1은 취약점이 발견되어 현재는 sha512정도로 충분하다
- update(문자열) : 변환할 문자열을 넣는다.
- digest(인코딩) : 인코딩할 알고리즘을 넣습니다. base64, hex, latin1이 주로 사용되는데, 그중 base64가 결과 문자열이 가장 짧아 애용됩니다. 결과물로 변환된 문자열을 반환합니다.

**현재는 주로 pbkdf2나 bcrypt, scrypt라는 알고리즘으로 비밀번호를 암호화**

- 그 중 노드에서 지원하는 pbkdf2 : 기존 문자열에 salt라는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용

ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\pbkdf2.js**

1.  먼저 randomBytes() 메서드를 통해 64바이트 길이의 문자열 생성 > 이것이 salt
2.  pbkdf2() 메서드에는 순서대로 비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘을 인수로 넣는다.

- randomBytes 이므로 매번 실행할 때마다 다른 결과 > salt를 잘 보관해야 비밀번호 찾을 수 있다.

2.  양방향 암호화 :

- 암호화된 문자열을 복호화(다시 원래대로) 할 수 있으며, 키(key)를 사용
- 대칭형 암호화에서 암호를 복호화하려면 암호화할 때 사용한 키와 같은 키를 사용

ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\cipher.js**

- crypto.createCipheriv(알고리즘, 키, iv) : 암호화 알고리즘은 aes-256-cbc를 사용했습니다. 해당 알고리즘은 키는 32바이트여야하고 iv는 16바이트여야 한다. iv는 암호화할 때 사용하는 초기화 벡터를 의미한다. 사용 가능한 알고리즘은 crypto.getCiphers() 호출시 볼 수있다.
- cipher.update(문자열, 인코딩, 출력 인코딩) : 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣습니다. 보통 문자열은 utf8 인코딩을, 암호는 base64를 많이 사용합니다.
- cipher.final(출력 인코딩) : 출력 결과물의 인코딩을 넣으면 암호화가 완료됩니다.
- crypto.createDecipheriv(알고리즘, 키, iv) : 복호화할 때 사용, 암호화할 때 사용했던 알고리즘과 키,iv를 그대로 넣어야 합니다.
- decipher.update(문자열, 인코딩, 출력 인코딩) : 암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩을 넣습니다. createCipheriv의 update()에서 utf8, base64 순으로 넣었다면 createDecipheriv의 update에서는 base64, utf8 순으로 넣으면 됩니다.
- decipher.final(출력 인코딩) : 복호화 결과물의 인코딩을 넣습니다.

#### util

: 각종 편의 기능을 모아둔 모듈, 계속해서 api가 추가되고 있으며 가끔 deprecated(중요도가 떨어져 사라짐)되어 사라지는 경우도 있습니다.

ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\util.js**

- util.deprecate : 함수가 deprecated 처리되었음을 알립니다. 첫 번째 인수로 넣은 함수를 사용했을 때 경고 메시지가 출력됩니다. 두번 째 인수로 경고 메시지 내용을 넣으면 됩니다. 함수가 조만간 사라지거나 변경될 때 알려줄 수 있어 유용합니다.
- util.promisify : 콜백 패턴을 프로미스 패턴으로 바꿉니다. 바꿀 함수을 인수로 제공하면 됩니다. 이렇게 바꿔두면 async/await 패턴까지 사용할 수 있어 좋습니다.

#### worker_threads

: 노드에서 멀티 스레드 방식으로 작업하기 위해 사용하는 모듈

ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\worker_threads.js**

- isMainThread(**기존에 동작하던 싱글 스레드= 메인/부모 스레드**)

1.  메인 스레드에서는 new Worker를 통해 현재 파일(\_\_filename)을 워커 스레드에서 실행
2.  부모에서는 워커 생성후 postMessage 메서드를 통해 워커에 데이터 전송 가능
3.  워커는 parentPort.on('message') 이벤트 리스너로 부모로부터 메시지를 받는다.
4.  parentPort.postMessage로 부모에게 메시지를 보냅니다.
5.  부모는 worker.on('message')로 메시지를 받습니다.
6.  워커에서 on 메서드를 사용할 때는 직접 워커를 종료해야 한다 > parent.close()를 통해 종료될 때는 worker.on('exit')이 실행

- 여러개의 워커 스레드에 데이터 넘기기 > postMessage X
  ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\worker_data.js**

1. new Worker를 호출할 때 두 번째 인수의 workerData 속성으로 원하는 데이터를 보낸다.
2. 워커에서는 workerData로 부모로부터 데이터를 받습니다.
3. 현재 두 개의 워커가 돌아고 있으며, 각각 부모로부터 숫자를 받아 100을 더해 돌려줍니다.
4. 돌려주는 순간 워커가 종료되어 worker.on('exit')이 실행
5. 워커 두 개가 모두 종료되면 job done이 logging

- 실전적인 예제로 소수의 개수를 구하는 작업
  ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\prime.js**
  <img src="https://user-images.githubusercontent.com/41010744/103459769-bab5cb80-4d54-11eb-850e-7a2576a6bd62.png">

- 상당한 시간이 소요 > 워커 스레드를 사용하여 여러 개의 스레드들이 문제를 나눠서 해결

ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\prime-worker.js**

<img src="https://user-images.githubusercontent.com/41010744/103459996-3f551980-4d56-11eb-9d2a-193084f27678.png">

- 8개의 스레드로 나누어 작업
- 스레드를 생성하고 스레드 사이에 통신하는데 상당한 비용이 발생하므로, 이점을 고려해서 멀티 스레딩을 해야 한다 잘못하면 멀티 스레딩을 할 때 싱글 스레딩보다 더 느려지는 현상이 발생할 수 있다.

#### child_process

- 노드에서 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을 때 사용하는 모듈
- 이 모듈을 통해 다른 언어의 코드(ex. python)를 실행하고 결괏값을 받을 수 있다.
- 현재 노드 프로세스 외에 새로운 프로세스를 띄워 명령을 수행하고, 노드 프로세스에 결과를 알려주기 때문에 붙은 이름

ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\exec.js**

- 명령 프롬프트의 명령어 dir을 노드를 통해 실행
- exec의 첫번째 인수로 명령어 입력
- 결과는 stdout(표준출력)과 stderr(표준에러)에 붙여둔 data 이벤트 리스너에 버퍼 형태로 전달

ex. **BackEnd\3. 노드 기능 알아보기\노드 내장 모듈 사용하기\spawn.js**

- 파이썬 프로그램 실행
- spawn(명령어, 옵션 배열)
- **exec vs spawn** : 전자는 셸을 실행해서 명령어를 수행하고, 후자는 새로운 프로세스를 띄우면서 명령어를 실행한다. spwan에서도 세번째 인수로 {shell:true}를 제공하면 exec처럼 셸을 싱행해서 명령어를 수행

#### 그외 모듈

- assert : 값을 비교하여 프로그램이 제대로 동작하는지 테스트하기 위해 사용
- dns : 도메인 이름에 대한 IP 주소를 얻어내는 데 사용
- net : HTTP보다 로우 레베인 TCP나 IPC 통신을 할 때 사용
- string_decoder : 버퍼 데이터를 문자열로 바꾸는 데 사용
- tls : TLS와 SSL에 관련된 작업을 할 때 사용
- dgram : UDP와 관련된 작업을 할 때 사용
- v8 : V8엔진에 직접 접근할 때 사용
- vm : 가상 머신에 직접 접근할 때 사용

### 파일 시스템 접근하기

- fs 모듈을 통해 파일 시스템에 접근 : 파일 생성/삭제/읽기/쓰기
- 웹 브라우저에서 자바스크립트를 사용할 때는 일부를 제외하고는 파일 시스템 접근이 금지

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\readFile.js**

- fs모듈을 불러온 뒤 읽을 파일의 경로를 지정
- 파일의 경로가 현재 파일 기준이 아니라 node 명령어를 실행하는 콘솔 기준이라는 점에 유의
- fs는 기본적으로 콜백 형식의 모듈이므로 실무에서 사용하기 불편하다 따라서 fs모듈을 프로미스 형식으로 바꿔주는 방식을 사용

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\readFilePromise.js**

- fs 모듈에서 promise 속성을 불러오면 프로미스 기반의 fs모듈 사용 가능

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\writeFile.js**

- writeFile 메서드에 생성될 파일의 경로와 내용을 입력

1. 동기 메서드와 비동기 메서드

- setTimeout같은 타이머와 process.nextTick 외에도, 노드는 대부분의 메서드를 비동기 방식으로 처리
- 하지만 몇몇 메서드는 동기 방식으로도 사용할 수 있다. 특히 fs 모듈이 그러한 메서드를 많이 가지고 있음

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\async.js**
<img src="https://user-images.githubusercontent.com/41010744/103490507-9a266800-4e5f-11eb-844b-90ec28024e62.png">
