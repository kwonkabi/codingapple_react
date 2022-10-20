import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    { title: "남자 코트 추천", createdAt: "2022,10,01", like: 0 },
    { title: "운동화 추천", createdAt: "2022,10,01", like: 0 },
    { title: "가나다 독학", createdAt: "2022,10,01", like: 0 },
    { title: "햄버거", createdAt: "2022,10,01", like: 0 },
    { title: "피자", createdAt: "2022,10,01", like: 0 },
  ]);

  const [input, setInput] = useState("");

  const onClickDelete = (idx: number) => {
    const copy = [...title];
    copy.splice(idx, 1);
    setTitle(copy);
  };

  const onClickSubmit = () => {
    if (!input) return;
    const date = String(new Date());
    const copy = [...title];
    copy.unshift({ title: input, createdAt: date, like: 0 });
    setTitle(copy);
  };

  return (
    <div className="App">
      <div>
        <h1 className="title">블로그다</h1>
      </div>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={onClickSubmit}>??</button>
      <div
        onClick={() => {
          const copy = [...title];
          const sortedTitle = copy.sort();
          setTitle(sortedTitle);
        }}
      >
        🔠
      </div>

      {title.map((el, idx) => {
        return (
          // key는 중복되는 값이나 idx가 들어가면 안 됨!
          <div key={el.title}>
            <span>{el.title}</span>
            <button onClick={() => onClickDelete(idx)}>삭제</button>
            <span>{`${new Date(el.createdAt)}`}</span>
            <Like />
          </div>
        );
      })}
    </div>
  );
}

const Like = () => {
  const [like, setLike] = useState(0);
  return (
    <>
      <div onClick={() => setLike(like + 1)}>👍</div>
      <div style={{ borderBottom: "1px solid gray" }}>{like}</div>
    </>
  );
};

export default App;

// import React, { useState } from "react";
// import "./App.css";
// function App() {
//   let title = "왕 나도 리액트 공부한다.";
//   let [contentList, setContentList] = useState([
//     { title: "나는 최윤정", createdAt: "2022,10,17" },
//     { title: "유후유후", createdAt: "2022,10,17" },
//     { title: "가나초코렡", createdAt: "2022,10,17" },
//   ]);
//   let [isModalOpen, setIsModalOpen] = useState(false);
//   let [selectedContentIndex, setSelectedContentIndex] = useState<number | null>(
//     null
//   );
//   let [newContent, setNewContent] = useState("");

//   function onClickEditContent() {
//     // let copy = [...contentList];
//     // copy[0] = "나는 최윤정, who is hungry";
//     // setContentList(copy);
//     setContentList((prev) => {
//       if (selectedContentIndex === null) {
//         return prev;
//       }
//       const copy = [...prev];
//       copy[selectedContentIndex].title = `who is hungry`;
//       return copy;
//     });
//   }
//   function onClickSort() {
//     setContentList((prev) => {
//       const copy = [...prev];
//       copy.sort();
//       return copy;
//     });
//   }
//   function onClickContent(index: number) {
//     setIsModalOpen(!isModalOpen);
//     setSelectedContentIndex(index);
//   }
//   function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
//     setNewContent(e.target.value);
//   }
//   function onClickAddContent() {
//     if (newContent) {
//       setContentList((prev) => {
//         const copy = [...prev];
//         copy.unshift({ title: newContent, createdAt: new Date().toString() });
//         return copy;
//       });
//       setNewContent("");
//     }
//   }
//   function onClickDeleteContent(targetIndex: number) {
//     setContentList((prev) => {
//       const copy = [...prev];
//       copy.splice(targetIndex, 1);
//       return copy;
//     });
//   }
//   return (
//     <div className="App">
//       <div className="black-nav">
//         <h4 id={title}>{title}</h4>
//       </div>
//       <button onClick={onClickSort}>가나다순정렬</button>
//       {/* <div className="item">
//         <h4 style={{ color: "crimson" }} onClick={onClickContent}>
//           {contentList[0]}
//           <span onClick={onClickLike}>:+1:{like}</span>
//         </h4>
//         <p>{`${new Date()} 발행`}</p>
//       </div> */}
//       {contentList.map((content, index) => (
//         <div key={content.title} className="item">
//           <h4
//             style={{ color: "crimson" }}
//             onClick={() => onClickContent(index)}
//           >
//             {content.title}
//           </h4>
//           <Like />
//           <p>{`${new Date(content.createdAt)} 발행`}</p>
//           <button onClick={() => onClickDeleteContent(index)}>삭제</button>
//         </div>
//       ))}
//       <input value={newContent} onChange={onChangeInput} />
//       <button onClick={onClickAddContent}>콘텐츠 추가</button>
//       {isModalOpen && (
//         <Modal
//           content={
//             selectedContentIndex !== null
//               ? contentList[selectedContentIndex]
//               : undefined
//           }
//           onClickEditContent={onClickEditContent}
//         />
//       )}
//     </div>
//   );
// }

// function Like() {
//   let [like, setLike] = useState(0);

//   function onClickLike() {
//     setLike(like + 1);
//   }
//   return <span onClick={onClickLike}>:+1:{like}</span>;
// }

// function Modal(props: {
//   content?: { title: string; createdAt: string };
//   onClickEditContent: () => void;
// }) {
//   if (!props.content) {
//     return null;
//   }
//   return (
//     <div className="modal">
//       <h4>{props.content.title}</h4>
//       <p>{`날짜: ${new Date(props.content.createdAt)}`}</p>
//       <p>상세내용</p>
//       <button onClick={props.onClickEditContent}>글수정</button>
//     </div>
//   );
// }
// export default App;
