// const express = require('express') => Common JS
import express from "express"; //module
import { getToken, checkPhone, sendTokenToSMS } from "./phone.js";

const app = express();
app.use(express.json()); //express에서 json을 읽기 위해 설정 (옛날에는 bodyParser를 사용)

app.get("/boards", function (req, res) {
  // 1. DB에 접속 후 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    {
      number: 1,
      writer: "A",
      title: "제목입니다",
      contents: "내용이에요",
    },
    {
      number: 2,
      writer: "B",
      title: "제목입니다",
      contents: "내용이에요",
    },
    {
      number: 3,
      writer: "C",
      title: "제목입니다",
      contents: "내용이에요",
    },
    {
      number: 4,
      writer: "D",
      title: "제목입니다",
      contents: "내용이에요",
    },
  ];

  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기

  res.send(result);
});

app.post("/boards", function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기

  console.log(req);
  console.log("=============");
  console.log(req.body);

  // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다.");
});

app.post("/tokens/phone", function (req, res) {
  //1.휴대폰 번호 자리수 맞는지 검증
  const isValid = checkPhone(req.body.myphone);
  if (isValid === false) return;

  //2.핸드폰 토큰 6자리 만드릭
  const myToken = getToken();

  //3.핸드폰번호에 토큰 전송하기
  sendTokenToSMS(req.body.myphone, myToken);

  res.send("인증완료!");
});

app.listen(3000);
