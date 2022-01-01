import { Skill } from "../types";

interface Props {
  data: Skill;
}

const Bar: React.FC<Props> = ({ data: { Icon, level, name } }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 dark:text-slate-200 text-white my-2 rounded-full">
      <div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green-500 to-blue-500"
        style={{ width: `${level}%` }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
