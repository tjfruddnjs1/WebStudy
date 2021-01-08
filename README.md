d# Front-End

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

1. 동기 메서드와 ���동기 메서드

- setTimeout같은 타이머와 process.nextTick 외에도, 노드는 대부분의 메서드를 비동기 방식으로 처리
- 하지만 몇몇 메서드는 동기 방식으로도 사용할 수 있다. 특히 fs 모듈이 그러한 메서드를 많이 가지고 있음
  <br>
  ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\async.js**
  <br>
  <img src="https://user-images.githubusercontent.com/41010744/103490507-9a266800-4e5f-11eb-844b-90ec28024e62.png">
  <br>

- 비동기 메서드들은 백그라운드에 해당 파일을 읽으라고만 요청하고 다음 작업으로 넘어갑니다.
- 따라서 파일 읽기 요청만 3번 보내고 console.log("끝")을 찍습니다.
- 나중에 읽기가 완료되면 백그라운드가 다시 메인 스레드에 알리고 콜백 함수를 실행합니다.
- 백그라운드에서 요청 세 개를 거의 동시에 실행 > 어떻게 파일 처리 ? > 스레드 풀 참고

#### 동기와 비동기, 블로킹과 논 블로킹

: 노드에서 동기와 비동기, 블로킹과 논 블로킹이 혼용되고 있으며, 다른 의미를 가진다.

- 동기와 비동기 : 백그라운드 작업 완료 확인 여부
- 블로킹과 논 블로킹 : 함수가 바로 return 되는지 여부
- 노드에서는 동기-블로킹 방식과 비동기-논 블로킹 방식이 대부분
- 동기-블로킹 방식에서는 백그라운드 작업 완료 여부를 계속 확인하며, 호출한 함수가 바로 return 되지 않고 백 그라운드 작업이 끝나야 return
- 비동기-논 블로킹 방식에서는 호출한 함수가 바로 return 되어 다음 작업으로 넘어가며, 백그라운드 작업 완료 여부는 신경 쓰지 않고 나중에 백그라운드가 알림을 줄 때 비로소 처리

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\sync.js**

- 순서대로 출력하기 위해 readFileSync 메서드 사용
- 콜백 함수를 인자로 넣는 대신 직업 return 값을 받아온다.
- **하지만 치명적 단점 : 요청이 수백개일때 성능에 문제**
- Sync 메서드는 이전 작업이 완료되어야 다음 작업을 진행할 수 있다.
- 즉, 백그라운드가 작업하는 동안 메인 스레드는 아무것도 하지 못하고 대기하고 있어야 한다
- 대부분의 경우 비동기 메서드가 훨씬 효율적

만약, 비동기 방식으로 하되 순서를 유지하고 싶다면 ?
ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\asyncOrder.js**

- 이전 readFile의 콜백에 다음 readFile을 넣으면 된다.
- but, 콜백 지옥 발생
- 콜백 지옥은 async/await으로 어느 정도 해결

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\asyncOrderPromise.js**

#### 버퍼와 스트림 이해하기

- 영상을 로딩할 때는 버퍼링한다고 하고, 영상을 실시간으로 송출할 때는 스트리밍
- 버퍼링 : 영상을 재생할 수 있을 때까지 데이터를 모으는 동작
- 스트리밍 : 방송인의 컴퓨터에서 시청자의 컴퓨터로 영상 데이터를 조금씩 전송하는 동작
- 노드의 버퍼 : 파일을 읽을 때 메모리에 파일 크기만큼 공간을 마련해두며 파일 데이터를 메모리에 저장한 뒤 사용자가 조작할 수 있도록 한다. 이 때 메모리에 저장된 데이터가 버퍼
- **buffer** : 버퍼를 직접 다룰수 있는 클래스

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\buffer.js**

- from(문자열) : 문자열을 버퍼로 바꿀 수 있습니다. length 속성은 버퍼의 크기
- toString(버퍼) : 버퍼를 다시 문자열로 바꿀수있습니다. 이때 base64나 hex를 인수로 넣으면 해당 인코딩으로 변환 가능합니다.
- concat(배열) : 배열 안에 든 버퍼들을 하나로 합칩니다.
- alloc(바이트) : 빈 버퍼를 생성합니다. 바이트를 인수로 넣으면 해당 크기의 버퍼가 생성됩니다.

**버퍼의 문제점** : 만약 큰 용량의 파일이 있을 경우 읽을 때 메모리에 해당 크기의 버퍼를 만들어야 한다. 또한 모든 내용을 버퍼에 다 쓴 후에야 다음 동작으로 넘어가므로 파일 읽기, 압축, 파일 쓰기 등의 조작을 연달아할 때 매번 전체 용량을 버퍼로 처리해야 다음 단계로 넘어간다.

- 해결 책 : 버퍼의 크기를 작게 만든 후 여러번으로 나눠 보내는 방식 > _스트림_
- **createReadStream** : 파일을 읽는 스트림 메서드

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\createReadStream.js**

- createReadStream의 첫번째 인수는 읽을 파일 경로, 두번쨰 인수는 옵션 객체인데 highWaterMark라는 옵션이 버퍼의 크기(바이트 단위)를 정할 수 있다. 기본값은 64KB이지만, 여러 번 나눠서 보내는 모습을 보여주기 위해 16B로 낮췄습니다.

- readStream은 이벤트 리스너를 붙여서 사용합니다. 보통 data, end, error 이벤트를 사용합니다. 파일 읽는 도중 에러 발생시 error 이벤트가 호출되고, 파일 읽기가 시작되면 data이벤트 발생, 파일 다 읽으면 end 이벤트가 발생

- **createWriteStream** : 파일을 쓰는 스트림 메서드

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\createWriteStream.js**

- writeStream 메서드의 첫 번째 인수로는 출력 파일명을 입력
- finish 이벤트 리스너는 파일 쓰기 종료시 콜백 함수 호출
- writeStream에서 제공하는 write 메서드로 넣을 데이터를 씁니다. 여러 번 호출 가능
- 데이터를 다 썼다면 end 메서드로 종료를 알립니다. 이때 finish 이벤트 발생
- 스트림끼리 연결(파일 읽고 파일 쓰기)하는 것을 _파이핑(pipe)_ 한다고 한다.

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\pipe.js**

- readme4.txt와 똑같은 내용의 writeme3.txt가 생성
- pipe는 스트림 사이에 여러번 연결가능하다

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\gzip.js**

- 파일을 읽은 후 gzip 방식으로 압축하는 코드
- 노드에서는 파일을 압축하는 zlib이라는 모듈을 제공
- zlib의 createGzip이라는 메서드가 스트림을 지원하므로 readStream과 writeStream 중간에서 파이핑
- 버퍼 데이터가 전달되다가 gzip 압축을 거친후 파일로 써집니다.

**버퍼와 스트림 메모리 사용 차이**

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\createBigFile.js**

- 큰 용량의 텍스트 파일을 만드는 코드

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\buffer-memory.js**

- readFile 메서드를 사용하여 big.txt를 big2.txt로 복사

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\stream-memory.js**

- 스트림을 사용해서 파일을 복사 > 개선 > 동영상 같은 큰 파일 전송시 스트림 사용

#### 기타 fs 메서드 알아보기

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\fsCreate.js**

- fs.access(경로, 옵션, 콜백) : 폴더나 파일에 접근할 수 있는지를 체크, 두 번째 인수로 상수들(constants를 통해 가져옵니다)을 넣었습니다. F_OK는 파일 존재 여부, R_OK는 읽기 권한 여부, W_OK는 쓰기 권한 여부를 체크합니다. 파일/폴더나 권한이 없다면 에러가 발생하는데 파일/폴더가 없을때의 에러코드는 ENOENT

- fs.mkdir(경로, 콜백) : 폴더를 만드는 메서드입니다. 이미 폴더가 있다면 에러가 발생하므로 먼저 access메서드를 호출해서 확인하는 것이 중요합니다.

- fs.open(경로, 옵션, 콜백) : 파일의 아이디(fd변수)를 가져오는 메서드입니다. 파일이 없다면 파일을 생성한 뒤 그 아이디를 가져옵니다. 가져온 아이디를 사용해 fs.read나 fs.write로 읽거나 쓸수 있습니다. 두 번째 인수로 어떤 동작을 할 것인지를 설정할 수 있습니다. 쓰려면 w, 읽으려면 r, 기존 파일에 추가하려면 a 입니다. 앞의 예제에서는 w를 했으므로 파일이 없을 때 새로 만들 수 있었습니다. r이었다면 에러가 발생

- fs.rename(기존 경로, 새 경로, 콜백) : 파일의 이름을 바꾸는 메서드입니다. 기존 파일 위치와 새로운 파일 위치를 적으면 됩니다. 꼭 같은 폴더를 지정할 필요는 없으므로 잘라내기 같은 기능을 할 수도 있습니다.

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\fsDelete.js**

- fs.readdir(경로,콜백) : 폴더 안의 내용물을 확인할 수 있습니다. 배열 안에 내부 파일과 폴더 명이 나옵니다.
- fs.unlink(경로, 콜백) : 파일을 지울 수 있습니다. 파일이 없다면 에러가 발생하므로 먼저 파일이 있는지 꼭 확인해야합니다.
- fs.rmdir(경로, 콜백) : 폴더를 지울 수 있습니다. 폴더 안에 파일들이 있다면 에러가 발생하므로 먼저 내부 파일을 모두 지우고 호출해야합니다.

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\copyFile.js**

- 노드 8.5 버전 이후 createReadStream과 createWriteStream을 pipe하지 않고도 파일을 복사할 수 있습니다.

- 첫번째 인수로 복사할 파일을, 두번째 인수로 복사될 경로를, 세번째 인수로 복사후 실행될 콜백 함수

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\watch.js**
<br>
<img scr="https://user-images.githubusercontent.com/41010744/103542506-60497600-4ee0-11eb-9889-0c886d0524ee.png">
<br>

- 내용물을 수정할 때 change 이벤트가 발생
- 파일명을 변경하거나 파일을 삭제하면 rename 이벤트 발생
- rename 이벤트 발생 후에는 더 이상 watch가 수행되지 않습니다.

#### 스레드풀 알아보기

- 이전 절에서 파일 시스템 실습을 하며 fs 모듈의 비동기 메서드들을 사용
- 비동기 메서드들은 백그라운드에서 실행되고, 실행된 후에는 다시 메인 스레드의 콜백 함수나 프로미스의 then 부분이 실행됩니다.
- 이때 fs 메서드를 여러 번 실행해도 백그라운드에서 동시에 처리되는데, 바로 스레드 풀이 있기 때문입니다.
- fs 외에도 내부적으로 스레드풀을 사용하는 모듈로는 crypto, zlib, dns.lookup 등이 있습니다.
- 스레드 풀을 쓰는 crypto.pbkdf2 메서드의 예쩨로 스레드풀의 존재를 확인

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\threadpool.js**
<br>
<img src="https://user-images.githubusercontent.com/41010744/103543021-2c228500-4ee1-11eb-870c-1010b3ac6bad.png">
<br>

- 실핼할 때마다 시간과 순서가 달라집니다. 스레드 풀이 작업을 동시에 처리하므로 여덟 개의 작업 중에 어느 것이 먼저 처리될지 모릅니다.
- 하지만 1~4와 5~8이 그룹으로 묶여져있고, 5~8이 1~4보다 시간이 더 소요되는데 기본적인 스레드풀의 갯수가 4개이기 때문입니다.
- 만약 컴퓨터 코어의 갯수가 4보다 작다면 다른 결과가 생길수 있습니다.
- 스레드풀을 직접 컨트롤할 수는 없지만 갯수를 조절은 가능하다.
- 터미널에 _SET UV_THREADOOL_SIZE = 숫자_ 를통해 스레드풀의 갯수를 제한 가능
- 위는 process.env.UV_THREADPOOL_SIZE를 설정하는 명령어

### 이벤트 이해하기

- 스트림을 배울 때 on('data', 콜백) 또는 ('end', 콜백)을 사용했는데 바로 data라는 이벤트와 end라는 이벤트가 발생할 때 콜백 함수를 호출하도록 이벤트를 등록한 것
- createReadStream 같은 경우 내부적으로 알아서 data, end 이벤트를 호출하지만 직접 이벤트를 만들 수도 있습니다.

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\event.js**

- on(이벤트명, 콜백) : 이벤트 이름과 이벤트 발생 시의 콜백을 연결합니다. 이렇게 연결하는 동작을 이벤트 리스닝이라고 부릅니다. event2처럼 이벤트 하나에 이벤트 여러 개를 달아줄수 있습니다.
- addListener(이벤트명, 콜백) : on과 기능이 같습니다.
- emit(이벤트명) : 이벤트를 호출하는 메서드입니다. 이벤트 이름을 인수로 넣으면 미리 등록해뒀던 이벤트 콜백이 실행됩니다.
- once(이벤트명, 콜백) : 한번만 실행되는 이벤트입니다.
- removeAllListeners(이벤트명) : 이벤트에 연결된 모든 이벤트 리스너를 제거합니다. 리스너를 넣어야한다는 것을 잊지 마세요. 역시 event5의 콜백도 호출되지 않습니다.
- off(이벤트명, 리스너) : 노드 10버전에서 추가된 메서드로, removeListener과 기능이 같습니다.
- ListenerCount(이벤트명) : 현재 리스너가 몇개 연결되어있는지 확인합니다.

### 예외 처리하기

- 예외란 보통 처리하지 못한 에러
- 예외들은 실행 중인 노드 프로세스를 멈추게하므로 처리하는 것이 중요
- 멀티스레드 프로그램은 스레드 하나가 멈추면 그 일을 다른 스레드가 대신하지만 노드의 메인스레드는 하나뿐이므로 소중히 보호해야합니다.

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\error1.js**

- 에러가 발생할 것 같은 부분을 try/catch문으로 감싸면 된다.
- setInterval을 사용한 것은 프로세스가 멈추는지 여부를 체크하기 위한

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\error2.js**

- 노드 자체에서 잡아주는 에러
- fs.unlink로 존재하지 않는 파일을 지우고 있습니다. 에러가 발생하지만 다행히 노드 내장 모듈의 에러는 실행 중인 프로세스를 멈추지 않습니다. 에러 로그를 기록해두고 나중에 원인을 찾아 수정하면 됩니다.
- error1에서는 에러 발생시 에러를 throw했습니다. 그런데 throw를 하면 노드 프로세스가 멈추기 때문에 throw하는 경우 반드시 try/catch문으로 throw한 에러를 잡아야합니다.

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\error3.js**

- 프로미스의 에러는 catch하지 않아도 알아서 처리 됩니다.
- 다만 프로미스의 에러를 알아서 처리하는 동작은 노드 버전이 올라감에 따라 바뀔수 있기 때문에 사용시 항상 catch를 붙여주는 것을 권장

ex. **BackEnd\3. 노드 기능 알아보기\파일 시스템 접근하기\error4.js**

- process 객체에 uncaughtException 이벤트 리스너를 달아 처리하지 못한 에러 발생시 이벤트 리스너가 실행되고 프로세스가 유지
- 실행후 1초만에 setInterval에서 에러가 발생하여 프로세스가 멈추기 때문인데 하지만 uncatughtException 이벤트 리스너가 연결되어 있으므로 프로세스가 멈추지 않습니다.
- 하지만 노드 공식 문서에서는 uncaughtException 이벤트를 최후의 수단으로 사용할 것을 명시 노드는 uncaughtException 이벤트 발생 후 다음 동작이 제대로 동작하는지를 보증하지 않는다. 즉, 복구 작업 코드를 넣어 두었더라도 그것이 동작하는지 확신할 수 없습니다.
- 따라서 uncaughtException은 단순히 에러 내용을 기록하는 정도로 사용하고, 에러를 기록한 후 process.exit()으로 프로세스를 종료하는 것이 좋습니다. 에러가 발생하는 코드를 수정하지 않는 이상 프로세스가 실행하는 동안 에러는 계속 발생할 것입니다.

#### 자주 발생하는 에러들

- node : command not found > 노드를 설치했지만 이 에러가 발생하는 경우는 환경 변수가 제대로 설정되지 않은 것입니다. 환경 변수에는 노드가 설치된 경로가 포함되어야 합니다. node 외의 다른 명령어도 마찬가지입니다. 그 명령어를 수행할 수 있는 파일이 환경 변수에 들어 있어야 명령어를 콘솔에서 사용할 수 있습니다.
- ReferenceError : 모듈 is not defined > 모듈을 require 했는지 확인
- Error : Cannot find module 모듈명 > 해당 모듈을 require 했지만 설치하지 않았습니다. npm i 명령어로 설치하세요.
- Error : Can't set headers after they are sent > 요청에 대한 응답을 보낼 때 응답을 두번이상 보냈습니다. 요청에 대한 응답은 한 번만 보내야합니다. 응답을 보내는 메서드를 두번이상 사용하지 않았는지 확인
- FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - Javascript heap out of memory : 코드를 실행할 때 메모리가 부족하여 스크립트가 정상적으로 작동하지 않는 경우입니다. 코드가 잘못되었을 확률이 높으므로 코드를 점검해보세요. 만약 코드는 정상이지만 노드가 활용할 수 있는 메모리가 부족한 경우라면 노드의 메모리를 늘릴 수있습니다. 노드를 실행할 때 **node --max-old-space-size=4096 파일명** 과 같은 명령어를 사용하면 됩니다. 4096은 4GB를 의미합니다. 원하는 용량을 적으면 됩니다.
- UnhandledPromiseRejectionWarning : Unhandled promise rejection : 프로미스 사용시 catch 메서드를 붙이지 않으면 발생합니다 항상 catch를 붙여 에러가 나는 상황에 대비하세요.
- EADDRINUSE 포트 번호 : 해당 포트 번호에 이미 다른 프로세스가 연결되어 있습니다. 그 프로세스는 노드 프로세스일 수도 있고 다른 프로그램일 수도 있습니다. 그 프로세르를 종료하거나 다른 포트 번호를 사용해야 합니다.

**윈도에서 프로세스 종료하기**

- netstat -ano | findstr 포트
- taskkill /pid 프로세스아이디/f
  예를들어 포트가 3000이고 netstat -ano | findstr 3000을 수행한 결과의 프로세스 아이디가 12345였을 경우, taskkill /pid12345/f를 하면 해당 프로세스가 종료됩니다.

- EACCES 또는 EPERM : 노드가 작업을 수행하는 데 권한이 충분하지 않습니다. 파일/폴더 수정,삭제,생성 권한을 확인해보는 것이 좋습니다.
- EJSONPARSE : package.json 등의 JSON 파일에 문법 오류가 있을 때 발생합니다. 자바스크립트 객체와는 형식이 조금 다르니 쉼표 같은게 빠지거나 추가되지 않았는지 확인
- ECONNREFUSED : 요청을 보냈으나 연결이 성립하지 않을 때 발생합니다. 요청을 받는 서버의 주소가 올바른지, 꺼져있지는 않은 확인
- ETARGET : package.json에 기록한 패키지 버전이 존재하지 않을 때 발생합니다. 해당 버전이 존재하는지 확인
- ETIMEOUT : 요청을 보냈으나 응답이 일정 시간 내에 오지 않을 때 발생합니다. 역시 요청을 받는 서버의 상태를 점검해봐야합니다.
- ENOENT : no such file or directory > 지정한 폴더/파일이 존재하지 않는 경우입니다.

### 4. http 모듈로 서버 만들기

#### 요청과 응답 이해하기

ex. **BackEnd\4. http 모듈로 서버 만들기\요청과 응답 이해하기\createServer.js**

- http 서버가 있어야 웹 브라우저의 요청을 처리할 수 있으므로 http 모듈로 사용
- http 모듈에는 createServer 메서드가 있습니다. 인수로 요청에 대한 콜백 함수를 넣을 수 있으며, 요청이 들어올 때마다 매번 콜백 함수가 실행, 따라서 콜백 함수에 응답을 적으면 됩니다.
- createServer의 콜백 부분을 보면 req와 res 매개변수가 있는데 req 객체는 요청에 관한 정보들을, res 객체는 응답에 관한 정보들을 담고 있습니다.

ex. **BackEnd\4. http 모듈로 서버 만들기\요청과 응답 이해하기\server1.js**

- 응답을 보내는 부분과 서버에 연결하는 부분을 추가
- createServer 메서드 뒤에 listen 메서드를 붙이고 클라이언트에 공개할 포트 번호와 포트 연결 완료 후 실행될 콜백함수를 넣습니다. 이제 이 파일을 실행하면 서버는 8080 포트에서 요청이 오기를 기다립니다.
- res 객체에는 res.writeHead와 res.write, res.end 메서드가 있습니다.
- res.writeHead : 응답에 대한 정보를 기록하는 메서드입니다. 첫번째 인수로 성공적인 요청을 의미하는 200을 두번째 인수로 응답에 대한 정보를 보내는데 콘텐츠의 형식이 HTML임을 알리고 있습니다. 또한 한글 표시를 위해 charset을 utf-8로 지정, 이정보가 기록되는 부분을 **헤더(header)**라고 합니다.
- res.write : 첫번째 인수는 클라이언트로 보낼 데이터입니다. 지금은 HTML 모양의 문자열을 보냈지만 버퍼를 보낼수도 있습니다. 또한, 여러번 호출해서 데이터를 여러개 보내도 됩니다. 데이터가 기록되는 부분을 **본문(body)** 라고 합니다.
- res.end : 응답을 종료하는 메서드입니다. 만약 인수가 있다면 그 데이터도 클라이언트로 보내고 응답을 종료합니다. 따라서 위의 예제는 res.write에서 해당 문자열을, res.end에서 해당 문자열을 클라이언트로 보낸 후 응답이 종료된 것입니다. 브라우저는 응답 내용을 받아서 렌더링합니다.

- **localhost & port**
- localhost : 현재 컴퓨터의 내부 주소 > 외부에서는 접근할 수 없고 자신의 컴퓨터에서만 접근가능 > 서버개발시 테스트용으로 많이 사용, localhost 대신 127.0.0.1을 주소로 사용해도 같습니다. 이러한 숫자 주소를 IP라고 부릅니다.
- 포트 : 서버 내에서 프로세스를 구분하는 번호입니다. 서버는 HTTP 요청을 대기하는 것 외에도 다양한 작업을 하는데 데이터베이스와도 통신해야 하고, FTP 요청을 처리하기도 합니다 따라서 서버는 프로세스에 포트를 다르게 할당하여 들어오는 요청을 구분합니다. 유명한 포트 번호는 21(FTP), 80(HTTP), 443(HTTPS), 3306(MYSQL)이 있습니다. 포트 번호는 IP 주소 뒤에 콜론(:)과 함께 붙여 사용합니다.
- **포트 충동** : 다른 서비스가 사용하고 있는 포트를 사용할 경우 Error : listen EADDRINUSE ::: 포트번호 같은 에러가 발생합니다. 이런 경우 그 서비스를 종료하거나 노드의 포트를 다른 번호로 바꾸면 됩니다. 서비스가 종료되지 않는다면 3.8.1절의 에러 해결 방법을 참고

ex. **BackEnd\4. http 모듈로 서버 만들기\요청과 응답 이해하기\server1-1.js**

- listen 메서드에 콜백 함수를 넣는 대신, 다음과 같이 서버에 listening 이벤트 리스너를 붙여도 됩니다. 추가로 error 이벤트 리스너도 붙여봤습니다.

- **소스 코드 변경** : 서버의 소스 코드를 변경할 때 서버가 자동으로 변경 사항을 반영하지 않고 서버를 종료했다가 다시 실행해야 변경 사항이 반영

ex. **BackEnd\4. http 모듈로 서버 만들기\요청과 응답 이해하기\server1-2.js**

- 한번에 여러 서버를 실행할 수도 있습니다. createServer를 원하는 만큼 호출
- 각각 localhost:8080, localhost:8081 주소로 서버에 접속할 수 있습니다. 이때 포트 번호가 달라야 한다 포트 번호가 같으면 EADDRINUSE 에러가 발생, 단 실무에서 이런식으로 서버를 여러 개 띄우는 일은 드물다
- res.write와 res.end에 일일이 HTML을 적는 것은 비효율적이므로 미리 HTML 파일을 만들어두면 좋다 그 HTML 파일을 fs 모듈로 읽어서 전송 가능

ex. **BackEnd\4. http 모듈로 서버 만들기\요청과 응답 이해하기\server2.js**

- 요청이 들어오면 먼저 fs 모듈로 HTML 파일을 읽습니다. data 변수에 저장된 버퍼를 그대로 클라이언트에 보내면 됩니다. 이전 예제에서는 문자열을 보냈지만, 저렇게 버퍼를 보낼 수도 있습니다.
- 예기치 못한 에러가 발생한 경우 에러 메시지를 응답합니다. 에러 메시지는 일반 문자열 이므로 text/plain을 사용했습니다.

#### **HTTP 상태 코드**

- 200이나 500과 같은 숫자는 HTTP 상태 코드입니다. res.writeHead에 첫번째 인수로 상태 코드를 넣었는데, 브라우저는 서버에서 보내주는 상태 코드를 보고 요청이 성공했는지 실패했는지를 판단합니다.

- 2XX : 성공을 알리는 상태 코드입니다. 대표적으로 *200(성공), 201(작성됨)*이 많이 사용됩니다.
- 3XX : 리다이렉션(다른 페이지로 이동)을 알리는 상태 코드입니다. 어떤 주소를 입력했는데 다른 주소의 페이지로 넘어갈 때 이 코드가 사용됩니다. 대표적으로 *301(영구 이동), 302(임시 이동)이 있습니다. 304(수정되지 않음)*은 요청의 응답으로 캐시를 사용했다는 뜻입니다.
- 4XX : 요청 오류를 나타냅니다. 요청 자체에 오류가 있을 때 표시됩니다. 대표적으로 *400(잘못된 요청), 401(권한 없음), 403(금지됨), 404(찾을 수 없음)*이 있습니다.
- 5XX : 서버 오류를 나타냅니다. 요청은 제대로 왔지만 서버에 오류가 생겼을 때 발생합니다. 이 오류가 뜨지 않게 주의해서 프로그래밍해야 합니다. 이 오류를 res.writeHead로 클라이언트에 직접 보내는 경우는 거의 없고, 예기지 못한 에러 발생시 서버가 알아서 5XX대 코드를 보냅니다. *500(내부서버 오류), 502(불량 게이트웨이), 503(서비스를 사용할 수 없음)*이 주로 사용됩니다.

**무조건 응답을 보내야합니다**
: 요청 처리 과정 중에 에러가 발생헀다고 해서 응답을 보내지 않으면 안됩니다. 요청이 성공헀든 실패했든 응답을 클라이언트로 보내서 요청이 마무리 되었음을 알려야 합니다. 요청을 보내지 않는다면 클라이언트는 서버로부터 응답이 오길 하염없이 기다리다가 일정 시간후 Timeout(시간 초과)처리 합니다.

#### REST와 라우팅 사용하기

- 서버에 요청을 보낼 때는 주소를 통해 요청의 내용을 표현
- /index.html : 서버의 index.html을 보내달라는 뜻
- 항상 html만 요청할 필요는 없고 css나 js또는 이미지 같은 파일 요청할 수도 있고 특정 동작을 행하는 것을 요청할수 있다 요청의 내용이 주소를 통해 표현되므로 서버가 이해하기 쉬운 주소를 사용하는 것이 좋습니다. 여기서 RSET 등장
- REST(REpresentational State Transfer) : 서버의 자원을 정의하고 자원에 대한 주소를 지정하는 방법 > 일종의 약속
- REST API에는 많은 규칙들이 있는데 모든 규칙을 지키는 것은 현실적으로 어려우므로 기본적인 개념만
- 주소는 의미를 명확히 전달하기 위해 명사로 구성
- /user이면 사용자 정보에 관련된 자원 요청, /post라면 게시글에 관련된 자원을 요청
- 단순히 명사만 있으면 무슨 동작을 행하라는 것인지 알기 어려우므로 REST에서는 주소외에도 HTTP 요청 메서드를 사용 > GET/POST가 요청 메서드 > 또한 PUT, PATCH, DELETE, OPTIONS 등의 메서드도 주로 사용
- **GET** : 서버 자원을 가져오고자 할 때 사용합니다 요청의 본문에 데이터를 넣지 않습니다. 데이터를 서버로 보내야 한다면 쿼리스트링 사용
- **POST** : 서버에 자원을 새로 등록하고자 할 때 사용합니다. 요청의 본문에 새로 등록할 데이터를 넣어 보냅니다.
- **PUT** : 서버의 자원을 요청에 들어있는 자원으로 치환하고자 할 때 사용합니다. 요청의 본문에 치환할 데이터를 넣어 보냅니다.
- **PATCH** : 서버 자원의 일부만 수정하고자 할 때 사용합니다. 요청의 본문에 일부 수정할 데이터를 넣어 보냅니다.
- **DELETE** : 서버의 자원을 삭제하고자 할 때 사용합니다. 요청의 본문에 데이터를 넣지 않습니다.
- **OPTIONS** : 요청을 하기 전에 통신 옵션을 설명하기 위해 사용합니다.
- 주소 하나가 요청 메서드를 여러 개 가질수있습니다.
- 위의 메서드로 표현하기 애매한 로그인 같은 동작이 있다면 POST 사용
- 주소와 메서드만 보고 요청의 내용을 알아볼 수 있다는 것이 장점
- 또한, **GET 메서드 같은 경우 브라우저에서 캐싱(기억)**할 수도 있으므로 같은 주소로 GET 요청을 할떄 서버에서 가져오는 것이 아니라 캐시에서 가져올 수도 있습니다. > 성능 향상을 위한 캐싱

ex. **REST에 기반한 서버 주소 구조**
<br>
<img src="https://user-images.githubusercontent.com/41010744/103557894-32236080-4ef7-11eb-9507-71be044267be.png">
<br>

- HTTP 통신을 사용하면 클라이언트가 누구든(iOS, 안드로이드, 웹, 다른 서버) 같은 방식으로 서버와 소통 > 서버와 클라이언트의 분리 > 추후 서버 확장시 클라이언트에 구애되지 않음

ex. **BackEnd\4. http 모듈로 서버 만들기\REST와 라우팅 사용하기\restServer.js**

- restServer.js가 핵심 > 코드를 보면 req.method로 HTTP 요청 메서드를 구분
- 메서드가 GET이면 다시 req.url로 요청 주소를 구분
- 주소가 /일때는 restFornt.html파일을 제공
- 만약 존재하지 않는 파일을 요청했거나 GET 메서드 요청이 아닌 경우라면 404 NOT Found 에러가 응답으로 전송
- 응답 과정 중에 예기치 못한 에러가 발생한 경우 500 에러가 응답으로 전송( 실무에서 500을 전송하는 경우는 드뭅니다)
- 다른 HTTP 요청 메서드를 추가하고, 데이터베이스 대용으로 users라는 객체를 선언ㅇ하여 사용자 정보를 저장
- POST/user 요청에서는 사용자를 새로 저장하고 있으며, PUT/user/아이디 요청에서는 해당 아이디의 사용자 데이터를 수정
- DELETE/user/아이디 요청에서는 해당 아이디의 사용자를 제거
- POST와 PUT 요청을 할때 req.on('data')외 req.on('end')의 사용은 요청의 본문에 들어 있는 데이터를 꺼내기 위한 작업이라고 보면 됩니다.
- req와 req도 내부적으로는 스트림(각각 readStream, writeStream)으로 되어 있으므로 요청/응답의 데이터가 스트림 형식으로 전달
- 또한 on에서 볼 수 있듯이 이벤트도 달려 있습니다.
- 받은 데이터는 문자열이므로 JSON으로 만드는 JSON.parse 과정이 필요

- **res.end 앞에 return은 왜 붙이나요?**
- res.end를 호출하면 함수가 종료되는 것이 아닌 노드도 일반적인 자바스크립트 문법을 따르므로 return을 붙이지 않는 한 함수가 종료되지 않습니다. 따라서 다음에 코드가 이어지는 경우에는 return을 써서 명시적으로 함수를 종료했습니다. return을 붙이지 않아서 res.end 같은 메서드가 여러 번 실행된다면 Error : Can't headers after they are sent to the client 에러가 발생
  <br>
  <img src="https://user-images.githubusercontent.com/41010744/103561212-76fdc600-4efc-11eb-9ee6-809a9120a7fd.png">
  <br>
  <img src="https://user-images.githubusercontent.com/41010744/103561293-95fc5800-4efc-11eb-8598-6867336a8301.png">
  <br>

- Network 탭에서 네트워크 요청 내용을 실시간으로 확인 가능, REST 방식으로 주소를 만들었으므로 주소와 메서드만 봐도 요청 내용을 유추 가능하다
- Name은 요청 주소를, Method는 요청 메서드를, Status는 HTTP 응답 코드를, Protocol은 통신 프로토콜을, Type은 요청의 종류를 의미. xhr은 AJAX 요청
- Network 탭에서 POST/users 는 사용자를 등록하는 요청
- DELETE/users/15055055712는 해당 키를 가진 사용자를 제거하는 요청
- 등록,수정,삭제가 발생할때마다 GET/users로 갱신된 사용자 정보를 가져오고 있습니다.

- **헤더와 본문**
  <br>
  <img src="https://user-images.githubusercontent.com/41010744/103562165-f6d86000-4efd-11eb-89ba-33c530bdb1a5.png">
  <br>

- 요청과 응답은 모두 헤더와 본문을 가지고 있습니다. 헤더는 요청/응답에 대한 정보를 가지고 있는 곳이고, 본문은 서버와 클라이언트 간에 주고받을 실제 데이터를 담아두는 공간
- 개발자 도구의 network 탭에서 요청 중 하나를 클릭해보면 더 상세하게 요청/응답을 살펴볼 수 있습니다.
- General : 공통된 헤더
- Request Headers : 요청의 헤더
- Resonse Headers : 응답의 헤더
- Request Payload : 요청의 본문
- Priview & Response : 응답의 본문
- JSON의 경우 Preview 탭에서 더 깔끔하게 확인 가능

#### 쿠키와 세션 이해하기

- 클라이언트에서 보내는 요청의 한 가지 단점 : 누가 요청을 보내는지 모른다
- 물론 요청을 보내는 IP주소나 브라우저의 정보를 받아올수 있지만 여러 컴퓨터가 공통으로 IP주소를 가지거나, 한 컴퓨터를 여러 사람이 사용할 수도 있다
- 해결책 : 로그인 > 쿠키와 세션

ex. **BackEnd\4. http 모듈로 서버 만들기\쿠키와 세션이해하기\cookie.js**

- 쿠키는 _name=zerocho;year=1994_ 처럼 문자열 형식으로 존재, 쿠키 간에는 세미콜론으로 구분
- createServer 메서드의 콜백에서는 req 객체에 담겨있는 쿠키를 가져옵니다. 쿠키는 req.headers.cookie에 들어 있습니다.
- req.headers는 요청의 헤더를 의미합니다. 쿠키는 요청과 응답의 헤더를 통해 주고 받는다
- 응답의 헤더에 쿠키를 기록해야 하므로 res.writeHead 메서드를 사용
- Set-Cookie는 브라우저한테 다음과 같은 값의 쿠키를 저장하라는 의미
  <br>
  <img scr="https://user-images.githubusercontent.com/41010744/103722228-d5b56380-5012-11eb-82d0-5192493eefa7.png">
  <br>

- 한개의 요청을 보냈는데 두개가 기록(/,/fabicon.ico)
- **파비콘** : 웹 사이트 탭에 보이는 이미지
  <br>
  <img scr="https://user-images.githubusercontent.com/41010744/103722325-0ac1b600-5013-11eb-8260-61a3fc6f9a21.png">
  <br>

- 브라우저는 파비콘이 뭔지 HTML에서 유추할 수 없으면 서버에 파비콘 정보에 대한 요청을 보냅니다.
- 따라서, 첫번째 요청에서는 쿠키 정보를 가지고 있지않으므로 쿠키정보를 출력하지 않고 두번째 파비콘 요청의 헤더에 쿠키가 존재함을 확인 가능

ex. **BackEnd\4. http 모듈로 서버 만들기\쿠키와 세션이해하기\cookie2.js & cookie2.html**

- 주소가 /login과 /로 시작하는 것까지 두개이므로 주소별로 분기처리

1.  cookie2.js 분석

```javascript
const parseCookies = (cookie = "") =>
  cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
```

- 쿠키는 문자열이기 때문이 이를 쉽게 사용하기 위해 자바스크립트 객체 형식으로 바꾸는 함수

##### Array.prototype.map()

: 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

##### Array.prototype.reduce()

: 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 두번째 인수는 초기 값
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

2. cookie2.js 분석

```javascript
 // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 5);
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
```

- 주소가 /login으로 시작할 경우 url과 querystring 모듈로 각각 주소와 주소에 딸려오는 query를 분석
- 쿠키 만료시간을 지금으로부터 5분뒤로 설정
- 302 응답 코드, 리다이렉트 주소와 함께 쿠키를 헤더에 넣는다
- 헤더에는 한글을 설정할 수없으므로 name 변수를 encodeURIComponent 메서드로 인코딩
- 또, Set-Cookie의 값으로는 제한된 ASCII코드만 들어가야 하므로 줄바꿈 X

3. cookie2.js 분석

```javascript
// name이라는 쿠키가 있는 경우
  } else if (cookies.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    try {
      const data = await fs.readFile('./cookie2.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
```

- 그 외의 경우(/로 접속했을 때 등), 먼저 쿠키가 있는지 확인 후 쿠키가 없다면 로그인할 수 있는 페이지로 보낸다
- 처음 방문한 경우 쿠키가 없으므로 cookie2.html로 전송
- 쿠키가 있다면 로그인된 상태로 간주하여 인사말 출력

##### Set-Cookie 쿠키 설정

- 만료 시간(Expires), HttpOnly, Path 옵션 부여
- 쿠키 설정할 때 각종 옵션 가능 > 옵션 사이 세미콜론(;)을 써서 구분
- 쿠키에 한글과 줄바꿈은 불가 > 한글은 encodeURIComponent로 감싸서 넣는다
- 쿠키명=쿠키값 : 기본적인 쿠키의 값입니다. ex. mycookie=test, name=zerocho 와 같이 설정
- Expires=날짜 : 만료기한 > 이 기한이 지나면 쿠키제거, 기본 값은 클라이언트가 종료될때까지
- Max-age=초 : Expires와 비슷하지만 날짜 대신 초를 입력할 수 있습니다. 해당 초가 지나면 쿠키가 제거됩니다. Expires보다 우선합니다.
- Domain=도메인명 : 쿠키가 전송될 도메인을 특정할 수 있습니다. 기본값은 현재 도메인
- Path=URL : 쿠키가 전송될 URL을 특정할 수 있습니다. 기본값은'/'이고, 이 경우 모든 URL에서 쿠키 전송 가능
- Secure : HTTPS 일 경우에만 쿠키가 전송
- HttpOnly : 설정시 자바스크립트에서 쿠키에 접근할 수 없습니다. 쿠키 조작을 방지하기 위해 설정하는 것이 좋습니다.
  <br>
  <img src="https://user-images.githubusercontent.com/41010744/103731282-1cfa1f00-5028-11eb-86fb-b755c8d84ec4.png">
  <br>

- 새로고침을 해도 로그인 유지
- but, 쿠키가 노출되어 쿠키가 조작될 위험이 있다 따라서 민감한 개인정보를 쿠키에 넣어두는 것은 적절하지 못하다

ex. **BackEnd\4. http 모듈로 서버 만들기\쿠키와 세션이해하기\session.js.js**

- cookie2.js와 달리 쿠키에 이름을 담아서 보내는 대신, uniqueInt라는 숫자 값을 보냈습니다.
- 사용자의 이름과 만료 시간은 uniqueInt 속성명 아래에 있는 session이라는 객체에 대신 저장
- cookie.session이 있고 만료 기한을 넘기지 않았다면 session 변수에서 사용자 정보를 가져와 사용
- 서버에 사용자 정보를 저장하고 클라이언트와는 세션 아이디로만 소통
- 하지만 실제로는 세션을 위와 같이 변수에 저장하지 않는다. 서버가 멈추거나 재시작되면 메모리에 저장된 변수가 초기화되기 때문인데 보통은 레디스(Redis), 멤캐시드(Memcached)같은 DB에 넣는다

#### https와 http2

- https 모듈은 웹 서버에 SSL 암호화를 추가 , GET이나 POST요청을 할 때 오가는 데이터를 암호화해서 중간에 다른사람이 요청을 가로채더라도 내용을 확인 X
- 요즘은 로그인이나 결제가 필요한 창에서 https 적용이 필수
- SSL이 적용된 웹 사이트에 방문하면 아래와 같이 브라우저 주소창에 자물쇠 표시
  <br>
  <img scr="https://user-images.githubusercontent.com/41010744/103731857-82024480-5029-11eb-8a6d-05a18c6e516b.png">
  <br>

ex. **BackEnd\4. http 모듈로 서버 만들기\https와 http2\server1.js**

- 이서버에 암호를 적용하려면 https 모듈을 사용해야 합니다. 하지만 https는 아무나 사용할수 있는 것이 아닌 인증해줄수있는 기관이 필요한데 인증서는 인증 기관에서 구입해야 하며, Let's Encrypt 같은 기관에서 무료로 발급해주기도 한다.
- 인증서 발급 과정은 복잡하고 도메인도 필요하므로 인증서 발급 방법은 책에서 소개하지 않고 발급 받은 인증서가 있다면 **BackEnd\4. http 모듈로 서버 만들기\https와 http2\server1-3.js** 처럼하면 된다.
- 다른 것은 거의 비슷하지만 createServer 메서드가 인수를 두개 받습니다. 두 번째 인수는 http 모듈과 같이 서버 로직이고, 첫 번째 인수는 인증서에 관련된 옵션 객체
- 인증서를 구입하면 pem이나 crt, 또는 key확장자를 가진 파일들을 제공합니다. 파일들을 fs.readFileSync 메서드로 읽어서 cert, key, ca 옵션에 알맞게 넣으면 됩니다.
- 실제 서버에서는 80포트 대신 443 포트를 사용하면 됩니다.

ex. **BackEnd\4. http 모듈로 서버 만들기\https와 http2\server1-4.js**

- 노드의 http2 모듈은 SSL 암호화와 더불어 최신 HTTP 프로토콜인 http/2를 사용할 수 있게 합니다. http/2는 요청, 응답 방식이 기존 http/1.1 보다 개선되어 훨씬 효율적으로 요청 > 웹의 속도 개선
- 실제로 http/1.1도 파이프라인이라는 기술을 적용하므로 큰 차이는 없지만 http/2가 훨씬 효율적
- https 모듈과 유사하지만 https 모듈을 http2로, createServer 메서드를 createSecureServer 메서드로 변경
  <br>
  <img src="https://user-images.githubusercontent.com/41010744/103732546-f5588600-502a-11eb-81d2-d17bef407ec7.png">
  <br>

#### cluster

- 기본적으로 싱글 프로세스로 동작하는 노드가 CPU 코어를 모두 사용할 수 있게 해주는 모듈
- 포트를 공유하는 노드 프로세스를 여러 개 둘수도 있으므로, 요청이 많이 들어왔을 때 병렬로 실행된 서버의 개수만큼 요청이 분산되게 할 수 있습니다. > 서버에 무리 ↓
- 예를들어, 코어가 8개인 서버가 있을때 노드는 보통 코어를 하나만 활용하는데 cluster 모듈을 통해 코어 하나당 노드 프로세스가 하나가 돌아게가할수 있다. 코어 하나를 사용하는 것에 비해 성능이 개선된다.
- 하지만, 메모리를 공유하지 못하는 등의 단점도 존재 > 세션을 메모리에 저장(문제O) > 레디스(DB) 등의 서버를 도입하여 해결

ex. **BackEnd\4. http 모듈로 서버 만들기\cluster\cluster.js**
<br>
<img scr="https://user-images.githubusercontent.com/41010744/103734213-d8be4d00-502e-11eb-85ef-81a156e4381f.png">
<br>

- http://localhost:8086에 접속하면 1초 후 콘솔에 워커가 종료되었다는 메시지 > 8번 새로고침시 모든 워커가 종료되어 서버가 응답하지 X

```javascript
cluster.on("exit", (worker, code, signal) => {
  console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
  console.log("code", code, "signal", signal);
  cluster.fork();
});
```

- cluster.fork()를 통해 워커 하나가 종료될 때마다 새로운 워커를 생성 > 오류처리 > but, 실무에서는 pm2 등의 모듈로 cluster 기능 사용 > 15.1.5절에서 설명
- 4.2절의 웹 서버 주소는 HTML/CSS같은 정적파일을 요청하는 주소와 서버의 users 자원을 요청하는 주소로 크게 나뉘어져 있습니다 > 만약 파일이나 자원의 수가 늘어나면 그에 따라 주소의 종류 多
- 많은 if문이 코드가 상당히 길어져 보기도 어렵고 관리도 어렵습니다. 주소의 수가 많아질수록 코드가 계속 길어짐
- **해결책 : Express 모듈** > 다른 사람들이 만들어둔 모듈이므로 설치 필요 > 5절 : npm 통한 모듈 설치 및 직접 만들어 배포

### 5. 패키지 매니저

- npm 사용법과 npm을 통해 다른 사람이 만들어둔 코드를 사용하는 방법, 자신의 코드를 npm에 배포하여 다른 사람들이 쓸수있게 하는 방법

#### npm 알아보기

- npm(Node Package Manager, 노드 패키지 매니저) : 125만개에 달하는 패키지가 등록되어 있고 특정 기능을 하는 패키지가 필요하다면 npm에서 찾아 설치 > 오픈 소스, 웹 개발에 많은 도움
- npm에 업로드된 노드 모듈을 패키지라고 부르고 모듈이 다른 모듈을 사용할 수 있는 것처럼 패키지가 다른 패키지를 사용 가능 > 의존 관계

##### yarn

- npm의 대체자로 페이스북이 내놓은 패키지 매니저
- react/react-native같은 페이스북 진영의 프레임워크를 사용할 때 종종 볼수있으며 npm의 사용 방법을 안다면 yarn도 쉽게 익힐 수 있습니다.
- npm과 비교해서 몇가지 편리한 기능이 있지만 별도로 설치

#### package.json으로 패키지 관리

- 서비스에 필요한 패키지를 추가하다 보면 많은 패키지수를 요구하고 사용할 패키지는 고유 버전을 기록할 필요성 O
- 같은 패키지라도 버전별로 기능이 다를 수 있으므로 프로젝트 설치시 패키지도 동일한 버전을 설치하지 않으면 문제 발생
- package.json : 패키지의 버전을 관리하는 파일 > 노드 프로젝트를 시작하기 전에 폴더 내부에 무조건 생성 필요
- npm은 package.json을 만드는 명령어를 제공
- **npm init** : 프로젝트 이름, 버전, 설명 등을 기입하기 위한 명령어
  <br>
  <img src="https://user-images.githubusercontent.com/41010744/103736433-977c6c00-5033-11eb-9439-babcc3823bcd.png">
  <br>

- package.name : 패키지의 이름입니다. package.json의 name 속성에 저장됩니다.
- version : 패키지의 버전입니다. npm의 버전은 다소 엄격하게 관리됩니다. 5.3절에서 다룹니다
- entry point : 자바스크립트 실행 파일 진입점입니다. 보통 마지막으로 module.exports를 하는 파일을 지정합니다. package.json의 main 속성에 저장됩니다.
- test command : 코드를 테스트할 때 입력할 명령어를 의미합니다. package.json scripts 속성 안의 test 속성 에 저장됩니다.
- git repository : 코드를 저장해둔 깃(git) 저장소 주소를 의미합니다. 나중에 소스에 문제가 생겼을 때 사용자들이 이 저장소에 방문해 문제를 제기할 수도 있고, 코드 수정본을 올릴 수 있습니다. package.json의 repository 속성에 저장
- keywords : 키워드는 npm 공식 홈페이지 (https://npmjs.com) 에서 패키지를 쉽게 찾을 수 있습니다. pcakage.json의 keywords 속성에 저장됩니다.
- license : 해당 패키지의 라이선스를 넣으면 됩니다.

##### 라이선스

- 오픈 소스라고 모든 패키지를 아무런 제약 없이 사용할 수 있는 것은 아닙니다. 라이선스 별로 제한 사항이 있으므로 반드시 라이선스를 확인
- ISC, MIT, BSD 라이선스를 가진 패키지를 사용할 때는 사용한 패키지와 라이선스만 밝히면 자유롭게 사용 가능
- apache 라이선스 패키지는 사용은 자유롭지만 특허권에 대한 제한이 포함
- GPL 라이선스 패키지를 사용할 때는 GPL 계열의 패키지를 사용한 패키지를 배포할 때는 자산의 패키지도 GPL로 배포하고 소스코드도 공개해야 한다.
- 라이선스별로 특징이 다르므로 오픈 소를 사용하기 전에 반드시 라이선스를 확인하고 세부 내용을 읽어봐야 한다 > 이후 상용프로그램에서 법적 문제 O

ex. **BackEnd\5. 패키지 매니저\package.json\package.json**

- scrpts 부분은 npm 명령어를 저장해두는 부분 > 콘솔에서 **npm run [스크립트 명령어]** 를 입력하면 해당 스크립트 실행
- test 스크립트 외에도 scripts 속성에 명령어 여러 개를 등록해두고 사용 가능 보통 start 명령어에 **node [파일명]** 을 저장해두고 **npm start** 로 실행
- start, test 같은 스크립트는 run을 붙이지 않아도 실행
- 패키지 설치시 **npm install [패키지 이름]** 을 package.json이 있는 폴더의 콘솔에서 입력
- express package 설치 : npm install express
- 설치시 **node_modules** 라는 폴더가 생성되는데 그 안에 설치한 패키지들이 들어 있습니다. Express에 의존하는 패키지들 의존 관계로 복잡하게 얽혀 있어 package.json이 필요
- **package-lock.json** : 직접 설치한 express 외에도 node_modules에 들어 있는 패키지들의 정확한 버전과 의존 관계가 담겨 있습니다. npm으로 패키지를 설치, 수정, 삭제 할때마다 패키지들 간의 내부 의존 관계를 이 파일에 저장
- 모듈 여러개를 동시 설치 : **npm install [패키지1] [패키지2] [패키지3] ...**

##### npm WARN npmtest@0.0.1 No repository field

- 이 경고는 package.json에 repository 속성이 없어서 발생
- 나중에 소스코드를 깃허브나 깃랩등과 같은 저장소에 저장한 후, repository 속성을 만들고 적으면 된다.
- 단순한 경고이므로 해결하지 않아도 된다.

##### audited [숫자] packages

- 패키지를 설치할 때 audited [숫자] packages라는 문장이 출력되는데 패키지에 있을 수 있는 취약점을 자동으로 검사했다는 의미
- found [발견 숫자] [심각도] severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
- npm audit은 패키지의 알려진 취약점을 검사할 수 있는 명령어, npm에 패키지들이 많다 보니 일부 패키지는 악성코드를 담고 있습니다. 이런 것들이 np에 보고 되는데 npm audit을 통해 내가 악성 코드가 담긴 패키지를 설치하지 않았는지 검사 **npm audit fix** 를 입력하면 npm이 스스로 수정할 수 있는 취약점을 알아서 수정합니다. 주기적으로 수정 필요

##### --save 옵션

- 패키지를 설치할 때 npm install 명령어에 --save 옵션을 붙이는 책/블로그를 많이 볼수있습니다.
- dependencies에 패키지 이름을 추가하는 옵션이지만 npm@5부터는 기본값으로 설정되어 있으므로 따로 붙이지 않아도 됩니다.

#### 개발용 패키지를 설치

- 실제 배포 시에는 사용되지 않고 개발 중에만 사용되는 패키지
- npm install --save-dev [패키지]
- **nodemon** : 소스 코드가 바뀔 때마다 노드를 재실행
- devDependencies : 개발용 패키지들을 관리

#### npm의 전역 설치

- 패키지를 현재 폴더의 node_modules에 설치하는 것이 아니라 npm이 설치되어 있는 폴더(윈도의 경우 : C:\users\사용자이름\AppData\Roaming\npm)에 설치
- 이 폴더의 경로는 보통 시스템 환경 변수에 등록되어 있으므로 전역 설치한 패키지는 콘솔의 명령어로 사용 가능
- 전역 설치했다고 해서 패키지를 모든 곳에서 사용하는 것은 아니고 대부분 명령어로 사용하기 위해 전역 설치
- npm install --global [패키지]
- rimraf : 리눅스/맥의 rm -f 명령어를 윈도에서도 사용할 수 있게 해주는 명령어 > 지정한 파일이나 폴더를 지우는 명령어
- 전역 설치한 패키지는 package.json에 기록 X
- rimraf node_modules를 통해 node_modules 폴더를 지워도, package.json에 설치한 패키지 내역이 들어 있으므로 **npm install** 만하면 알아서 다시 설치
- Git에도 node_modules은 커밋하지 않고 중요한 파일은 package.json 이다.

#### npx

- 전역 설치는 package.json에 기록되지 않아 다시 설치할 때 어려움이 따르는데 이러한 경우 npx를 사용
- npm install --save-dev rimaraf
- npx rimraf node_modules
- 위와 같이 rimarf 모듈을 package.json의 devDependencies 속성에 기록한 후, 앞에 npx 명령어를 붙여 실행시 패키지를 전역 설치한 것과 같은 효과를 얻을 수 있다. 패키지가 package.json에도 기록되어 버전관리도 용이

#### npm에 등록되지 않은 패키지

- 모든 패키지가 npm에 등록되어 있는 것이 아닌 일부 패키지들은 오픈 소스가 아니거나 개발 중이므로 깃허브나 nexus 등의 저장소에 보관되어 있을수 있다.
- 그러한 패키지들도 **npm install [저장소 주소]** 명령어를 통해 설치 가능

#### 명령어 줄여 쓰기

- npm install > npm i
- --save-dev > -D
- --global > -g

#### 패키지 버전 이해하기

- 노드 패키지들의 버전은 항상 세자리 > SemVer 방식의 버전 넘버링
- SemVer(Semantic Versioning, 유의적 버전) : 버전을 구성하는 세 자리가 모두 의미를 가짐
- 각각의 패키지는 모두 버전이 다르고 패키지 간의 의존 관게도 복잡 > 어떤 패키지의 버전을 업그레이드 했는데 그것을 사용하는 다른 패키지에서 에러 발생시 문제 > 패키지가 서로 얽히면 문제는 더 심각해짐 > 버전 번호를 어떻게 정하고 올려야 하는지 규칙 > SemVer
- **버전의 첫번째 자리** : major 버전 > 0이면 초기 개발 중, 1부터는 정식 버전, major 버전은 하위 호환이 안될 정도로 패키지의 내용이 수정되었을 때 올립니다.
- ex. 1.5.0 > 2.0.0 : 1.5.0 버전 패키지를 사용하던 사람들이 2.0.0으로 업데이트했을때 에러 발생할 확률 ↑
- **버전의 두번째 자리** : minor 버전 > 하위 호환이 되는 기능 업데이트를 할때 올립니다.
- ex. 1.5.0 > 1.6.0 : 1.5.0 사용자가 1.6.0으로 업데이트 했을 때 아무 문제 없어야 된다.
- **버전의 세번째 자리** : patch 버전 > 새로운 기능이 추가되었다기보다는 기존 기능에 문제가 있어 수정한 것을 내놓았을 때 patch 버전을 올립니다. (간단한 버그 수정)
- ex. 1.5.0 > 1.5.1 : 업데이트 후 아무 문제 없어야 한다
- 또, ^ 이나 ~또는 >,< 같은 문자가 붙어있는데 이 문자는 버전에는 포함되지 않지만 설치하거나 업데이트할때 어떤 버전을 설치해야하는지 알립니다.
- **^** : minor 버전까지만 설치하거나 업데이트
- ex. npm i express@^1.1.1 : 1.1.1 이상부터 2.0.0 미만 버전까지 설치, **1.x.x** 같이 표현 가능
- **~** : patch 버전까지만 설치하거나 업데이트
- ex. npm i express@~1.1.1 : 1.1.1 이상부터 1.2.0 미만 버전까지 설치, **1.1.x** 같이 표현 가능, ~보다 ^이 많이 사용되는 이유는 minor까지는 하위 호환이 보장
- **>,<,>=,<=,=** : 알기 쉽게 초과, 미만, 이상, 동일을 뜻합니다.
- ex. npm i express@>1.1.1 : 1.1.1 버전보다 높은 버전이 설치
- 추가적으로 **@latest** 도 사용하는데, 안정된 최신 버전의 패키지를 설치, x로도 표현 가능
- npm i express@latest / npm i express@x
- **@next** : 가장 최근 배포판 사용, @latest와 다른점은 안정되지 않은 알파나 베타 버전의 패키지가 설치될 수도 있음

#### 기타 npm 명령어

- npm으로 설치한 패키지를 사용하다 보면 새로운 기능이 추가되거나 버그를 고친 새로운 버전이 나올 때가 있습니다.
- **npm outdated** : 업데이트할 수 있는 패키지가 있는지 확인
- current와 wanted가 다르면 업데이트가 필요한 경우 > **npm update [패키지명]** > 업데이트 가능한 모든 패키지가 wanted에 적힌 버전으로 업데이트 > Latest는 해당 패키지의 최신 버전이지만 package.json에 적힌 버전 범위가 다르면 설치되지 않는다.
- **npm uninstall [패키지명]** > 해당 패키지를 제거하는 명령어 > node_modules 폴더와 package.json에서 사라집니다. > 줄여쓰기 : **npm rm [패키지명]**
- **npm search [검색어]** : npm의 패키지를 검색 > 윈도나 맥에서는 npm 공식 사이트(https://npmjs.com)을 통해 검색하면 편리하지만 GUI가 없는 리눅스에서는 이 명령어를 사용해 콘솔로 검색
- **npm info [패키지명]** : 패키지의 세부 정보를 파악하고자할떄 사용 > package.json의 내용과 의존 관계, 설치 가능한 버전 정보 표시
- **npm adduser** : npm 로그인을 위한 명령어 > npm 공식 사이트에서 가입한 계정으로 로그인 > 나중에 패키지를 배포할 때 로그인 필요 > 패키지를 배포하지 않을 것이라면 가입할 필요는 X
- **npm whoami** : 로그인한 사용자가 누구인지 알립니다. 로그인된 상태가 아니라면 에러 발생
- **npm logout** : npm adduser로 로그인한 계정을 로그아웃할때 사용
- **npm version [버전]** : package.json의 버전을 올립니다. 원하는 버전의 숫자를 넣으면 됩니다. 또는 major, minor, patch 라는 문자열을 넣어 해당 부분의 숫자를 1올릴수도 있습니다.
- **npm dprecate [패키지명] [버전] [메시지]** : 해당 패키지를 설치할때 경고 메시지를 띄우게하는 명령어 > 자신의 패키지에만 이 명령어 적용 가능 > deprecated 처릴 해두면 다른 사용자들이 버그가 있는 버전의 패키지를 설치할때 경고 메시지 출력
- **npm publish** : 자신의 만든 패키지를 배포할 때 사용 , 다음 절에서 사용
- **npm unpublish** : 배포한 패키지를 제거할 때 사용 > 24시간 이내에 배포한 패키지만 제거 가능 > 의존성 관계 때문(다른 사람이 사용하고 있는 패키지를 제거하는 경우를 막기 위해)
- **npm ci** : package.json 대신 package-lock.json에 기반하여 패키지를 설치 > 더 엄격하게 버전을 통제하여 패키지를 설치하고 싶을 때 사용

#### 패키지 배포하기

- package.json의 main 부분의 파일명과 일치해야 한다. 그래야 np에서 이 파일이 패키지의 진입점임을 알 수 있다.
- **npm publish** : 패키지를 배포
- 하지만, npmtest라는 이름을 사용하고 있어 오류 발생 > 이름이 겹치는 것을 허용하지 않음
- 원하는 이름이 이미 사용중이라면 > npm owner ls [패키지명] 으로 해당 패키지 제작자의 이메일을 확인하여 문의를 보내도 된다 or CC(참조)로 support@npmjs.com을 지정하면 npm 지원팀에 의해 해결도 가능하다.

- npm info [패키지명]을 통해 이름을 사용하고 있는지 확인 가능
- npm unpublish [패키지명] --force : 배포한 패키지 삭제 > 72시간이 지나면 삭제 불가능

### 6. 익스프레스 웹 서버 만들기

- 익스프레스 : http 모듈의 요청과 응답 객체에 추가 기능들을 부여, 기존 메서드들도 계속 사용할 수 있지만 편리한 메서드들을 추가하여 보완
- 코드를 분리하기 쉽게 만들어 관리하기도 용이
- 더이상 if문으로 요청 메서드와 주소를 구별하지 않아도 된다.

##### 웹 서버 프레임워크

- 익스프레스 외에도 koa나 hapi 같은 웹서버 프레임워크가 존재
- npm 패키지의 다운로드 수를 비교 : npmtrends(http://www.npmtrends.com/)

#### 익스프레스 프로젝트 시작하기

ex. **BackEnd\6. 익스프레스 웹 서버 만들기\익스프레스 프로젝트 시작하기\package.json&app.js&index.html**

- scripts 부분에 start 속성은 필수 > nodemon app을 하면 app.js를 nodemon으로 실행 > 서버 코드에 수정 사항이 생길때마다 매번 서버를 재시작하는 것이 아닌 nodemon 모듈로 서버를 자동으로 재시작, nodemon이 실행되는 콘솔에 rs를 입력하여 수동으로 재시작할수도 있음
- nodemon은 개발용으로 사용하는 것을 권장 > 배포 후에는 서버 코드가 빈번하게 변경될일이 X
- Express 내부에 http 모듈이 내장 > 서버 역할 가능
- **app.set('port', 포트)** : 서버가 실행될 포트를 설정 , process.env 객체에 PORT 속성이 있다면 그값을 사용하고, 없다면 기본 값으로 3000포트를 이용, 이렇게 app.set(키, 값)을 사용하여 데이터를 저장 > 나중에 데이터를 app.get(키)를 통해 가져올 수있음
- **app.get(주소, 라우터)** : 주소에 대한 GET 요청이 올때 어떤 동작을 할지 적는 부분, 매개변수 req는 요청에 관한 정보가 들어 있는 객체, res는 응답에 관한 정보가 들어있는 객체, 현재 GET / 요청시 응답으로 Hello, Express를 전송, **익스프레스에서는 res.write나 res.end 대신 res.send 사용**
- GET 요청 외에도 POST, PUT, PATCH, DELETE, OPTIONS에 대한 라우터를 위한 app.post, app.put, app.patch. app.delete, app.options 메서드가 존재
- listen을 하는 부분은 http 웹서버와 동일
- 단순한 문자열 대신 HTML로 응답하고 싶다면 res.sendFile 메서드를 사용 > 단 파일의 경로를 path 모듈을 사용해서 지정

#### 자주 사용하는 미들웨어

- 익스프레스의 핵심은 미들웨어 인데 요청과 응답의 중간(middle)에 위치하여 미들웨어라고 부른다.
- 뒤에 나오는 라우터와 에러 핸들러 또한 미들웨어의 일종
- 미들웨어는 요청과 응답을 조작하여 기능을 추가하기도하고, 나쁜 요청을 걸러내기도 한다
- **app.use(미들웨어)** : 익스프레스 서버에 미들웨어 연결

ex. **BackEnd\6. 익스프레스 웹 서버 만들기\자주 사용하는 미들웨어\app.js**

```javascript
//...
app.set("port", process.env.PORT || 3000);

app.use((req, res, next) => {
  console.log("모든 요청에 다 실행됩니다.");
  next();
});
app.get(
  "/",
  (req, res, next) => {
    console.log("GET / 요청에서만 실행됩니다.");
    next();
  },
  (req, res) => {
    throw new Error("에러는 에러 처리 미들웨어로 갑니다.");
  }
);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  //...
});
//...
```

- app.use에 매개변수가 req,res,next인 함수를 넣으면 됩니다. 미들웨어는 위에서부터 아래로 순서대로 실행되면서 요청과 응답 사이에 특별한 기능을 추가할 수 있습니다. 이번에는 next라는 세번째 매개변수를 사용했는데, 다음 미들웨어로 넘어가는 함수, next를 실행하지 않으면 다음 미들웨어가 실행되지 X
- 주소를 첫번째 인수로 넣어주지 않는다면 미들웨어는 모든 요청에서 실행되고, 주소를 넣는다면 해당하는 요청에서만 실행
- ex. app.use(미들웨어) : 모든 요청에서 미들웨어 실행
- ex. app.use('/abc',미들웨어) : abc로 시작하는 요청에서 미들웨어 실행
- ex. app.post('/abc', 미들웨어) : abc로 시작하는 post 요청에서 미들웨어 실행
- app.use나 app.get 같은 라우터에 미들웨어 여러개 장착 가능 현재 app.get 라우터에 미들웨어 두개가 연결, 다만 이때도 next를 호출해야 다음 미들웨어로 넘어갈 수 있습니다.
- 현재 app.get('/')의 두번째 미들웨어에서 에러가 발생하고, 이 에러는 그 아래에 있는 에러처리 미들웨어에 전달
- 에러처리 미들웨어는 매개변수가 err, req, res, next로 4개, **모든 매개변수를 사용하지 않더라도 매개변수가 반드시 4개**
- 첫 번째 매개변수 err에는 에러에 관한 정보, res.status 메서드로 HTTP 상태 코드를 지정, 기본 값은 200(성공)
- 에러 처리 미들웨어를 연결하지 않아도 기본적으로 익스프레스가 에러를 처리하긴 하지만 실무에서는 직접 에러 처리 미들웨어를 만드는 것이 좋다. 특별한 경��가 아니라면 가장 아래에 위치
- **npm i morgan cookie-parser express-session dotenv** : 실무에서 자주 사용하는 패키지들, dotenv(process.env를 관리하기 위한)를 제외한 다른 패키지는 미들웨어

```javascript
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);
```

- .env 파일도 생성, 파일명이 .env이고 확장자는 없습니다.
- 설치했던 패키지들을 app.use에 연결, req,res,next가 보이지 않지만 미들웨어 내부에 들어 있어 다음 미들웨어로 넘어갈 수 있다.
- **dotenv 패키지** : .env 파일을 읽어 prcess.env로 만듭니다. dot(점)+env, process.env.COOKIE_SECRET에 cookiesecret 값이 할당 키=값 형식으로 추가
- process.env를 별도의 파일로 관리하는 이유는 보안과 설정의 편의성 때문, 비밀 키들을 소스코드에 그대로 적어두면 소스코드가 유출되었을 때 키도 같이 유출 따라서, .env 같은 별도의 파일에 비밀 키를 적어두고 dotenv 패키지로 비밀 키를 로딩하는 방식으로 관리
- 소스코드가 유출되더라도 .env 파일만 잘 관리하면 비밀키를 지킬수있다.

##### morgan

- morgan 연결 후 localhost:3000에 접속해보면 기존 로그 외에 추가적인 로그를 확인할 수 있다.
- ex. GET / 500 7.409ms - 50 : [HTTP 메서드] [주소] [HTTP 상태 코드] [응답 속도] - [응답 바이트] > 요청과 응답을 한눈에 볼 수 있어 편리
- **app.use(morgan('dev'));** 처럼 사용, 인수로 combined, common, short, tiny 등을 넣을 수 있습니다. 인수를 바꾸면 로그가 달라진다, 개발 환경에서는 dev를 배포 환경에서는 combined를 사용

##### static

- 정적인 파일들을 제공하는 라우터 역할, 기본적으로 제공되기에 따로 설치할 필요 없이 express 객체 안에서 꺼내 사용하면 된다.
- **app.use('요청 경로',express.static('실제 경로'));**
- ex. app.use('/', express.static(path.join(\_\_dirname, 'public')));
- 함수의 인수로 정적파일들이 담겨 있는 폴더를 지정, 예시에서는 public 폴더가 지정
- ex. **public/stylesheets/style.css는 http://localhost:3000/stylesheets/style.css로 접근**
- public 폴더를 만들고 css나 js, 이미지 파일들을 public 폴더에 넣으면 브라우저에서 접근 가능
- 실제 서버의 폴더 경로에는 public이 들어 있지만, 요청 주소에는 public이 들어있지 않다 > 서버의 폴더 경로와 요청 경로가 다르므로 외부인이 서버의 구조를 쉽게 파악할 수 없습니다. > 보안에 큰 도움
- 또한, 정적 파일들을 알아서 제공해주므로 4.3절처럼 fs.readFile로 파일을 직접 읽어서 전송할 필요 X
- 만약 요청 경로에 해당하는 파일이 없으면 알아서 내부적으로 next를 호출
- 만약 파일을 발견했다면 다음 미들웨어는 실행되지 않습니다. 응답으로 파일을 보내고 next를 호출하지 X

##### body-parser

- 요청의 본문에 있는 데이터를 해석해서 req.body 객체로 만들어주는 미들웨어
- 보통 폼 데이터나 AJAX 요청의 데이터를 처리
- 단 멀티파트(이미지, 동영상, 파일) 데이터는 처리하지 못합니다 > 그 경우 뒤에는 multer 모듈 사용
- **app.use(express.json());**
- **app.use(express.urlencoded({extended:false}));**
- 다른 책이나 코드에서 body-parser를 설치하지만 익스프레스 4.16.0 버전부터 body-parser 미들웨어 기능이 익스프레스에 내장
- 단 body-parser는 JSON과 URL-encoded 형식의 데이터 외에도 Raw(요청의 본문이 버퍼 데이터), Text(텍스트 데0이터) 형식의 데이터를 추가로 해석할수 있는데 Raw, Text 요청을 처리할 필요가 있다면 body-parser 설치한 후 아래와 같이 추가

1. npm i body-parser
2. const bodyParser = require('body-parser');
3. app.user(bodyParser.raw());
4. app.user(bodyParser.text());

- 요청 데이터의 종류

1. JSON : JSON 형식의 데이터 전달 방식
2. URL-encoded : 주소 형식으로 데이터를 보내는 방식, 폼 전송할때 주로 사용

- urlencoded 메서드를 보면 {extended : false} 옵션이 들어있는데 이 옵션이 false면 노드의 querystring 모듈을 사용하여 쿼리스트링을 해석하면, true면 qs 모듈을 사용하여 쿼리스트링을 해석
- qs 모듈은 내장 모듈이 아니라 npm 패키지이며, querystring 모듈의 기능을 좀더 확장한 모듈
- 4.2 절의 POST와 PUT 요청의 본문을 전달 받으려면 req.on('data'), req.on('end')로 스트림을 사용해야 했지만 body-parser를 사용하면 내부적으로 스트림을 처리해 req.body에 추가
- ex. JSON 형식으로 {name:'zerocho', book:'nodejs'}를 본문으로 보낸다면 req.body에 그대로 들어가 URL-encoded 형식으로 name=zerocho&book=nodejs를 보문으로 보낸다면 req.body에 {name:'zerocho',book:'nodejs'} 가 들어갑니다.

##### cookie-parser

- 요청에 동봉된 쿠키를 해석해 req.cookies 객체로 만듭니다 > 4.3절의 parseCookies 함수와 비슷한 기능
- **app.use(cookieParser(비밀키));**
- 해석된 쿠키들은 req.cookies 객체에 들어갑니다.
- ex. name=zerocho 쿠키를 보냈다면 req.cookies는 {name:'zerocho'}가 됩니다. 유효기간이 지난 쿠키는 알아서 걸러냅니다.
- 첫번째 인수로 비밀키를 넣어주는데 서명된 쿠키가 있는 경우, 제공한 비밀키를 통해 해당 쿠키가 내 서버가 만든 쿠키임을 검증 가능하다.
- 쿠키는 클라이언트에서 위조하기 쉬우므로 비밀 키를 통해 만들어낸 서명을 쿠키 값 뒤에 붙입니다. 서명이 붙으면 쿠키가 name=zerocho.sign과 같은 모양이 됩니다.
- 서명된 쿠키는 req.cookies 대신 req.signedCookieds 객체에 들어 있습니다.
- **쿠키 생성/제거** : req.cookie, res.clearCookie 메서드를 사용
- res.cookie(키, 값, 옵션) 형식으로 쿠키 생성 > 옵션은 4.3절 쿠키 옵션과 동일 > domain, expires, httpOnly, maxAge, path, secure 등이 존재

```javascript
res.cookie("name", "zerocho", {
  expires: new Date(Date.now() + 900000),
  httpOnly: true,
  secure: true,
});
res.clearCookie("name", "zerocho", { httpOnly: true, secure: true });
```

- 쿠키를 지우려면, 키와 값 외에 옵션도 정확히 일치해야 지워집니다. 단 expires나 maxAge 옵션은 일치할 필요 X
- 옵션 중에 signed라는 옵션이 있는데, 이를 true로 설정하면 쿠키 뒤에 서명이 붙습니다.
- 내 서버가 쿠키를 만들었다는 것을 검증할 수 있으므로 대부분의 경우 서명 옵션을 켜두는 것이 좋습니다.
- 서명을 위한 비밀 키는 cookieParser 미들웨어에 인수로 넣은 process.env.COOKIE_SECRET이 됩니다.

##### express-session

- 세션 관리용 미들웨어, 로그인 등의 이유로 세션을 구현하거나 특정 사용자를 위한 데이터를 임시적으로 저장할때 매우 유용
- 세션은 사용자별로 req.session 객체 안에 유지

```javascript
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);
```

- express-session 1.5 버전 이전에는 내부적으로 cookie-parser를 사용하고 있어 cooke-parser 미들웨어보다 뒤에 위치해야 했지만, 1.5버전 이후에는 사용하지 않게되어 순서가 상관 X
- 그래도 cooke-parser 미들웨어 뒤에 놓는 것이 안전
- express-session은 인수로 세션에 대한 설정을 받습니다. **resave**는 요청이 올 때 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장할지 설정, **saveUninitialized**는 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
- express-session은 세션 관리 시 클라이언트에 쿠키를 보냅니다. > 4.3절 세션/쿠키
- 안전하게 쿠키를 전송하려면 쿠키에 서명을 추가, 쿠키를 서명하는데 secret의 값이 필요 > cookie-parser의 secret과 같게 설정하는 것이 좋다 > 세션 쿠키의 이름은 name 옵션으로 설정, 기본 이름은 connect.sid
- cookie 옵션은 세션 쿠키에 대한 설정, 일반적인 쿠키 옵션 모두 제공되며 예제에서는 secure는 false로 https가 아닌 환경에서도 사용할 수 있게 하고, httpOnly를 true로 설정해 클라이언트에서 쿠키를 확인하지 못하도록 하였습니다.
- 배포시에는 https를 적용하고 secure도 true로 설정하는 것이 좋습니다.
- 예제 코드에서 나와있지는않지만 **store**라는 옵션도 있습니다. 현재는 메모리에 세션을 저장하도록 되어 있는데 서버를 재시작하면 메모리가 초기화 되어 세션이 모두 사라져 문제가 생깁니다. 따라서 배포 시에는 store에 데이터베이스를 연결하여 세션을 유지하는 것이 좋습니다. > 보통 레디스가 자주 사용

```javascript
req.session.name = "zerocho"; //세션 등록
req.sessionID; //세션 아이디 확인
req.session.destroy(); //세션 모두 제거
```

- express-session으로 만들어진 req.session 객체에 값을 대입하거나 삭제해서 세션을 변경할수 있습니다.
- 세션을 강제로 저장하기 위해 req.session.save라는 메서드가 존재하지만, 일반적으로 요청이 끝날 때 자동으로 호출되므로 직접 save 메서드를 호출할 일은 없습니다.
- 실제 로그인은 9.3절에서 하지만, 세션 쿠키의 모양이 조금 독특하니 미리 미리 알아두면 좋습니다.
- express-session에서 서명한 쿠키 앞에는 **s:** 이 붙습니다. 실제로는 encodeURIComponent 함수가 실행되어 **s%3A** 가 됩니다.
- 앞에 **S%3A** 가 붙은 경우 이 쿠키가 express-session 미들웨어에 의해 암호화된 것이라고 생각

##### 미들웨어의 특성 활용하기(지금까지 내용 정리)

```javascript
app.use((req,res,next)=>{
  console.log('모든 요청에 다 실행됩니다.);
  next();
});
```

- 미들 웨어는 req,res,next를 매개변수로 가진 함수(에러 처리 미들웨어만 예외적으로 err,req,res,next를 가집니다.)로서 app.use나 app.get, app.post 등으로 장착
- 특정 주소의 요청에만 미들웨어가 실행되게 하려면 첫 번째 인수로 주소를 넣으면 됩니다.

```javascript
app.use(
  morgan("dev"),
  express.static("/", path.join(__dirname, "public")),
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(process.env.COOKIE_SECRET)
);
```

- 위와 같이 동시에 여러 개의 미들웨어를 장착할 수도 있으며 다음 미들웨어로 넘어가려면 next함수를 호출
- 위 미들웨어들은 내부적으로 next를 호출하고 있으므로 연달아 사용 가능
- next를 사용하지 않는 미들웨어는 res.send나 res.sendFile 등의 메서드로 응답을 보내야 한다 ex. express.static : next 대신 res.sendFile 메서드로 응답 보냄
- 따라서 정적파일을 제공하는 경우 express.json, express.urlencoded, cookieParser 미들웨어는 실행X
- 미들웨어 장착 순서에 따라 어떤 미들웨어는 실행되지 않을 수도 있다
- 만약 next도 호출하지 않고 응답도 보내지 않으면 클라이언트는 응답을 받지 못해 하염없이 기다린다
  <br>
  <img src="https://user-images.githubusercontent.com/41010744/103878204-72fabf80-5119-11eb-8075-d40c26f50e6d.png">
  <br>

- 지금까지는 next 인수를 넣지 않았지만 인수를 넣는다면 특수한 동작 > route라는 문자열 넣으면 다음 라우터의 미들웨어로 바로 이동, 그외의 인수(에러 처리 미들웨어의 err 매개변수)를 넣으면 바로 에러처리 미들웨어로 이동
- 미들웨어 간에 데이터를 전달하는 방법도 있습니다. 세션을 사용한다면 req.session 객체에 데이터를 넣어도 되지만, 세션이 유지되는 동안 데이터도 계속 유지된다는 단점이 있습니다. 만약 요청이 끝날때까지만 데이터를 유지하고 싶다면 req 객체에 데이터를 넣어두면 됩니다.

```javascript
app.use(
  (req, res, next) => {
    req.data = "데이터 넣기";
    next();
  },
  (req, res, next) => {
    console.log(req.data); //데이터 받기
    next();
  }
);
```

- 현재 요청이 처리되는 동안 req.data를 통해 미들웨어 간에 데이터를 공유, 새로운 요청이 오면 req.data는 초기화
- 속성명이 꼭 data일 필요는 없지만 다른 미들웨어와 겹치지 않게 조심
- ex. 속성명을 body로 한다면(req.body) body-parser 미들웨어와 기능이 겹치게 된다.

##### app.set과의 차이

- app.set으로 익스프레스에서 데이터를 저장할 수 있다는 것을 배웠습니다.
- app.get 또는 req.app.get으로 어디서든지 데이터를 가져올수 있지만 req 객체에 데이터를 넣어 다음 미들웨어로 전달하는 이유는 app.set은 익스프레스에서 전역으로 사용되기 때문에 사용자 개개인의 값을 넣기에는 부적절하며, 앱 전체의 설정을 공유할때 사용
- req 객체는 요청을 보낸 사용자 개개인에게 귀속되므로 req 객체를 통해 개인의 데이터를 전달하는 것이 좋습니다.

##### 미들웨어를 사용할 때 유용한 패턴

- 미들웨어 안에 미들웨어를 넣는 방식

```javascript
app.use(morgan("dev"));
// 또는
app.user((req, res, next) => {
  morgan("dev")(req, res, next);
});
```

- 이 패턴이 유용한 이유는 기존의 미들웨어 기능을 확장할 수 있기 때문이다.
- 예를 들어 다음과 같이 분기 처리를 할 수도 있습니다. 조건문에 따라 다른 미들웨어를 적용하는 코드

```javascript
app.use((req, res, next) => {
  if (process.env.NODE_ENV == "production") {
    morgan("combined")(req, res, next);
  } else {
    morgan("dev")(req, res, next);
  }
});
```

##### multer

- 사용 방법이 다소 어려운 미들웨어
- 이미지, 동영상 등을 비롯한 여러 가지 파일들을 멀티파트 형식으로 업로드 할때 사용하는 미들웨어
- **멀티파트** : enctype이 multipart/form-data인 폼을 통해 업로드하는 데이터의 형식

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="image" />
  <input type="text" name="title" />
</form>
```

- 다음과 같이 html파일의 form 형태의 데이터를 업로드
- 멀티파트 형식으로 업로드하는 데이터는 개발자 도구 _network_ 탭에서 확인 가능하다.
- 이러한 폼을 통해 업로드하는 파일은 body-parser로 처리할 수 없고 직접 파싱(해석)하기도 어려우므로 multer 미들웨어를 따로 사용하면 편리

```javascript
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
```

- multer 함수의 인수로 설정을 넣습니다.
- storage : 어디에(destination) 어떤 이름으로(filename) 저장할지를 넣습니다. destination과 filename 함수의 req 매개변수에는 요청에 대한 정보가, file 객체에는 업로드한 파일에 대한 정보가 있습니다. done 매개변수는 함수입니다.
- 첫 번째 인수에는 에러가 있다면 에러를 넣고, 두번째 인수에는 실제 경로나 파일 이름을 넣어주면 됩니다. req나 file의 데이터를 가공해 done으로 넘기는 형식
- 현재 설정으로는 uploads 라는 폴더에 [파일명+현재시간.확장자] 파일명으로 업로드하고 있습니다. 현재 시간을 넣어주는 이유는 업로드하는 파일명이 겹치는 것을 막기 위해서 입니다.
- limits 속성에는 업로드에 대한 제한 사항을 설정할 수 있습니다. 파일 사이즈(fileSize, 바이트 단위)는 5MB로 제한해두었습니다.
- 다만 위 설정을 실제로 활요하기 위해서는 서버에 uploads 폴더가 꼭 존재해야합니다. 없다면 직접 만들어주거나 fs 모듈을 사용해 서버를 시작할때 생성합니다.

```javascript
const fs = require("fs");

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}
```

- 설정이 끝나면 upload 변수가 생기는데 여기에 다양한 종류의 미들웨어가 들어 있습니다.
- 먼저 파일을 하나만 업로드하는 경우(multipart.html과 같은 경우)에는 single 미들웨어를 사용합니다.

```javascript
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file, req.body);
  res.send("ok");
});
```

- single 미들웨어를 라우터 미들웨어 앞에 넣어두면, multer 설정에 따라 파일 업로드 후 req.file 객체가 생성
- 인수는 input 태그의 name이나 폼 데이터의 키와 일치하게 넣으면 됩니다.
- 업로드 성공 결과는 req.file 객체 안에 들어 있습니다.
- req.body에는 파일이 아닌 데이터인 title이 들어 있습니다.
- ex. req.file 객체

```javascript
{
  fieldname : 'img',
  originalname : 'nodejs.png',
  encoding : '7bit',
  mimetype : 'image/png',
  destination : 'uploads/',
  filename : 'nodejs1514197844339.png',
  path: 'uploads\\nodejs1514197844339.png',
  size : 53357
}
```

- 여러 파일을 업로드 하는 경우 HTML의 input 태그에 multiple을 사용

```html
<form id="form" action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="many" multiple />
  <input type="text" name="title" />
  <button type="submit">업로드</button>
</form>
```

- 미들웨어는 single 대신 array로 교체

```javascript
app.post("/upload", upload.array("many"), (req, res) => {
  console.log(req.files, req.body);
  res.send("ok");
});
```

- 업로드 결과도 req.file 대신 req.files 배열에 들어 있습니다.
- 파일을 여러개 업로드 하지만 input 태그나 폼 데이터의 키가 다른 경우 fields 미들웨어를 사용

```html
<form id="form" action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="image1" />
  <input type="file" name="image2" />
  <input type="text" name="title" />
  <button type="submit">업로드</button>
</form>
```

- fields 미들웨어의 인수로 input 태그의 name을 각각 적습니다.

```javascript
app.post(
  "/upload",
  upload.fields([{ name: "image1" }, { name: "image2" }]),
  (req, res) => {
    console.log(req.files, req.body);
    res.send("ok");
  }
);
```

- 업로드 결과도 req.files.image1, req.files.image2에 각각 존재
- 특수한 경우지만 파일을 업로드하지않고 멀티파트형식으로 업로드하는 경우가 있습니다. 그럴 때는 none 미들웨어를 사용

```html
<form id="form" action="/upload" method="post" enctype="multipart/form-data">
  <input type="text" name="title" />
  <button type="submit">업로드</button>
</form>
```

```javascript
app.post("/upload", upload.none(), (req, res) => {
  console.log(req.body);
  res.send("ok");
});
```

- 파일을 업로드하지 않았으므로 req.body만 존재
- ex. **BackEnd\6. 익스프레스 웹 서버 만들기\자주 사용하는 미들웨어\app.js&multipart.html**

#### Router 객체로 라우팅 분리하기

- 4.2절에서 라우터를 만들 때는 요청 메서드와 주소별로 분기 처리를 하느라 코드가 매우 복잡하고, if문으로 분기하고 코딩하여 보기에도 좋지 않고 확장하기도 어려웠습니다.
- 익스프레스를 사용한느 이유 중 하나는 라우팅을 깔끔하게 관리할 수 있다는 점입니다.
- **라우팅(routing)** : 어떤 네트워크 안에서 통신 데이터를 보낼 때 최적의 경로를 선택
- ex. **BackEnd\6. 익스프레스 웹 서버 만들기\Router객체로 라우팅 분리하기\routes\index.js&&user.js**
- 라우터를 많이 연결하면 app.js 코드가 매우 길어지므로 익스프레스에서는 라우터를 분리할 수 있는 방법을 제공합니다. > routes 폴더를 만들고 그 안에 분리한 라우터를 작성
- 만들었던 index.js와 user.js를 app.use를 통해 app.js에 연결, 또한 에러 처리 미들웨어 위에 404 상태 코드를 응답하는 미들웨어를 추가
- ex. **BackEnd\6. 익스프레스 웹 서버 만들기\Router객체로 라우팅 분리하기\routes\app.js**

```javascript
const indexRouter = require("./routes");
const userRouter = require("./routes/user");
//....
app.use("/", indexRouter);
app.use("/user", userRouter);
```

- indexRouter를 ./routes로 require할 수 있는 이유는 index.js는 생략 가능
- ex. require('./routes/index.js')와 require('./routes')는 같다
- index.js와 user.js 모양이 거의 비슷하지만, 다른 주소의 라우터 역할을 하고 있습니다.
- app.use로 연결할 때의 차이 때문인데 indexRouter는 app.use('/')에 연결했고, userRouter는 app.user('/user')에 연결했습니다.
- indexRouter는 user의 '/'와 get의 '/'가 합쳐져 GET/ 라우터가 되었고, userRouter는 user의 '/user'와 get의 '/'가 합쳐져 GET/user 라우터가 되었습니다.
- 이렇게 app.use로 연결할 때 주소가 합쳐진다는 것을 염두에 두면 됩니다.

```javascript
router.get(
  "/",
  function (req, res, next) {
    next("route");
  },
  function (req, res, next) {
    console.log("실행되지 않습니다");
  }
);
router.get("/", function (req, res) {
  console.log("실행됩니다");
  res.send("hello, express");
});
```

- next 함수에 다음 라우터로 넘어가는 기능 > next('route') > 라우터에 연결된 나머지 미들웨어들을 건너뛰고 싶을 때 사용
- 위 예제처럼 같은 주소의 라우터를 여러 개 만들어도 됩니다. 라우터가 몇개든 간에 next() 호출하면 다음 미들웨어가 실행

```javascript
router.get("/user/:id", function (req, res) {
  console.log(req.params, req.query);
});
```

- 라우터 주소에는 정규표현식을 비롯한 특수 패턴을 사용 가능 > 여러가지 패턴 중 라우트 매개변수라 불리는 패턴
- 주소에 :id > 다른 값을 넣을수 있다 ex. /user/1, /user/123 요청을 라우터가 처리
- :id에 해당하는 1이나 123을 조회가능하며 req.params 객체 안에 들어있다
- ex. :id면 req.params.id로, :type이면 req.params.type으로 조회 가능
- 단 이패턴을 사용할시 일반 라우터보다 뒤에 위치해야한다 > 다양한 라우터를 아우르는 와일드카드 역할 > 일반 라우터보다는 뒤에 위치해야 다른 라우터를 방해하지 X

```javascript
router.get("/user/:id", function (req, res) {
  console.log("얘만 실행됩니다");
});
router.get("/user/like", function (req, res) {
  console.log("실행되지 않습니다");
});
```

- /user/like 같은 라우터는 /user/:id 같은 라우트 매개변수를 쓰는 라우터보다 뒤에 위치해야 한다
- 주소에 쿼리스트링을 쓸때도 있는데 쿼리스트링의 키-값 정보는 req.query 객체 안에 들어 있다
- ex. /users/123?limit=5&skip=10이라는 주소 요청이 들어왔을 때
- req.params와 req.query객체 > **{id:'123'} {limit:'5', skip:'10'}**

```javascript
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});
```

- app.js에서 에러 처리 미들웨어 위에 넣어둔 미들웨어는 일치하는 라우터가 없을 때 404 상태 코드를 응답하는 역할
- 미들 웨어가 존재하지 않아도 익스프레스가 자체적으로 404 에러를 처리해주기는 하지만 연결해주는 것이 좋다.
- 라우터에서 자주 쓰이는 활용법으로 **app.route와 router.route**가 존재
- 다음과 같이 주소는 같지만 메서드가 다른 코드가 있을 때 이를 하나의 덩어리로 줄일 수 있습니다.

```javascript
router.get("/abc", (req, res) => {
  res.send("GET/abc");
});
router.post("/abc", (req, res) => {
  res.send("POST/abc");
});
```

```javascript
router
  .route("/abc")
  .get((req, res) => {
    res.send("GET/abc");
  })
  .post((req, res) => {
    res.send("POST/abc");
  });
```

#### req, res 객체 살펴보기

- 익스프레스의 req,res 객체는 http 모듈의 req,res 객체를 확장한 것
- 기존 http 모듈의 메서드도 사용할 수 있고, 익스프레스가 추가한 메서드나 속성을 사용할 수 있다
- ex. res.writeHead, res.write, res.end 메서드를 그대로 사용할 수 있으면서 res.send나 res.sendFile 같은 메서드 사용 가능
- 다만, 익스프레스의 메서드가 워낙 편리하기에 기존 http 모듈의 메서드는 잘 사용 X
- 익스프레스가 많은 속성과 메서드를 추가했지만, 여기서는 자주 쓰이는 것 위주로 살펴보기

**req 객체**

- req.app : req 객체를 통해 app 객체에 접근 > req.app.get('port') 식으로 사용 가능
- req.body : body-parser 미들웨어가 만드는 요청의 본문을 해석한 객체
- req.cookies : cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
- req.ip : 요청의 ip 주소가 담겨 있다
- req.params : 라우트 매개변수에 대한 정보가 담긴 객체
- req.query : 쿼리스트링에 대한 정보가 담긴 객체
- req.signedCookies : 서명된 쿠키들은 req.cookies 대신 여기에 담겨 있습니다.
- req.get(헤더 이름) : 헤더의 값을 가져오고 싶을 때 사용하는 메서드

**res 객체**

- res.app : req.app처럼 res 객체를 통해 app 객체에 접근 가능
- res.cookie(키, 값, 옵션) : 쿠키를 설정하는 메서드
- res.clearCookie(키, 값, 옵션) : 쿠키를 제거하는 메서드
- res.end() : 데이터 없이 응답을 보냅니다.
- res.json(JOSN) : JSON 형식의 응답을 보냅니다.
- res.redirect(주소) : 리다이렉트할 주소와 함께 응답을 보냅니다.
- res.render(뷰, 데이터) : 다음절에서 다룰 템플릿 엔진을 렌더링해서 응답할 때 사용하는 메서드
- res.send(데이터) : 데이터와 함께 응답을 보냅니다. 데이터는 문자열일수도 있고 HTML일수도 있으며 버퍼일수도 있고 객체나 배열일수도 있습니다.
- res.sendFile(경로) : 경로에 위치한 파일을 응답합니다.
- res.set(헤더, 값) : 응답의 헤더를 설정
- res.status(코드) : 응답시의 HTTP 상태 코드를 지정

##### 메서드 체이닝

- req나 res 객체의 메서드는 다음과 같이 메서드 체이닝을 지원 > 코드의 양을 줄일수 있다

```javascript
res.status(201).cookie("test", "test").redirect("/admin");
```

#### 템플릿 엔진 사용하기

- HTML은 정적인 언어이기 때문에 주어진 기능만 사용할 수 있고, 사용자가 기능을 직접 추가 불가능
- HTML로 1000개의 데이터를 모두 표현하고 싶다면 일일이 코딩해서 넣어야 합니다 > JS로 표현하면 반복문으로 간단하게 처리
- 템플릿 엔진은 자바스크립트를 사용해서 HTML을 렌더링 가능하게 > 따라서 기존 HTML과는 문법이 살짝 다르기도 하고 자바스크립트 문법이 들어 있기도 합니다.
- **대표적인 템플릿 엔진 : 퍼그(Pug), 넌적스(Nunjucks)** > 앞으로 넌적스 사용

##### 퍼그(제이드)

- 예전 이름인 제이드(Jade)로 유명한 퍼그는 꾸준한 인기 > 문법이 간단하여 코드의 양이 줄음
- 루비(Ruby)와 유사 but, HTML과는 문법이 많이 달라 호불호]
- **npm i pug**
- ex. **BackEnd\6. 익스프레스 웹 서버 만들기\템플릿 엔진 사용하기\퍼그\app.js**

```javascript
//...
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//...
```

- 익스프레스와 연결하려면 app.js에 다음 부분이 들어 있어야 한다.
- views는 템플릿 파일들이 위치한 폴더를 지정하는 것입니다. res.render 메서드가 이 폴더 기준으로 템플릿 엔진을 찾아 렌더링, res.render('index')라면 views/index.pug를 렌더링합니다.
- ex. res.render('admin/main') > views/admin/main.pug를 렌더링합니다.
- view engine은 어떠한 종류의 템플릿 엔진을 사용할지 나타냅니다. 현재 pug로 설정되어 있으므로 그대로 사용하면 됩니다.

**HTML 표현**

- 기존 HTML과 다르게 화살괄호(<>)와 닫는 태그가 없습니다. 탭/스페이스로만 태그의 부모 자식 관계를 규명합니다. 탭 한번, 스페이스 두번/스페이스 네번 모드 상관 없습니다. 모든 파일에 동일한 종류이 들여쓰기를 적용
- 자식 태그는 부모 태그보다 들여쓰기되어 있어야 합니다. 들여쓰기에 오류가 있으면 제대로 렌더링 X
- 화살 괄호가 없으므로 태그의 속성도 태그명 뒤에 소괄호로 묶어 적습니다.

```pug
doctype html
html
  head
    title=title
    link(rel='stylesheet', href='/stylesheets/style.css)
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>익스프레스</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
</html>
```

- 속성 중 아이디와 클래스가 있는 경우 다음과 같이 표현할수 있습니다. div 태그인 경우 div 문자는 생략 가능

```pug
#login-button
.post-image
span#highlight
p.hidden.full
```

```html
<div id="login-button"></div>
<div class="post-image"></div>
<span id="highlight"></span>
<p class="hidden full"></p>
```

- HTML 텍스트는 다음과 같이 태그 또는 속성 뒤에 한칸을 띄고 입력

```pug
p Welcome to Express
button(type='submit') 전송
```

```html
<p>Welcome to Expresss</p>
<button type="submit">전송</button>
```

- 에디터에서 텍스트를 여러 줄 입력하고 싶다면 다음과 같이 파이프(|)를 넣습니다. HTML 코드에서는 한줄로 나옵니다.

```pug
p
  | 안녕하세요.
  | 여러 줄을 입력합니다.
  br
  | 태그도 중간에 넣을 수 있습니다.
```

```html
<p>
  안녕하세요. 여러 줄을 입력합니다.
  <br />
  태그도 중간에 넣을 수 있습니다.
</p>
```

- style이나 script 태그로 CSS/자바스크립트 코드를 작성하고 싶다면 태그 뒤에 점(.)을 붙입니다.

##### HTML 엔티티와 이스케이프

- 자바스크립트 문자열과 HTML 텍스트를 혼용할 때 특수 문자 때문에 가끔 에러 발생
- ex. <strong></strong> 같은 문자열이 있다면 이것을 HTML에 사용했을 때 태그로 오해할 소지
- 이를 방지하기 위해 특수 문자를 HTML 엔티티라는 코드로 변환
- 대표적인 HTML 엔티티
- < : &lt, > : &gt, & : &amp, 띄어쓰기 : &nbsp, " : &quot, ' : &apos

##### 넌적스

- 퍼그의 HTMl 문법 변화에 적응하기 힘든 분에 적합한 템플릿 엔진
- HTML 문법을 그대로 사용하되 추가로 자바스크립트 문법을 사용할수 있다
- **npm i nunjucks**

```javascript
nunjucks.configure("views", {
  express: app,
  watch: true,
});
```

- 퍼그와 연결방법이 다소 다른데 configure의 첫 번째 인수로 views 폴더의 경로를 넣고, 두번째 인수로 옵션을 넣는다. 이때 express 속성에 app 객체를 연결합니다. watch 옵션이 true면 HTML 파일이 변경될 때 템플릿 엔진을 다시 렌더링
- 파일은 퍼그와 같은 특수 확장자 대신 html을 그대로 사용해도 됩니다. 넌적스임을 구분하려면 확장장로 njk를 쓰면 됩니다.
- 단, 이때는 view engine도 njk로 바꿔야 합니다.

**변수**

- res.render 호출 시 보내는 변수를 넌적스가 처리합니다.

```javascript
// routes/index.js
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
```

```html
<h1>{{title}}</h1>
<p>welcome to {{title}}</p>
<button class="{{title}}" type="submit">전송</button>
<input placeholder="{{title}} 연습" />
```

- 내부에 변수를 사용할 수도 있습니다. 변수를 선언할 때는 {%set 변수 = '값' %}

```html
{% set node='Node.js'%} {% set js = 'javascript' %}
<p>{{node}}와 {{js}}</p>
```

- HTML을 이스케이프하고 싶지 않다면 {{변수|safe}}를 사용

```html
<p>{{'<strong>이스케이프</strong>'}}</p>
<p>{{'<strong>이스케이프 하지 않음</strong>' | safe}}</p>
```

```html
<p>&lt;strong&gt;이스케이프&lt;/strong&gt;</p>
<p><strong>이스케이프하지 않음</strong></p>
```

**반복문**

- 넌적스에서는 특수한 구문을 {% %}안에 씁니다. 반복문도 이 안에 넣으면 됩니다.
- for in 문과 endfor 사이에 위치하면 됩니다.

```html
<ul>
  {% set fruits = ['사과','배','오렌지','바나나','복숭아'] %} {% for item in
  fruites %}
  <li>{{item}}</li>
  {% endfor %}
</ul>
```

```html
<ul>
  <li>사과</li>
  //...
  <li>복숭아</li>
</ul>
```

- 반복문에서 인덱스를 사용하고 싶다면 loop.index라는 특수한 변수를 사용

```html
<ul>
  {% set fruits = ['사과','배','오렌지','바나나','복숭아'] %} {% for item in
  fruites %}
  <li>{{loop.index}}번째 {{item}}</li>
  {% endfor %}
</ul>
```

**조건문**

- {% if 변수 %}, {% elif %}, {% else %}, {% endif %}로 이루어져 있습니다.

```html
{% if isLoggedIn %}
<div>로그인 되었습니다.</div>
{% else %}
<div>로그인이 필요합니다.</div>
{% endif %}
```

- case문은 없지만 elif(else if 역할)을 통해 분기처리 가능

```html
{% if fruit == 'apple' %}
<p>사과입니다.</p>
{% elif fruit == 'banana' %}
<p>바나나입니다.</p>
//... {% else %}
<p>사과도 바나나도 아닙니다</p>
<% endif %>
```

- {{}}안에서는 다음과 같이 사용합니다.

```html
<div>{{'참' if isLoogedIn}}</div>
<div>{{'참' if isLoggedIn else '거짓'}}</div>
```

```html
<!-- isLoggedIn이 true일때 -->
<div>참</div>
<!-- isLoggedIn이 false 일때 -->
<div>거짓</div>
```

**include**

- 다른 HTML 파일을 넣을수 있습니다.
- 헤더나 푸터, 내비게이션처럼 웹 제작 시 공통되는 부분을 따로 관리할 수 있어 매 페이지마다 동일한 HTML을 넣어야 하는 번거로움을 없앱니다.
- include 파일 경로

```html
//1. header.html
<header>
  <a href="/">Home</a>
  <a href="/about">About</a>
</header>

//2. footer.html
<footer>
  <div>푸터입니다.</div>
</footer>

//3. main.html {% include "header.html" %}
<main>
  <h1>메인 파일</h1>
  <p>다른 파일을 include할 수 있습니다.</p>
</main>
{% include "footer.html" %}
```

**extends와 block**

- 레이아웃을 정할 수 있습니다. 공통된 레이아웃 부분을 따로 관리할 수 있어 좋습니다. include와도 함께 사용

```html
//1.layout.html
<! DOCTYPE html>
<html>
  <head>
    <title>{{title}}</title>
    <link rel="stylesheet" href="/style.css" />
    {% block style %} {% endblock %}
  </head>
  <body>
    <header>헤더 입니다.</header>
    {% block content %} {% endblock %}
    <footer>푸터 입니다.</footer>
    {% block script %} {% endblock %}
  </body>
</html>
//2. body.html {% extends 'layout.html %} {% block content %}
<main>
  <p>내용입니다.</p>
</main>
{% endblock %} {% block script %}
<script src="/main.js"></script>
{% endblock %}
```

- 레이아웃이 될 파일에는 공통된 마크업을 넣되, 페이지마다 달라지는 부분을 block으로 비워둡니다. block은 여러개 만들어도 됩니다.
- {% block [블록명] %} : 블록 선언 > {% endblock %} : 블록 종료
- block이 될 파일에서는 {% extends 경로 %} 키워드로 레이아웃 파일을 지정하고 block 부분을 넣습니다.
- 나중에 익스프레스에서 res.render('body')를 사용해 하나의 HTML로 합친 후 렌더링 > 같은 이름의 block 부분이 서로 합쳐집니다.

- ex. **BackEnd\6. 익스프레스 웹 서버 만들기\Router객체로 라우팅 분리하기\넌적스\app.js**
- index.html와 error.html은 res.render로부터 title변수와 error변수를 받아 렌더링

##### 에러 처리 미들웨어

- 이제 404 응답 미들웨어와 에러 처리 미들웨어를 다음과 같이 수정하여 에러 발생시 error.html에 에러 내용을 표시

```javascript
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});
```

- 만약 404 에러 발생시 res.locals.message는 '${req.method} ${req.url} 라우터가 없습니다'가 됩니다. next(error)에서 넘겨준 인수가 에러 처리 미들웨어의 err로 연결되기 때문
- 에러 처리 미들웨어는 error라는 템플릿 파일을 렌더링 > 렌더링시 res.locals.message와 re.locals.error에 넣어준 값을 함께 렌더링
- res.render에 변수를 대입하는 것 외에도, 이렇게 res.locals 속성에 값을 대입하여 템플릿 엔진에 변수를 주입 가능
- error 개체의 스택 트레이스(error.html의 error.stack)는 시스템 환경(process.env.NODE_ENV)이 production(배포 환경)이 아닌 경우에만 표시, 배포 환경인 경우 에러 메시지만 표시 > 에러 스택 트레이스가 노출되면 보안에 취약
