# 라우팅과 SPA (Single Page Application)

## 📌 라우팅이란?

웹 애플리케이션에서 **라우팅(Routing)** 이란 사용자가 요청한 URL에 따라 **알맞은 페이지를 보여주는 것**을 의미합니다. 프로젝트를 하나의 페이지로 구성할 수도 있고, 여러 페이지로 나누어 구성할 수도 있습니다.

예를 들어:

- **일정 관리 애플리케이션**: 하나의 페이지로 충분
- **블로그 애플리케이션**: 여러 페이지 필요  
  - 글쓰기 페이지: 새로운 포스트를 작성하는 페이지  
  - 포스트 목록 페이지: 작성된 포스트 목록을 보여주는 페이지  
  - 포스트 읽기 페이지: 하나의 포스트 내용을 보여주는 페이지

이처럼 여러 페이지로 구성된 웹 애플리케이션은 **페이지별로 컴포넌트를 분리**하고, 각 URL 경로에 따라 다른 컴포넌트를 보여줄 수 있도록 **라우팅 시스템**을 도입합니다.

---

## 💡 SPA (Single Page Application)

**SPA**란, **한 개의 HTML 페이지로 구성된 애플리케이션**입니다.

- 초기 페이지 로딩 시 HTML을 한 번 받아오고,
- 이후에는 필요한 데이터만 받아와 **화면을 동적으로 업데이트**합니다.
- 기술적으로는 하나의 페이지지만, 사용자는 마치 여러 페이지를 이동하는 것처럼 느낍니다.
- 브라우저의 History API를 사용해 주소창만 변경하며 **서버로부터 HTML을 다시 요청하지 않습니다**.

**MPA**(Multi Page Application)는 사용자 인터랙션이 적은 정적 페이지에 적합하고,  
**SPA**는 사용자 인터랙션이 많고 동적인 웹 애플리케이션에 적합합니다.

---

## 🔁 useNavigate

`useNavigate`는 React Router에서 제공하는 Hook으로, **프로그래밍 방식으로 페이지 이동**이 필요할 때 사용합니다. `<Link>` 컴포넌트를 사용하지 않고도 라우팅을 제어할 수 있습니다.

### ✅ 예시 코드

```jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    // '/articles' 경로로 이동
    navigate('/articles');
  };

  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
