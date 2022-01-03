import { Skill } from "../types";
import { motion } from "framer-motion";

interface Props {
  data: Skill;
}

const Bar: React.FC<Props> = ({ data: { Icon, level, name } }) => {
  const bar_width = `${level}%`;
  const variants = {
    initial: { width: 0 },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-800 dark:text-slate-200 text-white my-2 rounded-full">
      <motion.div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green-500 to-blue-500"
        style={{ width: bar_width }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
