import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>안녕하세요! 저는 [당신의 이름]입니다.</h1>
        <p>저는 다양한 취미와 활동을 즐기며, 여유를 갖고 삶을 즐깁니다.</p>

        <section>
          <h2>취미</h2>
          <ul>
            <li>책 읽기: 다양한 장르의 책을 읽으며 생각을 넓히는 것을 좋아합니다.</li>
            <li>영화 감상: 다양한 영화를 보고, 감동적인 이야기와 독특한 시각을 즐깁니다.</li>
            <li>음악 듣기: 클래식부터 최신 팝송까지 다양한 음악을 듣는 걸 좋아합니다.</li>
          </ul>
        </section>

        <section>
          <h2>운동</h2>
          <ul>
            <li>달리기: 건강을 위해 아침마다 5킬로미터를 달리고 있습니다.</li>
            <li>수영: 수영을 통해 체력을 키우고 스트레스를 해소합니다.</li>
            <li>요가: 정신을 맑게 하고 몸의 유연성을 키우기 위해 요가를 합니다.</li>
          </ul>
        </section>

        <section>
          <h2>좋아하는 음식</h2>
          <ul>
            <li>스시: 신선한 생선과 함께 즐기는 스시를 정말 좋아합니다.</li>
            <li>피자: 다양한 토핑을 올린 피자를 즐겨 먹습니다.</li>
            <li>초콜릿: 달콤한 초콜릿은 언제나 저의 행복한 간식입니다.</li>
          </ul>
        </section>

        <section>
          <h2>기타 관심사</h2>
          <p>
            저는 여행을 좋아합니다. 새로운 장소에서 새로운 사람들을 만나고 다양한 문화를 경험하는 것이 큰 즐거움입니다.
          </p>
        </section>

        <footer>
          <p>이 페이지는 제 취미와 관심사를 소개하는 곳입니다. 감사합니다!</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
