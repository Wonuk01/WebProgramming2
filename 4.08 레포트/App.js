import { useState, useEffect } from 'react';

// MealItem 컴포넌트
function MealItem({ name, description, calories }) {
  return (
    <div className="meal-item">
      <h3 className="meal-name">{name}</h3>
      <p className="meal-description">{description}</p>
      <div className="meal-calories">
        <span>{calories} 칼로리</span>
      </div>
    </div>
  );
}

// MealList 컴포넌트
function MealList({ meals, isLoading, mealCount = 5 }) {
  return (
    <div className="meals-grid">
      {isLoading
        ? [...Array(mealCount)].map((_, index) => (
            <div key={index} className="meal-skeleton">
              <div className="skeleton-title"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-calories"></div>
            </div>
          ))
        : meals.map((meal, index) => (
            <MealItem
              key={index}
              name={meal.name}
              description={meal.description}
              calories={meal.calories}
            />
          ))}
    </div>
  );
}

// TimeSelector 컴포넌트
function TimeSelector({ currentMealTime, onSelect, labels }) {
  return (
    <div className="time-selector">
      {['breakfast', 'lunch', 'dinner'].map((time) => (
        <button
          key={time}
          onClick={() => onSelect(time)}
          className={`time-button ${currentMealTime === time ? 'active' : ''}`}
        >
          {labels[time]}
        </button>
      ))}
    </div>
  );
}

// 메인 컴포넌트
export default function MealRecommendationApp() {
  const [mealTime, setMealTime] = useState('breakfast');
  const [randomMeals, setRandomMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const allMeals = {
    breakfast: [
      { name: '계란후라이', description: '간단하게 구운 계란후라이', calories: 150 },
      { name: '토스트', description: '버터와 딸기잼을 곁들인 토스트', calories: 230 },
      { name: '바나나', description: '포만감을 주는 바나나 한 개', calories: 90 },
      { name: '시리얼', description: '우유와 함께한 아침 시리얼', calories: 200 },
      { name: '두유', description: '고단백 식물성 음료', calories: 120 },
    ],
    lunch: [
      { name: '김치찌개', description: '돼지고기와 함께 끓인 얼큰한 김치찌개', calories: 480 },
      { name: '비빔밥', description: '채소와 고추장을 비벼 먹는 전통 한식', calories: 550 },
      { name: '돈까스', description: '바삭한 튀김옷의 일본식 돈까스', calories: 700 },
      { name: '냉면', description: '시원한 육수와 함께하는 평양냉면', calories: 400 },
      { name: '불고기 덮밥', description: '달콤 짭짤한 불고기와 밥', calories: 520 },
    ],
    dinner: [
      { name: '닭가슴살 샐러드', description: '건강한 저녁을 위한 샐러드', calories: 300 },
      { name: '연어 스테이크', description: '구운 연어와 아스파라거스', calories: 450 },
      { name: '스프와 빵', description: '크림스프와 바게트 조합', calories: 380 },
      { name: '김밥', description: '간단하지만 든든한 김밥 한 줄', calories: 420 },
      { name: '된장국과 밥', description: '전통된장국과 잡곡밥', calories: 410 },
    ],
  };

  const getRandomMeals = (mealType, count = 5) => {
    setIsLoading(true);
    const meals = [...allMeals[mealType]];
    for (let i = meals.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [meals[i], meals[j]] = [meals[j], meals[i]];
    }
    const result = meals.slice(0, count);
    setTimeout(() => {
      setRandomMeals(result);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    getRandomMeals(mealTime);
  }, [mealTime]);

  const refreshMeals = () => {
    getRandomMeals(mealTime);
  };

  const mealTitles = {
    breakfast: '오늘의 아침 메뉴 추천',
    lunch: '오늘의 점심 메뉴 추천',
    dinner: '오늘의 저녁 메뉴 추천',
  };

  const timeLabels = {
    breakfast: '아침',
    lunch: '점심',
    dinner: '저녁',
  };

  return (
    <div className={`app-container ${mealTime}-theme`}>
      <div className="content-wrapper">
        <header className="app-header">
          <h1 className="app-title">오늘 뭐먹을래?</h1>
          <p className="app-subtitle">하루 세끼, 뭘 먹을지 고민하는 너에게! 메뉴를 추천해 드립니다</p>
        </header>

        <div className="menu-card">
          <TimeSelector
            currentMealTime={mealTime}
            onSelect={setMealTime}
            labels={timeLabels}
          />

          <div className="menu-header">
            <h2 className="menu-title">{mealTitles[mealTime]}</h2>
            <button onClick={refreshMeals} className="refresh-button">
              새로운 메뉴 추천
            </button>
          </div>

          <MealList meals={randomMeals} isLoading={isLoading} mealCount={5} />
        </div>

        <div className="info-banner">
          <p>'새로운 메뉴 추천' 버튼을 클릭하거나 다른 시간대를 선택하면 새로운 메뉴를 추천해 드립니다!</p>
        </div>

        <footer className="app-footer">
          <p>© 2025 메뉴 추천 서비스</p>
        </footer>
      </div>
    </div>
  );
}
