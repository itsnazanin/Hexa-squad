import { Checkbox } from "../../../../components/ui/checkbox";

const TeacherSelect = ({ teachers = [], selected = [], onChange }) => {

  const toggleTeacher = (id) => {
    if (selected.includes(id)) {
      onChange(selected.filter(t => t !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  if (!teachers.length) {
    return <p className="text-sm text-gray-500">مدرسی یافت نشد</p>;
  }

  return (
    <div className="space-y-3 px-2 max-h-48 overflow-y-auto">
      {teachers.map(t => (
        <div key={t.id} className="flex items-center gap-2">
          <Checkbox
            checked={selected.includes(t.id)}
            onCheckedChange={() => toggleTeacher(t.id)}
          />
          <span className="text-sm">{t.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TeacherSelect;
