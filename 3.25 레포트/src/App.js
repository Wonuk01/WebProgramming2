import React from 'react';
import './App.css';
import profileImage from './assets/짱구.png';
import CommentList from "./components/CommentList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>반갑습니다! 저는 2020575068 최원욱 입니다.</h1>
        <img src={profileImage} alt="프로필 사진" className="profile-img" />
      </header>

      <section className="about">
        <h2>자기 소개</h2>
        <p>
          저는 현재 3학년에 재학중인 소프트웨어 에 대해 열정을 가지고 있는 사람입니다.
          현재 웹프로그래밍 응용을 청강 하고 있습니다.
        </p>
      </section>

      <section className="skills">
        <h2>취미 및 성격</h2>
        <ul>
          <li>취미 : 예시 - 복싱, 게임, 수영 하는것을 좋아합니다.</li>
          <li>성격 : 활발할때는 활발하지만 평소에는 조용히 있는것을 좋아합니다.</li>
        </ul>
      </section>
      <hr></hr>
      <CommentList />
      <footer>
        <p>연락처: [ 전화번호: 01052350038, 이메일: chlgk12345@naver.com]</p>
      </footer>
    </div>
  );
}

export default App;
