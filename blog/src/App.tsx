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

  const [modal, setModal] = useState(false);

  const [modalTitle, setModalTitle] = useState("");

  // const;

  // [1, 2, 3].map((el) => {
  //   console.log(el);
  //   return "11111";
  // });

  const onClickTitle = (event: any) => {
    console.log(event.target.innerText);
    setModalTitle(event.target.innerText);
  };

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
          {/* <span onClick={() => setLike(like + 1)}>👍</span> */}
          {/* {like} */}
        </h4>
        <p>10월 11일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>10월 11일 발행</p>
      </div>

      {title.map((el, idx) => {
        return (
          <div key={idx}>
            <span onClick={onClickTitle}>{el}</span>
            <Like />
            {/* <div>{idx}</div> */}
          </div>
        );
      })}

      <div className="list">
        <h4 onClick={() => setModal((prev) => !prev)}>{title[2]}</h4>
        <p>10월 11일 발행!!</p>
      </div>

      {/* 윤정님 ver. */}
      {titleList.map((content, idx) => (
        <div key={content + idx} className="list">
          <h4>{content}</h4>
          <p>10월 11일 발행</p>
        </div>
      ))}

      {/* 컴포넌트 만들면 좋은 경우 */}
      {/* 1. 반복적인 html 축약 */}
      {/* 2. 큰 페이지들 */}
      {/* 3. 자주 변경되는 것들 */}
      {/* 함수 컴포넌트는 함수 스코프를 갖기 때문에 변수 범위가 함수 내부로 정해짐. 그래서 프롭스를 쓰는 것! */}
      {/* <Modal /> */}

      {/* 1. html, css로 미리 디자인 완성 */}
      {/* 2. ui 현재 상태를 스테이트로 저장 */}
      {/* 3. 스테이트에 따라 ui가 어떻게 보일지 작성 */}
      {modal ? <Modal title={title} modalTitle={modalTitle} /> : <></>}
    </div>
  );
}

const Like = () => {
  const [like, setLike] = useState(0);
  return (
    <>
      <div onClick={() => setLike((prev) => prev + 1)}>👍</div>
      <div>{like}</div>
    </>
  );
};

interface IModalProps {
  title: String[];
  modalTitle: String;
}

const Modal = (props: IModalProps) => {
  const [title, setTitle] = useState(props.title[0]);

  const onClickChangeTitle = () => {
    setTitle("여자 코트 추천");
  };

  return (
    <div className="modal">
      <h4>{title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={onClickChangeTitle}>글 수정</button>
      <div>{props.modalTitle}</div>
    </div>
  );
};

export default App;
