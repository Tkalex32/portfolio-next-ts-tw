import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, routeFade, stagger } from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category, IProject } from "../types";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  const [active, setActive] = useState<string>("all");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newData = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newData);
    setActive(category);
  };

  return (
    <motion.div
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="px-5 py-2 dark:text-slate-400"
    >
      <ProjectsNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <div className="overflow-y-auto h-[75vh]">
        <motion.div
          className="grid grid-cols-12 gap-4 my-3 relative"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.div
              variants={fadeInUp}
              key={project.name}
              className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 "
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
