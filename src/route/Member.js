import { useState } from "react";

const Member = ({ member, saveData, delMember }) => {
  const [name, setName] = useState(member.name);
  const [message, setMessage] = useState(member.message);
  const [isEdit, setIsEdit] = useState(false);

  const changeEditMode = (event) => {
    setIsEdit(!isEdit);
  };

  const onChange = (event) => {
    let _name = event.target.name;
    let value = event.target.value;
    if ("name" === _name) {
      setName(value);
    } else if ("message" === _name) {
      setMessage(value);
    }
    // 만약 여기서 수정 했다면 부모 콤포넌트의 함수를 임의 호출해야 한다.
  };

  return (
    <tr>
      <td>{member.no}</td>
      {isEdit ? (
        <>
          <td>
            <input type="text" name="name" value={name} onChange={onChange} />
          </td>
          <td>
            <input
              type="text"
              name="message"
              value={message}
              onChange={onChange}
            />
          </td>
          <td>
            <input
              type="button"
              value="저장"
              onClick={(event) => {
                saveData(member.no, name, message);
                setIsEdit(false);
              }}
            />
            <input type="button" value="취소" onClick={changeEditMode} />
          </td>
        </>
      ) : (
        <>
          <td>{member.name}</td>
          <td>{member.message}</td>
          <td>
            <input type="button" value="수정" onClick={changeEditMode} />
          </td>
        </>
      )}

      <td>
        <input
          type="button"
          value="삭제"
          onClick={(event) => {
            delMember(member.no);
          }}
        />
      </td>
    </tr>
  );
};

export default Member;
