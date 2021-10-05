const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");

app.use(cors());
// body-parser 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const memberList = [
  { no: 1, name: "KIM", message: "hello kim" },
  { no: 2, name: "LEE", message: "hello lee" },
  { no: 3, name: "PARK", message: "hello park" },
  { no: 4, name: "KANG", message: "hello kang" },
  { no: 5, name: "CHOI", message: "hello choi" },
];
let sequence = 6;

app.get("/", (req, res) => {
  console.log("GET - / 요청 들어 옴...");
  res.end("<h1>Hello world! Nodejs server ...</h1>");
});

app.get("/list", (req, res) => {
  console.log("GET - /list 요청 들어 옴...");
  res.send(memberList);
});

app.post("/input", (req, res) => {
  console.log("POST - /input 요청 들어 옴...");
  memberList.push({
    no: sequence++,
    name: req.body.name,
    message: req.body.message,
  });
  res.send(memberList);
});

app.post("/update", (req, res) => {
  console.log("POST - /update 요청 들어 옴...");
  let member = {
    no: parseInt(req.body.no),
    name: req.body.name,
    message: req.body.message,
  };
  console.log("member => ", member);
  for (var i = 0; i < memberList.length; i++) {
    if (memberList[i].no == member.no) {
      memberList[i] = member;
      break;
    }
  }

  res.send(memberList);
});

app.post("/delete", (req, res) => {
  let no = req.body.no;
  let idx = -1;
  for (var i = 0; i < memberList.length; i++) {
    if (memberList[i].no == no) {
      idx = i;
      break;
    }
  }
  if (idx != -1) {
    memberList.splice(idx, 1);
  }
  res.send(memberList);
});

// 서버 생성 및 실행
const server = http.createServer(app);
server.listen(5500, () => {
  console.log("run on server ... http://localhost:5500");
});
