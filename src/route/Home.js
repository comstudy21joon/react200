import { useState } from "react";
import $ from "jquery";

const Home = () => {
  const [attachment, setAttachment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    // 식사 전에 각자 구현 해 보세요!
    let form = event.target;
    // 그냥 form은 태그엘리먼트일 뿐이기때문에
    // FormData 타입으로 변경 해야 한다.
    let data = new FormData(form);
    // 파일 전송중에는 submit 버튼이 비활성화 되도록 한다.
    $("input[type=submit").prop("disabled", true);

    $.ajax({
      type: "POST",
      enctype: "multipart/form-data",
      url: "http://localhost:5500/photo_upload_ajax",
      data: data,
      processData: false,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function (data) {
        console.log("SUCCESS : ", data);
        alert("Success!");
        $("input[type=submit").prop("disabled", false);
      },
      error: function (e) {
        console.log("ERROR : ", e);
        alert("Fail!");
        $("input[type=submit").prop("disabled", false);
      },
    });
  };

  const onFileChange = (event) => {
    console.log(event.target.files[0]);
    const {
      target: { files },
    } = event;
    const reader = new FileReader();
    //
    reader.onloadend = (progressEvent) => {
      const {
        currentTarget: { result },
      } = progressEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(files[0]);
  };
  return (
    <>
      <div>Home ...</div>
      <form onSubmit={onSubmit}>
        파일 업로드 : <input type="file" name="photo" onChange={onFileChange} />
        <input type="submit" value="저장하기" />
      </form>
      {attachment && (
        <>
          <img src={attachment} width="100" />
          <input
            type="button"
            onClick={() => {
              setAttachment("");
            }}
            value="Clear"
          />
        </>
      )}
    </>
  );
};

export default Home;
