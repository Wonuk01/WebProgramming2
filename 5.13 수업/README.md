# React - Lists & Keys, Forms, Lifting State Up

## ✅ Lists & Keys

리스트와 키는 배열 형태의 데이터를 효율적으로 렌더링하고, 각 컴포넌트를 고유하게 식별하기 위해 사용됩니다.

### 1. Lists
- 배열 형태의 데이터를 기반으로 여러 개의 컴포넌트를 렌더링할 때 사용됩니다.
- `map()` 함수를 활용하여 배열의 각 요소를 컴포넌트로 변환합니다.

#### 예제:
```jsx
const users = ['Alice', 'Bob', 'Charlie'];
const userList = users.map((user, index) => (
  <li key={index}>{user}</li>
));
```

### 2. Keys
- 각 객체나 아이템을 구분할 수 있는 고유한 값입니다.
- React는 키를 사용해 리스트 항목을 식별하고, 효율적으로 업데이트합니다.
- 키는 주로 데이터베이스의 고유 식별자 또는 배열 인덱스가 사용됩니다.

#### 예제:
```jsx
const items = [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }];
const itemList = items.map(item => (
  <li key={item.id}>{item.name}</li>
));
```

---

## ✅ Forms

React에서 폼(Form)은 사용자 입력을 처리하고, 제출(submit) 이벤트를 관리하는 중요한 요소입니다.

### 1. 기본 구조:
- `<form>` 태그로 폼을 감싸고, `<input>`, `<textarea>`, `<select>` 등을 포함합니다.

### 2. 이벤트 처리:
- `onChange` 이벤트로 입력 값을 관리하고, `onSubmit` 이벤트로 폼 데이터를 제출합니다.

#### 예제:
```jsx
import { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## ✅ Lifting State Up

상태를 부모 컴포넌트로 올려서 중앙에서 관리하는 방식입니다. 여러 컴포넌트 간에 상태를 공유하거나, 공통된 로직을 처리할 때 사용됩니다.

### 1. 구현 단계:
1. **상태 정의:** 부모 컴포넌트에서 상태를 정의합니다.
2. **상태 변경 함수 전달:** 부모에서 상태 변경 함수를 정의하고, 하위 컴포넌트에 전달합니다.
3. **상태 변경 함수 호출:** 하위 컴포넌트에서 이벤트 발생 시 상태 변경 함수를 호출합니다.
4. **상태 전달:** 부모에서 변경된 상태를 하위 컴포넌트에 전달합니다.

#### 예제:
```jsx
import { useState } from 'react';

function ParentComponent() {
  const [message, setMessage] = useState('Hello');

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>{message}</h1>
      <ChildComponent onMessageChange={updateMessage} />
    </div>
  );
}

function ChildComponent({ onMessageChange }) {
  return (
    <button onClick={() => onMessageChange('Hello from Child!')}>Update Message</button>
  );
}
```

---

### ✅ Summary
- **Lists & Keys:** `map()` 함수를 통해 리스트를 렌더링하고, 각 항목에 고유한 `key`를 부여합니다.
- **Forms:** 입력 값을 `onChange`로 관리하고, `onSubmit`으로 데이터 제출을 처리합니다.
- **Lifting State Up:** 상태를 부모 컴포넌트에서 관리하여 하위 컴포넌트 간에 데이터 공유를 용이하게 만듭니다.

React에서 이 세 가지 개념은 데이터 관리와 컴포넌트 간 데이터 흐름을 이해하는 데 필수적입니다.
