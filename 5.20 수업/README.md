# React TodoList App

## 📌 개요
이 프로젝트는 React와 Styled-components를 사용하여 만든 **간단하고 깔끔한 To-Do 리스트 애플리케이션**입니다. 사용자에게 오늘의 할 일을 추가하고, 완료 표시를 하거나 삭제할 수 있는 기능을 제공합니다.

---

## 📁 주요 컴포넌트 구조

### 1. `TodoTemplate`
- **역할**: 전체 앱의 레이아웃을 설정합니다.
- **특징**:
  - 페이지 중앙에 위치
  - 그림자가 적용된 흰색 박스 형태

### 2. `TodoHead`
- **역할**: 오늘의 날짜와 남은 할 일 개수를 보여줍니다.
- **특징**:
  - 상단 고정
  - 실시간 날짜 및 요일 출력
  - 남은 할 일 수 자동 집계

### 3. `TodoList`
- **역할**: 등록된 할 일 목록을 표시합니다.
- **특징**:
  - `todos` 배열을 받아 `map` 함수로 반복 렌더링
  - 각 항목은 `TodoItem` 컴포넌트를 사용

### 4. `TodoItem`
- **역할**: 개별 할 일 정보를 표시합니다.
- **특징**:
  - 완료 여부를 토글 가능 (좌측 원 클릭)
  - 완료 시 체크 아이콘과 함께 텍스트 색상 흐려짐
  - 마우스 오버 시 휴지통 아이콘 표시 → 삭제 가능

### 5. `TodoCreate`
- **역할**: 새로운 할 일을 추가하는 컴포넌트입니다.
- **특징**:
  - 하단 우측에 초록색 플러스 버튼 표시
  - 버튼 클릭 시 입력 폼 등장
  - 입력 후 엔터 또는 확인 버튼으로 등록 가능

---

## 🧩 TodoList 구성 예시 코드 (`App.js`)
```jsx
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
