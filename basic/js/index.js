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


/* 
  Q. 데이터 타입

  다음의 고양이에 대한 정보를 변수로 선언해보세요
  (괄호안은 변수의 이름)

  1 이름 (name)
  값: 치즈
  타입: 문자열

  2 집 (home)
  값: 없음 (길고양이)
  타입: null

  3 나이 (age)
  값: 2살
  타입: Number

  4 귀여움 여부(isCute)
  값: 귀여움
  타입: Boolean
*/

// var (variable, 변수) - 변수 선언 예약어

// var name = "치즈";
// var home = null;
// var age = 2;
// var isCute = true;



/*
  기본 메서드
  데이터에 특정한 작업을 수행한다

  1 문자열 메서드
  2 넘버 메서드
*/


/*
  문자열 메서드

  1 toUpperCase / toLowerCase
  2 indexOf
  3 substring
  4 trim
*/



// 1 toUpperCase() / toLowerCase()
// 문자열의 모든 문자를 대문자/소문자로 변환한다

// var foo = "bar";

// console.log(foo.toUpperCase());
// // BAR


// 2 indexOf(검색할 문자열, 위치(옵션, 기본값은 0))
// 인자 문자열의 인덱스를 리턴(반환)한다

// 인자 - 메서드에 전달되는 데이터

// var s = "hello world";

// console.log(s.indexOf("e"));
// // 1
// console.log(s.indexOf("w"));
// // 6
// console.log(s.indexOf("l"));
// // 2 - 첫번째 l의 인덱스를 리턴한다
// console.log(s.indexOf("l", 5));
// // 9 - world의 l의 인덱스
// console.log(s.indexOf("world"));
// // 6 - 첫번째 문자의 인덱스를 리턴한다
// console.log(s.indexOf("bar"));
// // -1 - 인자 문자열이 존재하지 않을 때


// 3 substring(시작 인덱스, 끝인덱스(옵션))
// 문자열에서 특정 문자들을 추출한다

// var s = "hello world";

// console.log(s.substring(0, 4));
// // hell - 끝인덱스 바로 앞 글자까지 추출한다

// console.log(s.substring(0));
// // hello world - 시작 인덱스부터 전부 추출한다 


// trim()
// 문자열의 앞과 뒤의 공백을 제거한다
// 예) 데이터 정제작업 등


// var foo = "  bar  ";

// console.log(foo);
// //  bar  

// console.log(foo.trim());
// // bar


/*
  Number 메서드

  1 toPrecision
  2 isString
*/


// 1 toPrecision(표현할 숫자의 갯수)
// 숫자의 정밀도를 설정한다

// var PI = Math.PI; // 자바스크립트에 내장된 데이터

// console.log(PI);
// // 3.141592653589793 - 기본적으로 16자리 숫자까지 표현


// var precisePI = PI.toPrecision(100);

// console.log(precisePI); // 정밀도 증가



// 2 toString()
// Number 타입 값을 문자열 타입 값으로 변환한다


// var year = 2023;

// console.log(year);
// // 2023
// console.log(typeof year); // 변수의 타입 리턴
// // number


// var year = 2023;

// console.log(year.toString());
// // "2023"
// console.log(typeof year.toString());
// // string



// Q. 메서드 문제
// Q에서 끝까지 모든 문자를 추출해보세요

// var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// var startIndex = alphabet.indexOf("Q");

// console.log(alphabet.substring(startIndex));
// // QRSTUVWXYZ



/*
  연산자

  1 수리연산자
  2 대입연산자
  3 비교연산자
  4 논리연산자
  5 타입연산자
*/


/*
  수리연산자

  1 4칙 연산자
  2 증가 연산자
  3 감소 연산자
  4 지수 연산자
  5 계수 연산자
*/


// 1 4칙 연산자
// +, -, *, /

// var add = 1 + 1;
// var subtract = 2 - 1;
// var divide = 1 / 2;
// var multiply = 1 * 2;


// console.log("1 + 1 =", add);
// console.log("2 - 1 =", subtract);
// console.log("1 / 2 =", divide);
// console.log("1 * 2 =", multiply)


// 문자열과 +를 사용하는 경우

// var s = "hello" + " world";

// console.log(s);
// // hello world


// 문자열과 숫자를 더하는 경우

// var s = "hello " + 2024;

// console.log(s);
// // "hello 2024"
// console.log(typeof s);
// // string


// 2 증가 연산자
// 변수를 1 증가시킨다

// var n = 1;

// n++; // 증가 연산자

// console.log(n);
// // 2


// 3 감소연산자
// 변수를 1 감소시킨다

// var n = 1;

// n--;

// console.log(n);
// // 0



// 4 지수 연산자
// 기수 ** 지수

// var exp = 2 ** 7;

// console.log(exp);
// 128



// 5 계수(나눗셈의 나머지) 연산자
// 나누어지는수 % 나누는 수

// var mod = 5 % 2;

// console.log(mod);
// // 1



/*
  대입 연산자

  1 변수 대입 연산자
  2 더하기 대입 연산자
  3 빼기 대입 연산자
  4 곱하기 대입 연산자
  5 나누기 대입 연산자
  6 지수 대입 연산자
  7 계수 대입 연산자
*/


// 1 변수 대입 연산자

// var foo = "bar"; // = (변수대입 연산자)


// 2 더하기 대입 연산자

// var n = 1;

// n += 1; // += (더하기 대입 연산자)
// // n = n + 1와 같다

// console.log(n);
// // 2


/*
  비교 연산자

  1 동등 연산자
  2 엄격 동등 연산자
  3 비동등 연산자
  4 엄격 비동등 연산자
  5 gt 연산자
  6 gte 연산자
  7 lt 연산자
  8 lte 연산자
*/


/*
  1 동등 연산자

  표현식1 == 표현식2

  두 표현식이 동등하면 참
  두 표현식이 동등하지 않으면 거짓을 리턴한다
*/


// console.log(1 == 2);
// // false
// console.log("foo" == "bar");
// // false
// console.log(0 == false);
// // true
// console.log(2023 == "2023"); 
// // true


/*
  2 엄격 동등 연산자

  표현식1 === 표현식2

  두 표현식이 엄격하게 동등하면 참
  두 표현식이 엄격하게 동등하지 않으면 거짓을 리턴한다
*/


// console.log(1 === 2); 
// // false
// console.log("foo" === "bar");
// // false
// console.log(0 === false); 
// // false
// console.log(2023 === "2023"); 
// // false


/*
  3 비동등 연산자

  표현식1 != 표현식2

  표현식이 동등하지 않으면 참
  표현식이 동등하면 거짓을 리턴한다
*/


// console.log(1 != 2) 
// // true
// console.log("foo" != "bar");
// // true
// console.log(0 != false);
// // false
// console.log(2023 != "2023");
// // false


/*
  4 엄격 비동등 연산자

  표현식1 !== 표현식2

  표현식이 엄격하게 비동등하면 참
  표현식이 엄격하게 동등하면 거짓을 리턴한다
*/


// console.log(1 !== 2) 
// // true
// console.log("foo" !== "bar");
// // true
// console.log(0 !== false); 
// // true
// console.log(2023 !== "2023") 
// // true


/*
  5 gt (greater than) 연산자
  >
  6 gte (greater than or equal to) 연산자
  >=
  7 lt (less than) 연산자
  <
  8 lte (less than or equal to) 연산자
  <=
*/

// console.log(1 > 0);
// console.log(1 >= 0);
// console.log(1 < 0);
// console.log(1 <= 0);


/*
  논리 연산자

  1 그리고
  2 또는
  3 부정
*/


/*
  1 그리고 (&&)
  표현식 1 && 표현식 2

  표현식이 모두 참으로 간주되는 경우 참을 리턴한다
*/


// console.log(1 > 0 && 1 < 2);
// console.log(1 > 0 && -1 > 0)
// false


/*
  2 또는 (||) 
  표현식1 || 표현식2

  둘 중에 하나가 참이거나 둘다 참이면 참을 리턴한다
*/


// console.log(1 > 0 || 1 > 2);
// true


/*
  3 부정 (!)
  !표현식

  표현식을 부정한다
*/


// console.log(!true);
// // false
// console.log(!false);
// // true


// Boolean 타입이 아닌 값을 부정하는 경우

// console.log(!2023);
// // false - 0이 아닌 숫자를 부정하는 경우
// console.log(!0);
// // true
// console.log(!"foo");
// // false
// console.log(!"");
// // true 
// console.log(!null);
// // true



/*
  타입 연산자

  변수의 타입을 리턴한다
*/


// var foo = "bar";

// console.log(typeof foo);
// // string



/*
  Q. 연산자

  다음의 문장을 코드로 작성하고
  결과를 출력해보세요

  1. 빈문자열과 false는 동등하다
  2. null과 false는 동등하지 않다
  3. 1은 true와 같고, 0은 false와 같다
*/


// console.log("" == false);
// console.log(null != false);
// console.log(1 == true && 0 == false)



/*
  조건문

  1 if문
  2 switch 문
  3 삼항연산자 문
*/


/*
  if 문

  1 if 
  2 if / else
  3 if / else if
*/


/*
  1 if 

  if (조건) {
    조건이 참인 경우 실행되는 코드
  }
*/


// var year = 2024;

// if (year === 2024) {
//   console.log("올 해");
// }


// 조건 부분이 Boolean 타입이 아닌 경우

// 빈문자열, null, 0 등은 false로 간주된다
// if ("") {
//   console.log("실행 안될거임");
// }


/*
  2 if / else 

  if (조건) {
    조건이 참인 경우 실행되는 코드
  } else {
    조건이 거짓이 경우 실행되는 코드
  }
*/


// var year = 2024;

// if (year == 2024) {
//   console.log("올해")
// } else {
//   console.log("올해가 아닙니다")
// }


/*
  3 if / else if

  if (조건1) {
    조건1이 참인 경우 실행되는 코드
  } else if (조건2) {
    조건2가 참인 경우 실행되는 코드 
  } else {
    모든 조건이 거짓인 경우 실행되는 코드
  }
*/


// var year = 2024;

// if (year == 2023) {
//   console.log("작년")
// } else if (year == 2024) {
//   console.log("올해")
// } else if (year == 2025) {
//   console.log("내년")
// } else { // 옵션
//   console.log("가까운 년도가 아닙니다")
// }


/*
  switch 문
  인자와 케이스 사이에서
  엄격 동등연산을 수행한다

  1 기본 사용방법
  2 default 
*/

// 1 기본 사용 방법
 
// var year = 2024;

// switch (year) {
//   case 2023:
//     console.log("작년");
//     break;

//   case 2024:
//     console.log("올해");
//     break;

//   case 2025:
//     console.log("내년");
//     break;
// }

// 올해


// default
// 모든 케이스가 거짓인 경우 default 코드가 실행된다

// var year = 2030;

// switch (year) {
//   case 2023:
//     console.log("작년");
//     break;

//   case 2024:
//     console.log("올해");
//     break;

//   case 2025:
//     console.log("내년");
//     break;

//   default:
//     console.log("가까운 년도가 아닙니다")
// }


/*
  삼항연산자 (?) 문

  조건 ? 값1 : 값2

  조건이 참인 경우 값1
  조건이 거짓인 경우 값2를 리턴한다
*/


// var year = 2024;

// var r = year === 2024 ? "올해" : "올해가 아닙니다"

// console.log(r);
// // 올해



/*
  Q1. 나이 변수에 따라서 사람이 성인인지 아닌지를
  출력하는 조건문을 만들어 보세요

  1 if / else 문
  2 삼항연산자 문
*/


// 1 if / else

// var age = 20;

// if (age >= 18) {
//   console.log("성인입니다")
// } else {
//   console.log("성인이 아닙니다")
// }


// // 삼항연산자

// var age = 20;

// var r = age >= 18 ? "성인입니다" : "성인이 아닙니다"

// console.log(r)



/*
  Q2. 차의 이름을 입력하면 가격을 알려주는
  switch 문을 만들어보세요
  (판매중인 차가 아니라면 적절한 메시지를 출력하세요)

  <하이브리드/전기차 리스트>

  1 아반떼 하이브리드
  2500
  2 XM3 하이브리드
  3000
  3 코나
  4500
  4 아이오닉6
  5000
*/


// var car = "XM3 Hybrid";

// switch (car) {
//   case "Avante Hybrid":
//     console.log(2500);
//     break;

//   case "XM3 Hybrid":
//     console.log(3000);
//     break;

//   case "KONA":
//     console.log(4500);
//     break;

//   case "IONIQ 6":
//     console.log(5000);
//     break;

//   default:
//     console.log("판매중인 차가 아닙니다");
// }



/*
  반복문
  블록의 코드를 여러번 실행한다

  1 for 문
  2 while 문
*/


/*
  for 문

  1 기본 사용법
  2 실제 사용사례
  3 break
  4 continue
*/


/*
  1 기본 사용법

  for (표현식1; 표현식2; 표현식3) {
    반복할 코드
  }

  표현식1 - 반복 변수의 초기값 설정
  표현식2 - 반복 조건
  표현식3 - 변수 업데이트 연산
*/


// for (var n = 1; n <= 10; n++) { // 블록 (block)
//   // 블록안에서 반복 변수에 접근 가능
//   console.log(n + "번 실행되었습니다")
// }



// 2 사용 사례
// 1부터 10까지의 합을 구하시오

// var sum = 0;

// for (var n = 1; n <= 10; n++) {
//   // 누적
//   sum += n; // sum = sum + n
// }

// console.log(sum);
// // 55


/*
  break

  특정 조건을 만족하는 경우 반복문을 빠져나온다
*/


// for (var n = 1; n <= 10; n++) {
//   if (n == 5) {
//     break;
//   }

//   console.log(n);
// }


// 4 continue
// 특정 조건을 만족할 때 현재 블록을 스킵한다

// for (var n = 1; n <= 10; n++) {
//   if (n == 5) {
//     continue;
//   }

//   console.log(n);
// }


/*
  while 반복문

  while (반복 조건) {
    반복할 코드
  }
*/


// 변수의 초기값 설정
// var n = 1;

// while (n <= 10) {
//   console.log(n + "번 실행되었습니다");

//   // 변수 업데이트 연산
//   n++;
// }


// var n = 1;

// while (n <= 10) {
//   n++;

//   console.log(n + "번 실행되었습니다")
// }


// while 문에서도 break, continue 사용 가능


// var n = 1;

// while (true) {
//   if (n == 5) {
//     break;
//   }

//   console.log(n);

//   n++;
// }


// Q. while 문으로 1부터 10까지의 합을 구하는 코드를
// 작성해보세요







