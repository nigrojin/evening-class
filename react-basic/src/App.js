import {
  useEffect,
  useRef,
  useContext,
  createContext,
  useState
} from "react";

import { 
  HashRouter, 
  Routes, 
  Route, 
  Link, 
  useParams 
} from 'react-router-dom';


export default App;


function App() {
  return <Snippet />
}

/*
  리액트 기본

  1 기본 사용방법
  2 실제 트리에 접근하기
  3 useRef Hook
*/


/* 
   기본 사용방법

   가상 트리가 실제 트리로 변환된 다음 문서에 주입된다
*/


// function Snippet() {
//   // 가상 트리 (virtual tree)
//   return <h1>Hello React!</h1>
// }


/*
  실제 트리에 접근하기
*/

// function Snippet() {

//   // id로 접근 - 접근실패
//   // 가상 트리가 문서에 주입되기 전 접근을 시도했다
//   // console.log(document.getElementById("btn"));


//   // 비동기적으로 작동한다 - 제일 마지막에 실행된다
//   useEffect(() => {
//     console.log(document.getElementById("btn"));
//   })
  

//   return (
//     <div>
//       <h1>실제 엘리먼트에 접근하기</h1>

//       <button id="btn">나 잡아봐라</button>
//     </div>
//   )
// }


/* 
  useRef Hook

  실제 엘리먼트에 접근할 때 사용된다
*/

// function Snippet() {
//   // ref 변수 선언
//   const buttonRef = useRef(null);

//   // 버튼에 접근
//   useEffect(() => {
//     // current 속성에 엘리먼트 저장
//     console.log(buttonRef.current);
//   });

//   return (
//     <div>
//       <h1>useRef Hook</h1>
//       {/* 엘리먼트에 ref 애트리뷰트 추가 */}
//       <button ref={buttonRef}>button</button>
//     </div>
//   )
// }


/*
  JSX (JavaScript eXtension)

  자바스크립트 확장 문법
  가상 트리를 만들기 위해 사용된다
  선언적 문법

  1 기본 문법
  2 Fragments
  3 변수 출력
  4 조건부 렌더링
  5 리스트 렌더링
*/


/*
  기본 문법
*/


// function Snippet() {
//   return (
//     <form>
//       <h1>Google</h1>
//       <input
//         type="search"
//         id="search"
//         name="q"
//         className="class1 class2"
//         style={{ display: "inline-block" }}
//         placeholder="Search Google"
//         autoComplete="off"
//       />
//     </form>
//   )
// }


/*
  Fragments

  전체 가상 트리는 한개의 태그로 감싸져야 한다
  불필요하게 태그를 만들고 싶지않을 때 fragments를
  사용할 수 있다
*/


// function Snippet() {
//   return (
//     // fragments
//     <>
//       <h1>Heading</h1>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </>
//   )
// }


/*
  변수 출력
*/


// function Snippet() {

//   const cat = {
//     name: "치즈",
//     age: 2,
//     home: null,
//     sound: function () {
//       return "야옹";
//     }
//   }

//   return (
//     <ul>
//       <li>이름: {cat.name}</li>
//       <li>나이: {cat.age}살</li>
//       <li>집: {cat.home}</li>
//       <li>울음소리: {cat.sound()}</li>
//     </ul>
//   )
// }


/*
  조건부 렌더링

  1 && (AND)
  표현식1 && 표현식2

  표현식1이 참인 경우 표현식2를 출력한다
  표현식1이 거짓인 경우 아무것도 출력하지 않는다

  2 || (OR)
  표현식1 || 표현식2

  표현식1이 참인 경우 표현식1을 출력한다
  표현식1이 거짓인 경우 표현식 2를 출력한다

  3 삼항연산자
  조건 ? 값1 : 값2

  조건이 참인 경우 값1을 출력한다
  조건이 거짓인 경우 값2를 출력한다
*/


// function Snippet() {
//   return (
//     <>
//       <h1>조건부 렌더링</h1>

//       <h3>&& (AND)</h3>
//       <ol>
//         <li>{true && "표현식 2"}</li>
//         <li>{false && "표현식 2"}</li>
//       </ol>

//       <h3>|| (OR)</h3>
//       <ol>
//         <li>{"표현식 1" || "표현식 2"}</li>
//         <li>{"" || "표현식 2"}</li>
//       </ol>

//       <h3>? (Ternary)</h3>
//       <ol>        
//         <li>{true ? "표현식 1" : "표현식 2"}</li>
//         <li>{false ? "표현식 1" : "표현식 2"}</li>
//       </ol>
//     </>
//   )
// }


/*
  Q. JSX 1
  아래의 데이터를 참고하여 화면에 보이는 리스트를 
  만들어보세요
*/


// function Snippet() {

//   const country = {
//     capitalCity: "서울",
//     name: "대한민국",
//     population: 5000,
//     language: "한국어",
//     isG7: false,
//   }

//   return (
//     <>
//       <h1>Q. JSX 1</h1>
//       <h3>{country.name}</h3>
//       <ul>
//         <li>수도: {country.capitalCity}</li>
//         <li>인구: 약 {country.population.toLocaleString()}만 명</li>
//         <li>언어: {country.language}</li>
//         <li>G7 여부: {country.isG7 ? "예" : "아니오"}</li>
//       </ul>
//     </>  
//   )
// }


/*
  리스트 렌더링
*/


// function Snippet() {

//   const beers = [
//     { name: "Heineken", origin: "Netherlands" },
//     { name: "Guinness", origin: "Ireland" },
//     { name: "Asahi", origin: "Japan" }
//   ]

//   const beerList = beers.map((beer) => (
//     // 리스트 렌더링에 필요하다. 고유한 값이어야 한다
//     <li key={beer.name}>
//       <b>{beer.name}</b> - {beer.origin}
//     </li>
//   ))

//   return (
//     <>
//       <h3>리스트 렌더링</h3>
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }


/*  
  Q. JSX 2
  아래의 데이터를 참고하여 화면에 보이는
  테이블을 만들어보세요
*/


// function Snippet() {

//   const beers = [
//     { id: 1, name: "Guinness", origin: "Ireland", available: false },
//     { id: 2, name: "Heineken", origin: "Netherlands", available: true },
//     { id: 3, name: "Budwiser", origin: "USA", available: true }
//   ]

//   const beerRows = beers.map(beer => (
//     <tr key={beer.id}>
//       <td>{beer.id}</td>
//       <td>{beer.name}</td>
//       <td>{beer.origin}</td>
//       <td>{beer.available ? "예" : "아니오"}</td>
//     </tr>  
//   ));

//   return (
//     <>
//       <h1>Q. JSX 2</h1>
      
//       <h3>세계 맥주</h3>
//       <table border="1">
//         <thead>
//           <tr>
//             <td>ID</td>
//             <th>이름</th>
//             <th>원산지</th>
//             <th>판매중</th>
//           </tr>
//         </thead>
//         <tbody>
//           {beerRows}
//         </tbody>
//       </table>
//     </>
//   )
// }


/*
  컴포넌트 
  UI를 만들기 위한 독립적이고 재사용 가능한 부품
  컴포넌트의 이름은 대문자로 시작해야 한다

  1 컴포넌트 합성
  2 props
  3 컴포넌트 트리
  4 트리에서 데이터 전달하기
*/


/*
  컴포넌트 합성

  컴포넌트를 조합하여 뷰를 완성한다
*/


// 상품 설명
// function Content() {
//   return (
//     <section>
//       <h3>Samsung Galaxy S24</h3>
//       <i>특징</i>
//       {/* dl: data list, dt: data title, dd: data description */}
//       <dl>
//         <dt>CPU</dt>
//         <dd>8 Core</dd>
//         <dt>RAM</dt>
//         <dd>8GB</dd>
//         <dt>Storage</dt>
//         <dd>512GB SSD</dd>
//       </dl>
//       <button>장바구니에 추가</button>
//     </section>
//   )
// }

// // 리뷰
// function Reviews() {
//   return (
//     <section>
//       <h3>고객 리뷰</h3>
//       <ul>
//         <li>I love the design!</li>
//         <li>Poor quality. </li>
//         <li>Great product!</li>
//       </ul>  
//     </section>
//   )
// }

// // 추천상품
// function Suggested() {
//   return (
//     <section>
//       <h3>추천 상품</h3>
//       <ul>
//         <li>iPhone 15 Pro</li>
//         <li>Pixel Pro 8</li>
//         <li>Huawei</li>
//       </ul>  
//     </section>
//   )
// }

// // 메인 컴포넌트 - 컴포넌트가 모이는 곳
// function Snippet() {
//   return (
//     <>
//       <header>
//         <h1>Amazon.com</h1>
//       </header>
      
//       <main>
//         <Content />
//         <Reviews />
//       </main>

//       <aside>
//         <Suggested />
//       </aside>
//     </>
//   )
// }


function Profile({ profile }) {
  // props에 접근
  console.log(profile);

  return (
    <section>
      <h3>{profile.username}</h3>
      <p>{profile.bio}</p>
      <ul>
        <li>게시물 {profile.posts}</li>
        <li>팔로워 {profile.followers}</li>
        <li>팔로잉 {profile.following}</li>
      </ul>
    </section>
  )
}

// function Snippet() {

//   // 지역변수
//   const DATA = {
//     username: "예수님",
//     bio: "네 이웃을 사랑하라!",
//     posts: 5,
//     followers: 10,
//     following: 20
//   }

//   return (
//     <>
//       <h1>Instagram.com</h1>

//       {/* props: 다른 컴포넌트에 전달하는 데이터 */}
//       <Profile profile={DATA} />
//     </>
//   )
// }


/*
  Q. props

  뷰를 참고하여 Content 컴포넌트를 완성해보세요
  (Content는 DATA를 사용하여 뷰를 생성합니다)
*/


// function Content({ video }) {
//   return (
//     <section>
//       <h3>{video.title}</h3>
//       <img src={video.source} width="200" />
//       <p>
//         {video.views} views
//       </p>
//     </section>  
//   )
// }

// function Snippet() {
  
//   const DATA = {
//     title: "고양이는 액체일까?",
//     author: "Who",
//     source: "https://i.pinimg.com/736x/e8/25/eb/e825ebee0d666bb63a86ab80405670e3.jpg",
//     views: 99,
//   }

//   return (
//     <>
//       <h1>YouTube.com</h1>

//       <Content video={DATA} />

//       <h3>댓글</h3>
//       <ul>
//           <li>유치하게 등수는ㅉㅉ 3빠</li>
//           <li>2빠</li>
//           <li>1빠</li>
//         </ul>
//     </>
//   )
// }


/*
  컴포넌트 트리

  컴포넌트를 트리구조로 만들 수 있다
  라우터 등의 기능을 구현할 때 적합하다
*/


// children props는 자식 컴포넌트를 의미한다
// function Layout({ children }) {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Posts</li>
//         </ul>
//       </nav>

//       <main>
//         {/* Article 컴포넌트 */}
//         {children}
//       </main>
//     </>  
//   )
// }

// function Article() {
//   return (
//     <section>
//       <h1>First post</h1>
//       <i>January 1, 2024</i>
//       <p>..</p>
//     </section>  
//   )
// }

// // 메인 
// function Snippet() {
//   return (
//     <Layout>
//       <Article />
//     </Layout>
//   )
// }


/*
  트리구조에서 데이터 전달하기

  트리구조에서 하위 컴포넌트에 데이터를 전달할 수 있다
  예) 인증 구현
*/

// context 선언
// const AuthContext = createContext();

// // 인증(Authentication) 처리
// function AuthProvider({ children }) {

//   // 지역변수 - 유저 데이터
//   const value = { username: "bunny" };

//   return (
//     // context 컴포넌트에 value 객체를 전달한다
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// function Layout({ children }) {

//   // value 객체에 접근하기
//   const auth = useContext(AuthContext);

//   console.log(auth);

//   return (
//     <>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Posts</li>
//         </ul>
//       </nav>

//       {/* 인증 상태 구현 */}
//       {auth ? (
//         <p>안녕하세요, {auth.username}님!</p>
//       ) : (
//         <p>로그인하세요.</p>
//       )}

//       <main>
//         {/* Article 컴포넌트 */}
//         {children}
//       </main>
//     </>  
//   )
// }

// function Article() {
//   return (
//     <section>
//       <h1>First post</h1>
//       <i>January 1, 2024</i>
//       <p>..</p>
//     </section>  
//   )
// }

// // 메인 
// function Snippet() {
//   return (
//     <AuthProvider>
//       <Layout>
//         <Article />
//       </Layout>
//     </AuthProvider>
//   )
// }


/*
  리액트에서 이벤트 처리 방법
*/


// function Snippet() {
//   function handleClick() {
//     alert("lol");
//   }

//   return (
//     // onEvent={eventHandler}
//     <button onClick={handleClick}>
//       클릭
//     </button>
//   )
// }


/*
  뷰 업데이트

  1 예시
  2 동적 스타일링
*/


/*
  예시
*/

/* 
  useState Hook

  const [state, setState] = useState(initialValue)

  1 state: 컴포넌트 내의 변수
  2 setState(newState): state를 newState로 업데이트 하는 함수
  3 intialValue: state의 초기값
*/

// function Snippet() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     // 현재 count를 1 증가시킨다
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <p>count: {count}</p>
//       <button onClick={handleClick}>+</button>
//     </>
//   )
// }


/*
  동적 스타일링
*/


// function Snippet() {
//   // 리액트의 꽃
//   const [liked, setLiked] = useState(false);

//   function handleClick() {
//     setLiked(!liked);
//   }

//   return (
//     <>
//       <h1>좋아요 버튼</h1>
//       <svg 
//         style={{ width: "2rem", fill: liked ? "#e00" : "#000" }}
//         onClick={handleClick}
//         xmlns="http://www.w3.org/2000/svg" 
//         viewBox="0 0 512 512"
//       >
//         <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/>
//       </svg>
//     </>
//   )
// }


// function Snippet() {
//   const [subscribed, setSubscribed] = useState(false);

//   return (
//     <>
//       <h1>Subscribe button</h1>
//       <button onClick={() => setSubscribed(!subscribed)}>
//         {subscribed ? "구독중" : "구독하기"}
//       </button>
//     </>  
//   )
// }


/*
  리액트 폼

  1 폼 데이터 처리방법
  2 폼 기술 
*/


/*
  폼 데이터 처리방법

  HTML과 완전히 다르게 처리한다
  state로 처리한다
*/


// function Snippet() {
//   const [email, setEmail] = useState("");

//   function handleSubmit(e) {
//     // 서버 요청 취소
//     e.preventDefault();

//     // 폼 데이터에 접근하기
//     console.log("email:", email);
//   }

//   function handleChange(e) {
//     // e.target: input
//     // console.log(e.target.value);

//     // 사용자의 입력값을 email(state)에 저장한다
//     setEmail(e.target.value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>뉴스레터</h1>
//       <input 
//         type="email"
//         placeholder="bunny@example.com" 
//         // change 이벤트 - value가 바뀔 때 발생한다
//         onChange={handleChange} 
//       />
//       <button type="submit">구독하기</button>
//     </form>  
//   )
// }


// function Snippet() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   // 폼 제출 처리
//   function handleSubmit(e) {
//     e.preventDefault();

//     // 폼데이터에 접근
//     console.log(`username: ${username}, password: ${password}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Login</h1>
//       <div>
//         {/* label의 자식이 input인 경우, 연결된다 */}
//         <label>
//           Username {" "} 
//           <input 
//             type="text" 
//             onChange={(e) => setUsername(e.target.value)} 
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Password {" "}
//           <input 
//             type="password" 
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//       </div>
//       <button type="submit">Login</button>
//     </form>  
//   )
// }


/*
  폼 기술 

  1 동적 제출 버튼
  2 제출 후 입력란 비우기
  3 input autofocus 기능
*/


// 동적 제출 버튼
// function Snippet() {
//   const [comment, setComment] = useState("");

//   return (
//     <>
//       <h1>댓글 달기</h1>
//       <input
//         type="text"
//         onChange={(e) => setComment(e.target.value)}
//       />
//       {/* trim - 문자열 앞/뒤의 공백을 제거한다 */}
//       <button disabled={!comment.trim()}>전송</button>
//     </>
//   )
// }


// 폼 제출 후 입력란 비우기
// function Snippet() {
//   const [todo, setTodo] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     alert("추가되었습니다");
//     // todo 초기화
//     setTodo("");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>할일 앱</h1>
//       <input
//         type="text"
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//         placeholder="새 할일"
//       />
//       <button>추가</button>
//     </form>
//   )
// }


// autofocus

// function Snippet() {
//   // ref 변수 선언
//   const inputRef = useRef(null);

//   // 비동기적으로 input에 접근 후 focus메서드 호출
//   useEffect(() => {
//     // inputRef.current = 실제 input 엘리먼트
//     inputRef.current.focus();

//     // focus - input의 메서드. 커서를 input에 둔다
//   })
  
//   return (
//     <>
//       <h1>탐색</h1>

//       <input
//         type="search"
//         placeholder="아이디"
//         ref={inputRef}
//       />
//     </>
//   )
// }


/*
  리액트 라우터

  1 기본 라우터
  2 인증이 적용된 라우터
*/


/*
  기본 라우터

  클라이언트의 요청과 적절한 리소스를 연결한다
*/


// 홈 (첫 페이지)
// function Home() {
//   return <h1>Home</h1>
// }

// 게시물 목록
// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p0">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p1">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// 게시물 보기
// function Post() {
//   // useParams: URL의 인자에 접근할 수 있다
//   const { postId } = useParams();
//   // params (parameters = 매개변수)

//   return (
//     <>
//       <h1>Title</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// // 소개 페이지
// function About() {
//   return <h1>About</h1>
// }

// // 404 찾을 수 없음
// function NotFound() {
//   return <h1>404 NotFound</h1>
// }

// // 메인 컴포넌트
// function Snippet() {
//   return (
//     <HashRouter> 
//       <nav>
//         <ul>
//           <li>
//             {/* 링크 */}
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         {/* 요청 주소와 일치하는 path를 가진 Route의 element가 렌더링된다 */}
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="posts" element={<Posts />} />
//         {/* postId - URL 매개변수 */}
//         <Route path="post/:postId" element={<Post />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </HashRouter>
//   )
// }


// function Snippet() {
//   const [todo, setTodo] = useState("");
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   })

//   function handleSubmit(e) {
//     e.preventDefault();

//     alert("추가되었습니다");

//     setTodo("");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>할일 앱</h1>
//       <input 
//         type="text"
//         value={todo}
//         onChange={e => setTodo(e.target.value)}
//         placeholder="새 할일"
//         ref={inputRef}
//       />
//       <button disabled={!todo.trim()}>
//         추가
//       </button>
//     </form>
//   )
// }


/* 
  인증 기능이 적용된 라우터
*/


// context 변수 선언
// const AuthContext = createContext();

// // 유저데이터 관리
// function AuthProvider({ children }) {
//   // 유저 데이터
//   const [user, setUser] = useState(null);

//   // user: user -> user (key와 value가 같을 때 value를 생략할 수 있다)
//   const value = { user, setUser };

//   return (
//     // value 객체를 하위 컴포넌트에 전달한다
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// // 상태 메시지 관리
// function AuthStatus() {
//   // value 객체에 접근
//   const { user, setUser } = useContext(AuthContext);

//   return user ? (
//     <p>
//       안녕하세요, {user}님! {" "}
//       <button onClick={() => setUser(null)}>로그아웃</button>
//     </p>
//   ) : (
//     <p>로그인하세요</p>
//   )
// }

// // 인증 검사 역할
// function AuthRequired({ children }) {
//   // value 객체에 접근
//   const { user, setUser } = useContext(AuthContext);
//   const [username, setUsername] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     // user업데이트
//     setUser(username);
//   }

//   // 인증(로그인)을 하지 않았을 때
//   if (!user) {
//     // 로그인 폼을 보여준다
//     return (
//       <form onSubmit={handleSubmit}>
//         <h1>로그인</h1>
//         <input 
//           type="text" 
//           onChange={(e) => setUsername(e.target.value)} 
//           required
//         />
//         <button type="submit">로그인</button>
//       </form>
//     )
//   }

//   // children - Post 컴포넌트
//   return children;
// }

// // 홈 (첫 페이지)
// function Home() {
//   return <h1>Home</h1>
// }

// // 게시물 목록
// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p0">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p1">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// // 게시물 보기
// function Post() {
//   // useParams: URL의 인자에 접근할 수 있다
//   const { postId } = useParams();
//   // params (parameters = 매개변수)

//   return (
//     <>
//       <h1>Title</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// // 소개 페이지
// function About() {
//   return <h1>About</h1>
// }

// // 404 찾을 수 없음
// function NotFound() {
//   return <h1>404 NotFound</h1>
// }

// // 메인 컴포넌트
// function Snippet() {
//   return (
//     <HashRouter> 
//       <AuthProvider>
//         <nav>
//           <ul>
//             <li>
//               {/* 링크 */}
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/posts">Posts</Link>
//             </li>
//           </ul>
//         </nav>

//         <AuthStatus />

//         <Routes>
//           {/* 요청 주소와 일치하는 path를 가진 Route의 element가 렌더링된다 */}
//           <Route path="/" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="posts" element={<Posts />} />
//           {/* postId - URL 매개변수 */}
//           <Route path="post/:postId" element={
//             <AuthRequired>
//               <Post />
//             </AuthRequired>
//           } />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </AuthProvider>
//     </HashRouter>
//   )
// }


/*
  데이터 가져오기

  1 useEffect Hook
  2 데이터 가져오기 예시
*/


/* 
  useEffect Hook
  앱에 다양한 효과(effect)를 줄 수 있다
  예를 들어 데이터 가져오기, 실제 엘리먼트에 접근하기 등

  - 사용방법

  1 useEffect(effect)
  컴포넌트가 호출될 때 이펙트를 실행한다

  2 useEffect(effect, [])
  컴포넌트가 최초로 호출될 때 이펙트를 실행한다

  3 useEffect(effect, [deps])
  컴포넌트가 최초로 호출 될때 그리고 deps(dependencies)가
  업데이트 될때 이펙트를 실행한다
*/

// function Snippet() {
//   // setState - 컴포넌트를 호출한다
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("이펙트 발생")
//   }, [])

//   return (
//     <>
//       <h1>useEffect Hook</h1>
//       <p>count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>
//         +
//       </button>
//     </>
//   )
// }


/*
  데이터 가져오기 예시
*/


// 서버에 데이터를 요청하는 함수
// function getProfile() {
//   // 서버에서 가져올 데이터
//   const DATA = {
//     username: "doggy",
//     avatar: "https://i.pinimg.com/originals/28/8b/d1/288bd18fd073898a8417c31c77f83059.jpg",
//     bio: "정신이 좀 드는가"
//   }
  
//   const promise = new Promise((res, rej) => {
//     // 데이터를 가져오는 데 2초가 걸린다고 가정
//     setTimeout(() => {
//       // 요청 성공
//       res(DATA)
//     }, 2000);
//   })

//   // 함수는 응답결과를 프로미스 객체로 리턴한다
//   return promise;
// }


// function Snippet() {
//   // 에러 처리
//   const [error, setError] = useState(null);
//   // 대기상태 관리
//   const [isLoaded, setIsLoaded] = useState(false);
//   // 데이터 관리
//   const [profile, setProfile] = useState(null);

//   // 데이터 요청
//   useEffect(() => {
//     getProfile() // 서버 요청함수 호출
//       .then(data => { // 요청 성공시에 데이터를 처리하는 부분

//         // 전송받은 데이터로 profile을 업데이트한다
//         setProfile(data)
//       })
//       .catch(error => { // 요청 실패시에 에러를 처리하는 부분
//         setError(error)
//       })
//       .finally(() => setIsLoaded(true)) // 최종 작업
//       // 성공 실패 여부와 상관없이 항상 실행된다
//   }, [])

//   // 에러가 발생한 경우
//   if (error) {
//     return <p>잠시 후 다시 시도해주세요</p>
//   }

//   // 가져오는 중
//   if (!isLoaded) {
//     return <p>데이터를 가져오는 중입니다..</p>
//   }

//   // 렌더링
//   return (
//     <>
//       <h1>프로필</h1>
//       <img
//         src={profile.avatar}
//         alt={profile.username}
//         style={{
//           width: "100px",
//           height: "100px",
//           objectFit: "cover",
//           border: "1px solid #ddd",
//           borderRadius: "99px",
//         }}
//       />
//       <h3>{profile.username}</h3>
//       <p>{profile.bio}</p>
//     </>
//   )
// }



// function Snippet() {
//   const [result, setResult] = useState(null);

//   function handleChange(e) {
//     const password = e.target.value;

//     try {
//       if (!password) {
//         throw "Password is required";
//       }

//       if (password.length < 8) {
//         throw "Too short!";
//       }

//       setResult({ pass: true, message: "Done!" });

//     } catch (error) {
//       setResult({ pass: false, message: error });
//     }
//   }

//   return (
//     <>
//       <h1>Live Validator</h1>

//       <label>
//         Password {" "}
//         <input type="text" onChange={handleChange} />
//       </label>

//       {result && (
//         <p style={{ color: result.pass ? "green" : "red" }}>
//           {result.message}
//         </p>
//       )}
//     </>
//   );
// }


const DATA = [
  { id: 1, name: "I believe I can fly" },
  { id: 2, name: "I believe I can touch the sky" },
  { id: 3, name: "I think about it every night and day" },
  { id: 4, name: "Spread my wings and fly away" },
]

function Snippet() {
  const [items, setItems] = useState(DATA);

  function handleClick(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  const history = items.map(item => (
    <li key={item.id}>
      {item.name} {" "}
      <span onClick={() => handleClick(item.id)}>
        &times;
      </span>
    </li>
  ))

  return (
    <section>
      <h1>Search History</h1>
      <input type="search" placeholder="Search Google" disabled />
      <ul>
        {history}
      </ul>
    </section>
  )
}