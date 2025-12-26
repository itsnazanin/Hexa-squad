import { Checkbox } from "@/components/ui/checkbox";

const CourseType = ({ value, onChange }) => {
  return (
    <div className="space-y-3 px-2">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={value.free}
          onCheckedChange={(checked) =>
            onChange({ ...value, free: checked })
          }
        />
        <span>رایگان</span>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          checked={value.paid}
          onCheckedChange={(checked) =>
            onChange({ ...value, paid: checked })
          }
        />
        <span>پولی</span>
      </div>
    </div>
  );
};

export default CourseType;
