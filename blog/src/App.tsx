import { useState } from "react";
import "./App.css";

function App() {
  // 데이터 바인딩
  // let post = "강남 우동 맛집";

  // destructuring 문법
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "운동화 추천",
    "가나다 독학",
  ]);

  const [titleList, setTitleList] = useState(["aaa", "bbb", "ccc"]);

  const [like, setLike] = useState(0);

  return (
    <div className="App">
      <div>
        <h1 className="title">블로그다</h1>
        {/* <h2 id={post} style={{ color: "blue" }}>
          블로그 글 제목: {post}
        </h2> */}
      </div>

      <div
        onClick={() => {
          const copy = [...title];
          const sortedTitle = copy.sort();
          // console.log(sortedTitle);
          setTitle(sortedTitle);
        }}
      >
        🔠
      </div>

      {/* 윤정님 ver.1 */}
      <div
        onClick={() => {
          setTitle((prev) => {
            const copy = [...prev];
            copy.sort();
            return copy;
          });
        }}
      >
        🔠
      </div>
      {/* 윤정님 ver.2 */}
      <div
        onClick={() => {
          setTitle(() => {
            const copy = [...title];
            copy.sort();
            return copy;
          });
        }}
      >
        🔠
      </div>

      <div className="list">
        <h4>
          <span
            onClick={
              () => {
                // let copy = title;
                // 얕은 복사 시, 같은 메모리 주소를 참조하기 때문에 같다고 인식하여 리렌더 발생하지 않음 (콘솔에서 ==로 비교해보면 같다고 나옴!)
                const copy = [...title]; // => 깊은 복사 해줘서 사본 만들어주기!
                copy[0] = "여자 코트 추천";
                setTitle(copy);

                // 🔽 원본 직접 수정하는 방법
                // title[0] = "웅앵,ㅇ,";
                // setTitle(title);
                // console.log(title);
              }

              // setTitle(["여자 코트 추천", "운동화 추천", "자바스크립트 독학"])
              // 🔽 이렇게 하면 누를 때마다 배열 맨 앞에 '여자 코트 추천' 추가됨
              // setTitle((prev) => ["여자 코트 추천", ...prev])
            }
          >
            👩‍🦰
          </span>
          {title[0]}
          <span onClick={() => setLike(like + 1)}>👍</span>
          {like}
        </h4>
        <p>10월 11일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>10월 11일 발행</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>10월 11일 발행</p>
      </div>

      {/* 윤정님 ver. */}
      {titleList.map((content, idx) => (
        <div key={content + idx} className="list">
          <h4>{content}</h4>
          <p>10월 11일 발행</p>
        </div>
      ))}
    </div>
  );
}

export default App;
