const PriceFilter = ({  value = { min: 0, max: 0 }, onChange }) => {

  const { min, max } = value;
  
  const handleMinChange = (e) => {
    const newMin = Math.min(Number(e.target.value), value.max - 1);

    onChange({
      min: newMin,
      max: value.max,
    });
  };

  const handleMaxChange = (e) => {
    const newMax = Math.max(Number(e.target.value), value.min + 1);

    onChange({
      min: value.min,
      max: newMax,
    });
  };

  return (
    <div>
      {/* labels */}
      <div>
        <span>از {value.min.toLocaleString()} تومان</span>
        <span>تا {value.max.toLocaleString()} تومان</span>
      </div>

      {/* slider */}
      <div>
        <input
          type="range"
          min={min}
          max={max}
          value={value.min}
          onChange={handleMinChange}
          
        />

        <input
          type="range"
          min={min}
          max={max}
          value={value.max}
          onChange={handleMaxChange}
          
        />
      </div>
    </div>
  );
};

export default PriceFilter;