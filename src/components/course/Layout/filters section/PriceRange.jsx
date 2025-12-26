import { Slider } from "@/components/ui/slider";

const PriceRange = ({ value, min, max, onChange }) => {
    const safeValue = Array.isArray(value) ? value : [min, max];
  return (
    <div className="px-2 py-4 space-y-4">
      <div className="flex justify-between text-sm text-gray-600">
        <span>{safeValue[0]} تومان</span>
        <span>{safeValue[1]} تومان</span>
      </div>

      <Slider
        dir="rtl"
        className="rtl-price-slider"
        min={min}
        max={max}
        step={100}
        value={safeValue}
        onValueChange={onChange}
      />
    </div>
  );
};

export default PriceRange;
