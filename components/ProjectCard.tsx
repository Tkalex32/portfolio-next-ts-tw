import { useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

interface Props {
  project: IProject;
}

const ProjectCard: React.FC<Props> = ({
  project: {
    name,
    category,
    deployed_url,
    description,
    github_url,
    image_path,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <div className="relative border border-slate-200 dark:border-slate-700 hover:shadow hover:shadow-gray-200 dark:hover:shadow-slate-600 rounded-md overflow-hidden cursor-pointer">
      {/* <img
        src={image_path}
        alt={name}
        className="peer cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <Image
        src={image_path}
        alt={name}
        className="peer"
        onClick={() => setShowDetail(true)}
        width="300"
        height="150"
        layout="responsive"
      />
      {/* <AiOutlineZoomIn className="absolute w-6 h-6 top-0 right-0 bg-slate-300 dark:text-slate-600 hidden peer-hover:block" /> */}
      <p className="my-2 text-center">{name}</p>
      {showDetail && (
        <div className="fixed inset-0 z-30 overflow-auto bg-gray-500 bg-opacity-60 flex cursor-default">
          <div className="relative p-4 z-40 bg-gray-100 dark:bg-slate-800 w-full max-w-3xl m-auto flex-col flex rounded-lg">
            <div className="grid md:grid-cols-2 z-50 h-auto w-full  gap-x-12 bg-gray-100 text-black dark:text-slate-400 dark:bg-slate-800 p-2 md:p-4">
              <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
              >
                {/* <img src={image_path} alt={name} className="border" /> */}
                <motion.div variants={fadeInUp}>
                  <Image
                    src={image_path}
                    alt={name}
                    width="300"
                    height="150"
                    layout="responsive"
                  />
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="flex justify-center my-4 space-x-3"
                >
                  <a
                    href={github_url}
                    className="flex items-center px-4 py-2 space-x-3 text-lg dark:bg-slate-700"
                  >
                    <AiFillGithub className="text-green-500" />
                    <span>Github</span>
                  </a>
                  <a
                    href={deployed_url}
                    className="flex items-center px-4 py-2 space-x-3 text-lg dark:bg-slate-700"
                  >
                    <AiFillProject className="text-green-500" />
                    <span>Live</span>
                  </a>
                </motion.div>
              </motion.div>
              <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
              >
                <div className="p-2 border border-gray-300 dark:border-slate-700">
                  <motion.h2
                    variants={fadeInUp}
                    className="mb-3 text-xl text-green-500 font-medium md:text-2xl"
                  >
                    {name}
                  </motion.h2>
                  <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
                    {description}
                  </motion.h3>
                </div>
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
                >
                  {key_techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-400 dark:bg-slate-900 rounded-sm px-2 my-1 text-white dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
              <button
                onClick={() => setShowDetail(false)}
                className="absolute p-1 top-3 right-3 rounded bg-slate-600 text-white dark:text-slate-300 focus:outline-none"
              >
                <MdClose size={30} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
