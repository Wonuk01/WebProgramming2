# React 요약 정리

## 컴포넌트 기반
React는 컴포넌트 기반으로 UI를 구성합니다.

## State 관리
- **state**는 React 컴포넌트에서 변경 가능한 데이터입니다.
- 렌더링에 필요한 데이터를 **state**를 이용해 관리합니다.

## 훅 (Hooks)
- React의 **state**와 생명주기 기능에 갈고리를 걸어 원하는 시점에 함수를 실행할 수 있도록 만든 기능입니다.

### useState
React 함수형 컴포넌트에서 상태(state)를 관리할 수 있도록 해주는 훅입니다.

- 클래스형 컴포넌트의 `this.state`와 `this.setState`를 대체합니다.
- 상태를 관리하기 위해 사용하는 기본 훅입니다.

```jsx
const [state, setState] = useState(initialValue);
```

- `state`: 현재 상태 값
- `setState`: 상태를 변경하는 함수
- `initialValue`: 상태의 초기 값

> ⚠️ `setState`는 비동기적으로 작동합니다.

## state 직접 변경 금지
- React에서는 **state는 가변적으로 변경 가능한 값**입니다.
- 하지만, **직접적으로 값을 설정해서는 안 됩니다.**
- 유일하게 `this.state`에 값을 직접 설정할 수 있는 곳은 **constructor 내부에서 초기화할 때**입니다.

## 삼항 연산자
- 조건 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드;

### 예시
```js
let age = 20;
let result = age >= 18 ? "성인입니다" : "미성년자입니다";
console.log(result);
```

## 이벤트 문법 실습: 너비, 높이 증가시키기
- `if` 문 사용 시 조건 설정이 복잡해지고 코드가 길어질 수 있음.
- **삼항 연산자 사용**으로 코드 단축 및 조건 최적화 가능.
- 더 깔끔하고 최적화된 조건 처리가 가능.