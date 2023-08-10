import '../Assets/CSS/Filter.css'
import { useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

export default function Filter()   {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [minValue2, setMinValue2] = useState(0);
  const [maxValue2, setMaxValue2] = useState(0);
  return (
    <div className="App">

      <div className="multi-range-slider-container">
        <MultiRangeSlider
          onInput={(e) => {
            setMinValue(e.minValue);
            setMaxValue(e.maxValue);
          }}
          onChange={(e) => {
            setMinValue2(e.minValue);
            setMaxValue2(e.maxValue);
          }}
        ></MultiRangeSlider>

      </div>
    </div>
  );
}

