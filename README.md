# WebStudy

## HTML

+ <html> : 웹페이지 시작과 끝
+ <! doctype html> : 이 페이지를 html로 해석해라
+ <head> : 웹 페이지의 정보, 문서에서 사용할 외부 파일들을 링크할 때 사용 <title>, <meta>등이 들어간다.
+ <body> : 브라우저에 실제 표시되는 내용
+ <title> : 문서 제목
<title>안의 내용이 웹 브라우저의 제목 표시줄에 표시된다.
페이지를 방문하는 방문자나 검색엔진은 제목 표시줄의 제목을 보고 내용을 예측하기 때문에 잘 사용해야 한다.

+ <div> : 아무런 의미 X, 컨텐츠들을 어떤 목적에 따라 묶어야 할 때 사용
+ <span> : 아무런 의미 X, 컨텐츠들을 어떤 목적에 따라 묶어야 할 때 사용
----------------------------------------------
**<div>와 <span>의 차이**
<div> : block level element > 줄 바꿈 O
<span> : inline level element > 줄 바꿈 X
_display 속성을 사용해서 <div>를 inline으로 <span>을 block으로 바꾸는 것도 가능하다_
----------------------------------------------

+ <script> : 코드 삽입, javascript 코드를 넣을 때 사용한다.
+ <li> : <ul>과 <ol> 안에서 각 항목을 나열할 때 사용
+ <ul> : unordered list, 순서가 없기 때문에 앞에 글자 앞에 ● 같은 불릿이 붙는다
css설정으로 없앨 수 있다 > list-style : none;
+ <ol> : ordered list, <ul>과 달리 앞에 기호가 아닌 숫자나 영문 순서가 들어간다
+ <input> : form의 요소 중 하나, 사용자가 정보를 입력하는 부분을 만들어야 할 때 사용
type에 따라 어떤 형식으로 정보를 받을지 결정된다. id 값을 통해 서로 구분할 수 있다.
```html
    <input type="유형" 속성="속성값">
```    
** <input>의 속성
키워드 | 설명 
------- | -------
 readonly | 읽기 전용 필드로 만들기 
 placeholder | 힌트 표시 > 필드 클릭시 내용 사라짐 
 autofocus | 페이지를 불러오자 마자 특정 부분에 마우스 커서가 표시되도록 하는 것
 autocomplete | 자동완성 설정
 max/min | <input> 필드의 최대값과 최소값 지정
 maxLength | 텍스트 필드에 최대로 입력할 수 있는 문자의 개수 지정
 step | 숫자의 간격 설정, *<input>이 date, datetime, datetime-local, month, week, time, number, range일 경우만 사용 가능* 
 required | 필수 입력 필드 지정 > 빈칸일 시 넘어가지 않음
  
-------------------------------------------------------
## JavaScript

+ document.getElementById("id")
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
+ document.createElment('html 요소')
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
+ innerText
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

+ appendChild()
: 새로운 노드를 해당 노드의 자식 노드 리스트의 맨 마지막에 추가합니다.

ex. 자식 노드 리스트에 추가
```javascript
function appendNode() {

    var parent = document.getElementById("list");  // 아이디가 "list"인 요소를 선택함.

    var newItem = document.getElementById("item"); // 아이디가 "item"인 요소를 선택함.

    parent.appendChild(newItem);                   // 해당 요소의 맨 마지막 자식 노드로 추가함.

}
```
