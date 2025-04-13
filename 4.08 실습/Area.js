import { useState } from "react";

const Area = () => {
  const [size, setSize] = useState({ width: 150, height: 0 });

  return (
    <div>
      <h1>
        너비 : {size.width}, 높이 : {size.height}
      </h1>
      <button
        onClick={() => {
          if (size.width <= 130) {
          const copy = { ...size };
          copy.width += 20;
          setSize(copy);
          } else if (130 < size.width < 150){
            const copy = { ...size };
            copy.width = 150;
            setSize(copy);
          } 

        }}
      >
        너비 증가
      </button>

      <button
        onClick={() => {
          if (size.width >= 20){
          const copy = { ...size };
          copy.width -= 20;
          setSize(copy);
        } else if (0 < size.width < 20){
          const copy = { ...size };
          copy.width = 0;
          setSize(copy);
        }
         
        }}
      >
        너비 감소
      </button>

      <button
        onClick={() => {
          if (size.height <= 140) {
          const copy = { ...size };
          copy.height += 10;
          setSize(copy);
        }
        }}
      >
        높이 증가
      </button>

      <button
        onClick={() => {
          if (size.height >= 10) { 
          const copy = { ...size };
          copy.height -= 10;
          setSize(copy);
        }
        }}
      >
        높이 감소
      </button>

    </div>
  );
};

export default Area;
