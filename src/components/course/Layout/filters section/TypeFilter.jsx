const TypeFilter = ({ value, onChange }) => {

  const handleFreeChange = () => {
    onChange({
      free: !value?.free,
      paid: false,
    });
  };

  const handlePaidChange = () => {
    onChange({
      free: false,
      paid: !value.paid,
    });
  };

  return (
    <div className="flex w-full gap-6 items-center pr-3 pt-3">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={value?.free}
          onChange={handleFreeChange}
        />
        <span className="text-sm text-[#455A64] font-medium pt-1">فقط رایگان</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={value?.paid}
          onChange={handlePaidChange}
        />
        <span className="text-sm text-[#455A64] font-medium pt-1">فقط پولی</span>
      </label>
    </div>
  );
};

export default TypeFilter;
