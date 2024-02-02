// console.log("Hello JavaScript!")



/*
 자바스크립트 언어 기본 사용법
 
 1 변수 이름에서 사용가능한 케이스
 2 주석 다는 방법
 3 세미콜론 
*/


// 1 변수 이름에서 사용 가능한 케이스

// var lowercase // 소문자
// var snake_case // 뱀
// var camelCase // 낙타
// var kebab-case // 닭꼬치는 안됨


// 2 주석다는 방법


// 한줄의 주석

/*
  여러줄의 
  주석
*/


// 3 세미콜론 사용 - 옵션

// var foo = "bar"
// var foo = "bar";


/*
  데이터 타입

  1 String 
  2 Number
  3 Boolean
  4 undefined
  5 null
*/


/*
  String (문자열)

  1 문자열의 값
  2 각 문자에 접근하기
  3 문자의 갯수 구하기
*/


// 1 문자열의 값

// var foo = "bar";

// console.log(foo);
// // bar


// 2 각 문자에 접근하기

// var foo = "bar";

// // 인덱스(index)로 접근
// console.log(foo[0]) // 0 부터 시작
// // b
// console.log(foo[1])
// // a
// console.log(foo[2])
// // r


// 3 문자의 갯수 구하기

// var foo = "bar"

// console.log(foo.length); // length 속성
// 3


// var s = "집에 가고 싶다"
// var s = "벌써 2024년 이라니..☆"

// var s = "I'm John";

// var s = 'hello';

// var s = 'I\'m John'; 
// 주의 - 홑따옴표 안에 홑따옴표, 쌍따옴표 안에 쌍따옴표 
// 불가

// var s = "여러줄의
// 문자열";

// 백틱 (backtick)으로 여러줄 입력 가능
// var s = `여러 줄의
// 문자열`

// console.log(s);


// char 타입 (한글자)
// var c = 'C';
// // 문자열
// var s = "hello world"



/*
  Number 

  1 Number 타입의 값
*/


/*
  1 Number 타입의 값

  1) 정수
  2) 분수
  3) NaN
  4) +Infinity
  5) -Infinity
*/


// 1 정수
// var year = 2023;

// console.log(year);
// // 2023


// var n = -1

// console.log(n);
// // -1


// 2 분수

// var PI = 3.14;

// console.log(PI);
// // 3.14


// 3 NaN (Not a Number)

// var nan = 2 - "foo";

// console.log(nan);
// // NaN


// +Infinity (양의 무한대)


// Number 타입이 저장할 수 있는 가장 큰수
// var max_value = Number.MAX_VALUE;

// console.log(max_value);

// // 양의 무한대
// var infinity = max_value * 1.1;

// console.log(infinity);
// // Infinity


// -Infinity (음의 무한대)

// Number타입이 저장할 수 있는 가장 작은수

// var negative_max_value = -Number.MAX_VALUE;

// console.log(negative_max_value);

// // 음의 무한대
// var negative_infinity = negative_max_value * 1.1;

// console.log(negative_infinity);
// // -Infinity



/*
  4 Boolean
  참 또는 거짓의 값을 가지는 데이터 타입

  1 값
*/


// 값 - true / false

// var bool = true;

// console.log(bool);
// true


// 예시 - 비교 연산
// console.log(1 > 0);
// true


// 0 false
// 1 true



/*
  undefined
  정의되지 않은 변수가 가지는 데이터 타입

  1 값
*/


// 1 값 - undefined

// var foo;

// console.log(foo);
// undefined



/*
  null
  "없음"을 나타내는 데이터타입

  1 값
*/


// 1 값 - null

// 의도적으로 없음을 나타낼 때 쓰인다
// var foo = null;

// console.log(foo);
