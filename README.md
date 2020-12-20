# WebStudy

## HTML

+ ### input : form의 요소 중 하나, 사용자가 정보를 입력하는 부분을 만들어야 할 때 사용
type에 따라 어떤 형식으로 정보를 받을지 결정된다. id 값을 통해 서로 구분할 수 있다
```html
    <input type="유형" 속성="속성값">
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
step | 숫자의 간격 설정, *input이 date, datetime, datetime-local, month, week, time, number, range일 경우만 사용 가능* 
required | 필수 입력 필드 지정 > 빈칸일 시 넘어가지 않음

+ ### font-awesome 
**https://fontawesome.com/**
: 사용하고 싶은 아이콘을 가져다 사용 가능
추가적으로 html 태그에  link 삽입 위의 홈페이지에서 link를 받아서

```html
<div class="scroll-icon-down">
  <a href="#"><i class="fas fa-angle-up"></i></a>
</div>
```
  
-------------------------------------------------------
## JavaScript

+ ### document.getElementById("id")
: 태그안의 ID값을 이용해서 오브젝트에 접근할 수 있다.

ex. id = btn인 object 가져오기
```html
<html>
    <head>
        <meta charset = "utf-8">
        <title>Hello World</title>
    </head>
    <body>
      <input type="button" id="btn" value="button" />
      <script>
        var btn = document.getElementById('btn');
        alert(btn);
      </script>
    </body>
</html>
```
+ ### document.createElment('html 요소')
: 태그안의 html요소를 문서에 추가할 수 있다.

ex. click이라는 텍스트를 가진 button 요소를 추가하는 예제
```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <title>JavaScript</title>
  </head>
  <body>
    <script>
      var jbBtn = document.createElement( 'button' );
      var jbBtnText = document.createTextNode( 'Click' );
      jbBtn.appendChild( jbBtnText );
      document.body.appendChild( jbBtn );
    </script>
  </body>
</html>
```
+ ### innerText
: div 내부 글 p 태그 내부 등 내부의 글을 가져올 때 사용한다. 또는 입력할 때 사용

ex. innerHTML과의 차이
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
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
  innerText : 안녕하세요 ㅎㅎ
  
  innerHTML : 안녕하세요 <span>ㅎㅎ</span>
```

+ ### appendChild()
: 새로운 노드를 해당 노드의 자식 노드 리스트의 맨 마지막에 추가합니다.

ex. 자식 노드 리스트에 추가
```javascript
function appendNode() {

    var parent = document.getElementById("list");  // 아이디가 "list"인 요소를 선택함.

    var newItem = document.getElementById("item"); // 아이디가 "item"인 요소를 선택함.

    parent.appendChild(newItem);                   // 해당 요소의 맨 마지막 자식 노드로 추가함.

}
```
+ ### oncblclick, onclick
: 전자는 더블클릭했을 떄의 후자는 클릭했을 때의 이벤트 처리

```javascript
var listItem = document.createElement('li');
listItem.id = 'li_' + id;
listItem.ondblclick = removeItem;

var checkBox = document.createElement('input');
//checkbox has date id
checkBox.type = 'checkbox';
checkBox.onclick = updateItemStatus;
checkBox.id= 'cb_' + id;
```

+ ### onkeyup()
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

+ ### focus()
: 해당 요소에 포커스를 부여 > 텍스트 창의 경우 커서를 위치시켜 바로 입력

ex. inputText 변수에 focus method 부여
```javascript
var inputText = document.getElementById('inputText');
inputText.focus();
```

+ ### select()
: 해당 이벤트 코드 안에 포커스를 잡아주기 위한 함수로 그 영역을 다시 선택해준다.

+ ### this
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
var Person = function(name){
  console.log(this);
  this.name = name;
};

var foo = new Person('foo');
console.log(foo.name); //foo
```

+ ### String prompt([String message], [String defaultValue])
- 문자열을 입력할 때 사용
- 만약 숫자를 입력 받아야하는 경우 문자열로 입력 받은 뒤 변환
- 첫번째 매개변수는 입력 창에서 띄워줄 메시지
- 두번째 매개변수는 입력 부분의 기본 값

```html
<!DOCTYPE html> 
<html> 
  <head> 
    <meta charset="UTF-8"> 
    <title>prompt</title> 
    <script type="text/javascript"> 
      var inputString = prompt('문자열을 입력하세요', '기본 값 문자열'); alert(inputString);
    </script> 
  </head> 
  
  <body> 

  </body>
</html>
```

+ ### String.replace('String', 'String2')
: String에서 String1을 찾아 String2로 바꾼다.

+ ### HTML 화면에 보이고 안보이게 하게 하기 위한 이벤트
*document.getElmentById().style.display = "none"*
```javascript
function removeItem(){
    var listItemId = this.id.replace('li_','');
    document.getElementById('li_' + listItemId).style.display = "none";
}
```