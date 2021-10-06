import { useEffect, useState } from "react";
// 리액트에는 함수 콤포넌트와 클래스 콤포넌트가 있다.
// 함수 콤포넌트에는 라이사이클 메소드를 대신하는 훅이 있다.
// useState(), useEffect()가 있다.

const ReactHook = () => {
  const [contents, setContents] = useState("React Hook 예제");
  const [arr, setArr] = useState(["aa", "bb", "cc"]);

  useEffect(() => {
    console.log("useEffect ...");
  }, []);

  arr.push("korea");
  return (
    <div>
      <h2>{contents}</h2>
      {arr.map((txt, i) => {
        return <h2 key={i}>{txt}</h2>;
      })}
    </div>
  );
};

export default ReactHook;
