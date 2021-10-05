import $ from "jquery";
import { useEffect, useState } from "react";
import Member from "./Member";

const List = () => {
  const [memberList, setMemberList] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // 중요: Ajax는 비동기 기술이기 때문에 useEffect()를 사용해야 한다.
  useEffect(() => {
    $.get("http://localhost:5500/list", (data, status) => {
      if (status === "success") {
        setMemberList(data);
      }
    });
  }, []);

  // List콤포넌트에 있는 수정기능
  const saveData = (_no, _name, _message) => {
    let updateData = { no: _no, name: _name, message: _message };

    $.post("http://localhost:5500/update", updateData, (data, status) => {
      if (status === "success") {
        setMemberList(data);
      }
    });
  };

  const delMember = (_no) => {
    // Ajax를 이용해서 Server의 내용을 지우고
    // 콜백함수에서 갱신 해 준다.
    $.post("http://localhost:5500/delete", { no: _no }, (data, status) => {
      if (status === "success") {
        setMemberList(data);
      }
    });
  };

  function onSubmit(event) {
    event.preventDefault();
    // 서버로 Ajax 통신 - 입력 받은 데이터 전송...
    // 4교시 스스로 완성 해 보기
    let inputData = { name, message };

    $.post("http://localhost:5500/input", inputData, (data, status) => {
      if (status === "success") {
        setMemberList(data);
      }
    });
  }

  function valueChange(event) {
    let value = event.target.value;
    if ("name" === event.target.name) {
      setName(value);
    } else if ("message" === event.target.name) {
      setMessage(value);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        성명:{" "}
        <input type="text" value={name} name="name" onChange={valueChange} />
        <br />
        메세지:{" "}
        <input
          type="text"
          value={message}
          name="message"
          onChange={valueChange}
        />
        <br />
        <input type="submit" value="저장" />
      </form>
      <table border="1px" width="100%">
        <thead>
          {memberList.map((member, idx, arr) => {
            return (
              <Member
                delMember={delMember}
                saveData={saveData}
                key={idx}
                member={member}
              />
            );
          })}
        </thead>
      </table>
    </>
  );
};

export default List;
